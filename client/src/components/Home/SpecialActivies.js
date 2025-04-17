import React from 'react';
import Specialactivies from '../../assets/specialactivities.png';
import blurimage from '../../assets/blurimg.png';

function SpecialActivies() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full min-h-screen bg-blue-100 p-4 md:p-8" style={{ backgroundColor: "#D0E4FF" }}>
      {/* Left side - Text content */}
      <div className="flex flex-col max-w-full md:max-w-md space-y-4 mb-12 md:mb-0 z-10">
        <h1 className="text-3xl md:text-4xl text-left px-3 md:px-5 font-bold text-gray-800 font-jeju">
          Special Activities
          <br />
          in Our Hotel
        </h1>
        <p className="text-gray-700 text-left px-3 md:pl-5 md:pr-2">
          Discover a realm where opulence meets tranquility, where
          every moment is a symphony of relaxation and refinement.
        </p>
        <div className="mt-8">
          <button className="relative flex items-center justify-between gap-2 ml-4 px-8 md:px-10 py-2 text-sm font-medium text-black bg-transparent rounded-full border border-gray-700 transition-all hover:bg-gray-900 hover:bg-opacity-30">
            <span className="text-left">Learn More</span>
            <div className="absolute right-[-4px] flex items-center justify-center w-8 md:w-10 h-8 md:h-10 bg-black rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
                style={{ transform: 'rotate(30deg)' }}
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Right side - Images */}
      <div className="relative w-full md:w-auto h-64 md:h-auto">
        {/* Blurred background image - hidden on small screens */}
        <div className="hidden md:block absolute -right-10 top-[-250px] w-64 md:w-80 h-96 md:h-[30rem] overflow-hidden rounded-lg">
          <div className="w-full h-full blur-sm">
            <img
              src={blurimage}
              alt="Blurred hotel view"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main image - centered on small screens, positioned on larger screens */}
        <div className="relative  md:absolute md:-right-[30px] lg:-right-[-150px] md:top-[-200px] z-10 w-full md:w-64 h-64 md:h-[21rem] overflow-hidden rounded-lg shadow-lg mx-auto">
          <img
            src={Specialactivies}
            alt="Mountain view with chair by the river"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default SpecialActivies;