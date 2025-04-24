import { useState } from 'react';
import { Upload, Plus, X, Calendar, Clock, Users, MapPin, Edit, Trash2, Bed } from 'lucide-react';

export default function ServiceForm() {
  const [services, setServices] = useState([
    { 
      id: 1, 
      name: 'Spa Treatment', 
      description: 'Relaxing spa treatments for rejuvenation',
      features: [
        { id: 'equipment', name: 'Equipment Provided', icon: 'equipment' },
        { id: 'refreshments', name: 'Refreshments', icon: 'refreshments' }
      ],
      serviceDetails: {
        maxAdults: 1,
        maxChildren: 0,
        location: 'Single Bed',
        numRooms: 1
      },
      pricing: { 
        originalPrice: 2500, 
        discountPercentage: 10, 
        priceLabel: 'Per Session',
        finalPrice: 2250
      },
      availability: {
        daysAvailable: ['Monday', 'Wednesday', 'Friday'],
        timeSlots: ['Morning', 'Evening']
      },
      images: []
    },
    { 
      id: 2, 
      name: 'Yoga Class', 
      description: 'Professional yoga training for all levels',
      features: [
        { id: 'instructor', name: 'Professional Instructor', icon: 'instructor' },
        { id: 'certificate', name: 'Certificate', icon: 'certificate' }
      ],
      serviceDetails: {
        maxAdults: 8,
        maxChildren: 2,
        location: 'Double Bed',
        numRooms: 2
      },
      pricing: { 
        originalPrice: 1500, 
        discountPercentage: 0, 
        priceLabel: 'Per Session',
        finalPrice: 1500
      },
      availability: {
        daysAvailable: ['Tuesday', 'Thursday', 'Saturday'],
        timeSlots: ['Morning', 'Afternoon']
      },
      images: []
    },
    { 
      id: 3, 
      name: 'Fitness Training', 
      description: 'Personalized fitness sessions with professional trainers',
      features: [
        { id: 'equipment', name: 'Equipment Provided', icon: 'equipment' },
        { id: 'instructor', name: 'Professional Instructor', icon: 'instructor' }
      ],
      serviceDetails: {
        maxAdults: 3,
        maxChildren: 1,
        location: 'King Size Bed',
        numRooms: 3
      },
      pricing: { 
        originalPrice: 3000, 
        discountPercentage: 15, 
        priceLabel: 'Per Hour',
        finalPrice: 2550
      },
      availability: {
        daysAvailable: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        timeSlots: ['Morning', 'Afternoon', 'Evening']
      },
      images: []
    },
  ]);
  
  const [showModal, setShowModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [editingService, setEditingService] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    images: [],
    features: [],
    serviceDetails: {
      maxAdults: 2,
      maxChildren: 2,
      location: 'Single Bed',
      numRooms: 1
    },
    pricing: {
      originalPrice: 0,
      discountPercentage: 0,
      priceLabel: 'Per Session'
    },
    availability: {
      daysAvailable: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      timeSlots: ['Morning', 'Afternoon']
    }
  });

  const [imagePreview, setImagePreview] = useState([]);

  const featureOptions = [
    { id: 'equipment', name: 'Equipment Provided', icon: 'equipment' },
    { id: 'instructor', name: 'Professional Instructor', icon: 'instructor' },
    { id: 'certificate', name: 'Certificate', icon: 'certificate' },
    { id: 'refreshments', name: 'Refreshments', icon: 'refreshments' }
  ];

  const locationOptions = [
    'Single Bed',
    'Double Bed',
    'Queen Size Bed',
    'King Size Bed'
  ];
  
  const daysOfWeek = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];
  
  const timeSlotOptions = [
    'Morning', 'Afternoon', 'Evening', 'Night'
  ];

  const openImageModal = (image) => {
    setCurrentImage(image);
    setShowImageModal(true);
  };

  const handleEditService = (service) => {
    setIsEditing(true);
    setEditingService(service);
    
    // Set form data to the service being edited
    setFormData({
      ...service,
      // Create a shallow copy of images to avoid reference issues
      images: [...service.images]
    });
    
    // Create image previews if available
    if (service.images && service.images.length > 0) {
      const previews = service.images.map(img => {
        if (typeof img === 'string') return img;
        return URL.createObjectURL(img);
      });
      setImagePreview(previews);
    } else {
      setImagePreview([]);
    }
    
    setShowModal(true);
  };

  const handleDeleteService = (serviceId) => {
    if (alert('Are you sure you want to delete this service?')) {
      setServices(services.filter(service => service.id !== serviceId));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFeatureToggle = (feature) => {
    setFormData(prev => {
      const features = prev.features.some(f => f.id === feature.id)
        ? prev.features.filter(f => f.id !== feature.id)
        : [...prev.features, feature];
      
      return { ...prev, features };
    });
  };
  
  const handleDayToggle = (day) => {
    setFormData(prev => {
      const daysAvailable = prev.availability.daysAvailable.includes(day)
        ? prev.availability.daysAvailable.filter(d => d !== day)
        : [...prev.availability.daysAvailable, day];
      
      return { 
        ...prev, 
        availability: {
          ...prev.availability,
          daysAvailable
        }
      };
    });
  };
  
  const handleTimeSlotToggle = (timeSlot) => {
    setFormData(prev => {
      const timeSlots = prev.availability.timeSlots.includes(timeSlot)
        ? prev.availability.timeSlots.filter(t => t !== timeSlot)
        : [...prev.availability.timeSlots, timeSlot];
      
      return { 
        ...prev, 
        availability: {
          ...prev.availability,
          timeSlots
        }
      };
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    
    // Create preview URLs
    const previews = files.map(file => URL.createObjectURL(file));
    setImagePreview(prev => [...prev, ...previews]);
    
    // Store files in form data
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...files]
    }));
  };

  const removeImage = (index) => {
    setImagePreview(prev => prev.filter((_, i) => i !== index));
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Calculate final price with discount
    const finalPrice = formData.pricing.originalPrice * (1 - formData.pricing.discountPercentage / 100);
    
    if (isEditing && editingService) {
      // Update existing service
      const updatedServices = services.map(service => {
        if (service.id === editingService.id) {
          return {
            ...formData,
            id: service.id,
            pricing: {
              ...formData.pricing,
              finalPrice
            }
          };
        }
        return service;
      });
      
      setServices(updatedServices);
    } else {
      // Create new service
      const newService = {
        ...formData,
        id: services.length > 0 ? Math.max(...services.map(s => s.id)) + 1 : 1,
        pricing: {
          ...formData.pricing,
          finalPrice
        }
      };
      
      // Add to services array
      setServices([...services, newService]);
    }
    
    // Reset form and close modal
    resetForm();
    setShowModal(false);
    setIsEditing(false);
    setEditingService(null);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      images: [],
      features: [],
      serviceDetails: {
        maxAdults: 2,
        maxChildren: 2,
        location: 'Single Bed',
        numRooms: 1
      },
      pricing: {
        originalPrice: 0,
        discountPercentage: 0,
        priceLabel: 'Per Session'
      },
      availability: {
        daysAvailable: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        timeSlots: ['Morning', 'Afternoon']
      }
    });
    setImagePreview([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Our Services</h1>
          <button 
            onClick={() => {
              setIsEditing(false);
              setEditingService(null);
              resetForm();
              setShowModal(true);
            }}
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            <Plus size={18} className="mr-2" /> New Service
          </button>
        </div>
        
        {/* Services Grid - 3 cards per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(service => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden relative">
              {/* Card Actions: Edit and Delete buttons */}
              <div className="absolute top-2 right-2 flex space-x-2 z-10">
                <button 
                  onClick={() => handleEditService(service)}
                  className="bg-white p-2 rounded-full shadow hover:bg-blue-100 transition-colors"
                >
                  <Edit size={16} className="text-blue-600" />
                </button>
                <button 
                  onClick={() => handleDeleteService(service.id)}
                  className="bg-white p-2 rounded-full shadow hover:bg-red-100 transition-colors"
                >
                  <Trash2 size={16} className="text-red-600" />
                </button>
              </div>
              
              {/* Clickable Image Area */}
              <div 
                className="h-40 bg-gray-200 flex items-center justify-center cursor-pointer"
                onClick={() => {
                  if (service.images && service.images.length > 0) {
                    openImageModal(service.images[0]);
                  }
                }}
              >
                {service.images && service.images.length > 0 ? (
                  <img 
                    src={URL.createObjectURL(service.images[0])} 
                    alt={service.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-gray-400">No Image</div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-3">{service.description}</p>
                
                {/* Service Details Section */}
                <div className="mb-3 grid grid-cols-2 gap-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users size={16} className="mr-1" />
                    <span>Adults: {service.serviceDetails.maxAdults}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users size={16} className="mr-1" />
                    <span>Children: {service.serviceDetails.maxChildren}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Bed size={16} className="mr-1" />
                    <span>{service.serviceDetails.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin size={16} className="mr-1" />
                    <span>Rooms: {service.serviceDetails.numRooms}</span>
                  </div>
                </div>
                
                {/* Features Section */}
                {service.features && service.features.length > 0 && (
                  <div className="mb-3">
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map(feature => (
                        <span 
                          key={feature.id} 
                          className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded"
                        >
                          {feature.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Availability Section */}
                <div className="mb-3">
                  <h4 className="text-sm font-medium text-gray-700 mb-1">Availability</h4>
                  <div className="flex flex-wrap gap-1 mb-1">
                    {service.availability.daysAvailable.map(day => (
                      <span 
                        key={day} 
                        className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded"
                      >
                        {day.substring(0, 3)}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {service.availability.timeSlots.map(slot => (
                      <span 
                        key={slot} 
                        className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded"
                      >
                        {slot}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Pricing Information */}
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-lg font-bold text-blue-600">
                        Rs. {service.pricing.finalPrice.toFixed(0)}
                      </span>
                      {service.pricing.discountPercentage > 0 && (
                        <span className="text-sm line-through text-gray-500 ml-2">
                          Rs. {service.pricing.originalPrice}
                        </span>
                      )}
                      <span className="block text-xs text-gray-500">
                        {service.pricing.priceLabel}
                      </span>
                    </div>
                    {service.pricing.discountPercentage > 0 && (
                      <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded">
                        {service.pricing.discountPercentage}% OFF
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Image Enlargement Modal */}
      {showImageModal && currentImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full max-h-screen">
            <button 
              onClick={() => setShowImageModal(false)}
              className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X size={24} className="text-gray-800" />
            </button>
            <img 
              src={URL.createObjectURL(currentImage)} 
              alt="Enlarged view" 
              className="max-w-full max-h-screen object-contain rounded-lg"
            />
          </div>
        </div>
      )}
      
      {/* Modal for Adding/Editing Service */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-screen overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">
                {isEditing ? 'Edit Service' : 'Add New Service'}
              </h2>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Service Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Images
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition duration-200">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="cursor-pointer flex flex-col items-center"
                    >
                      <Upload className="w-12 h-12 text-gray-400 mb-2" />
                      <span className="text-sm text-gray-600">
                        Click to upload or drag and drop images
                      </span>
                    </label>
                  </div>
                  
                  {/* Image Previews */}
                  {imagePreview.length > 0 && (
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      {imagePreview.map((preview, index) => (
                        <div key={index} className="relative">
                          <img
                            src={preview}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Features */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Features
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {featureOptions.map(feature => (
                      <label
                        key={feature.id}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.features.some(f => f.id === feature.id)}
                          onChange={() => handleFeatureToggle(feature)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{feature.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Service Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bed Size
                    </label>
                    <select
                      name="serviceDetails.location"
                      value={formData.serviceDetails.location}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      {locationOptions.map(option => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Number of Rooms field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Rooms
                    </label>
                    <input
                      type="number"
                      name="serviceDetails.numRooms"
                      value={formData.serviceDetails.numRooms}
                      onChange={handleInputChange}
                      min="1"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  {/* Max Adults and Max Children fields */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Max Adults
                    </label>
                    <input
                      type="number"
                      name="serviceDetails.maxAdults"
                      value={formData.serviceDetails.maxAdults}
                      onChange={handleInputChange}
                      min="0"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Max Children
                    </label>
                    <input
                      type="number"
                      name="serviceDetails.maxChildren"
                      value={formData.serviceDetails.maxChildren}
                      onChange={handleInputChange}
                      min="0"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                {/* Pricing */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Original Price (Rs)
                    </label>
                    <input
                      type="number"
                      name="pricing.originalPrice"
                      value={formData.pricing.originalPrice}
                      onChange={handleInputChange}
                      min="0"
                      step="0.01"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Discount (%)
                    </label>
                    <input
                      type="number"
                      name="pricing.discountPercentage"
                      value={formData.pricing.discountPercentage}
                      onChange={handleInputChange}
                      min="0"
                      max="100"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Price Label
                    </label>
                    <input
                      type="text"
                      name="pricing.priceLabel"
                      value={formData.pricing.priceLabel}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Per Session, Per Hour, etc."
                    />
                  </div>
                </div>
                
                {/* Availability */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Days Available
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {daysOfWeek.map(day => (
                      <label
                        key={day}
                        className={`px-4 py-2 border rounded-md cursor-pointer text-sm ${
                          formData.availability.daysAvailable.includes(day)
                            ? 'bg-blue-100 border-blue-500 text-blue-800'
                            : 'bg-white border-gray-300 text-gray-700'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.availability.daysAvailable.includes(day)}
                          onChange={() => handleDayToggle(day)}
                          className="hidden"
                        />
                        {day}
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Time Slots
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {timeSlotOptions.map(slot => (
                      <label
                        key={slot}
                        className={`px-4 py-2 border rounded-md cursor-pointer text-sm ${
                          formData.availability.timeSlots.includes(slot)
                            ? 'bg-blue-100 border-blue-500 text-blue-800'
                            : 'bg-white border-gray-300 text-gray-700'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.availability.timeSlots.includes(slot)}
                          onChange={() => handleTimeSlotToggle(slot)}
                          className="hidden"
                        />
                        {slot}
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-200 flex items-center gap-2"
                  >
                    {isEditing ? (
                      <>
                        <Edit size={20} />
                        Update Service
                      </>
                    ) : (
                      <>
                        <Plus size={20} />
                        Save Service Details
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}