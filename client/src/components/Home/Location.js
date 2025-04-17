import React, { useState } from 'react';
import location from '../../assets/location.png';

function Location() {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div>
      <div className="h-[600px] mb-10">
        <div className="relative h-[550px] mt-4 mx-5">
          <img
            src={location}
            alt="location"
            onClick={toggleZoom}
            className="h-full w-full object-contain cursor-pointer"
          />

          <div className="absolute bottom-[-50px] left-0 right-0 bg-white p-6 md:p-8 shadow-md rounded-t-lg mx-4 md:mx-16 lg:mx-32">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-bold">Xanadu</h2>
                <p className="text-gray-600 text-sm mt-1">
                  Xanadu, ABC City, XYZ Country
                </p>
              </div>
              <div className="text-left md:text-right">
                <p className="font-medium">Monday to Saturday</p>
                <p className="text-gray-600">9am - 7pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isZoomed && (
        <div
          onClick={toggleZoom}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50"
        >
          <img
            src={location}
            alt="Zoomed Location"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
}

export default Location;
