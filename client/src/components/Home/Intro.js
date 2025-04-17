import React from 'react'
import Rightimg from '../../assets/Rightimg.png'
import Leftimg from '../../assets/leftimg.png'

function Intro() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Blue background top section */}
      <div className="absolute top-0 left-0 w-full h-96 bg-blue-100 z-0"></div>
      
      {/* White content container */}
      <div className="relative z-10 max-w-4xl mx-auto pt-16 pb-20 px-4">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-jeju mb-2">Welcome to The World of</h1>
          <h1 className="text-4xl font-jeju mb-6">Luxury and Comfort</h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-center">
            Xanadu is designed to meet the requirements of modern day travelers. We understand
            each trip is different and have thoughtfully balanced the escapes of a peaceful home
            and a luxury hotel.
          </p>
        </div>
        
        {/* Images that overlap the backgrounds */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mt-8">
          <div className="flex-1">
            <img 
              src={Leftimg}
              alt="Forest stream view" 
              className="w-full h-100 object-cover"
            />
          </div>
          <div className="flex-1">
            <img 
              src={Rightimg}
              alt="Mountain landscape view" 
              className="w-full h-100 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro