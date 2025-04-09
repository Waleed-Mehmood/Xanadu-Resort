import React, {useState, useRef, useEffect} from 'react'
import Bkg from '../../assets/Bck.png'

function Services() {
  const scrollContainer = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const facilities = [
    {
      id: 1,
      name: 'Heritage Cottage Room',
      image: Bkg, // Use the imported image directly
    },
    {
      id: 2,
      name: 'Outdoor Camping',
      image: Bkg, // Applied to all images
    },
    {
      id: 3,
      name: 'Jeep 4D ViewPoint',
      image: Bkg, // Applied to all images
    },
    {
      id: 4,
      name: 'Luxury Spa',
      image: Bkg, // Applied to all images
    },
    {
      id: 5,
      name: 'Fine Dining',
      image: Bkg, // Applied to all images
    }
  ];

  const handleMouseDown = (e) => {
    if (!scrollContainer.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainer.current.offsetLeft);
    setScrollLeft(scrollContainer.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollContainer.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainer.current.scrollLeft = scrollLeft - walk;
  };

  // For touch devices
  const handleTouchStart = (e) => {
    if (!scrollContainer.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainer.current.offsetLeft);
    setScrollLeft(scrollContainer.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !scrollContainer.current) return;
    const x = e.touches[0].pageX - scrollContainer.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainer.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Add and remove event listeners for document to handle cursor outside component
  useEffect(() => {
    const handleMouseUpOutside = () => {
      setIsDragging(false);
    };

    document.addEventListener('mouseup', handleMouseUpOutside);
    return () => {
      document.removeEventListener('mouseup', handleMouseUpOutside);
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="md:w-1/3">
          <h2 className="text-3xl font-light text-gray-800 mb-1">Facilities and</h2>
          <h2 className="text-3xl font-light text-gray-800">Services</h2>
        </div>
        
        <div className="md:w-2/3">
          <p className="text-gray-600">
            Indulge in a world of luxury and comfort with our exclusive resort amenities,
            designed to create unforgettable experiences for you. Our Sanctuary of Luxury
            and comfort awaits your arrival
          </p>
        </div>
      </div>

      <div 
        className="relative cursor-grab"
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div 
          ref={scrollContainer}
          className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {facilities.map((facility) => (
            <div 
              key={facility.id} 
              className="flex-none w-72 relative select-none"
            >
              <div className="relative h-64 w-full">
                <img 
                  src={facility.image} 
                  alt={facility.name} 
                  className="w-full h-full object-cover"
                  draggable="false"
                />
                <div className="absolute bottom-0 left-0 p-3 bg-black bg-opacity-30 w-full">
                  <p className="text-white text-sm">{facility.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services