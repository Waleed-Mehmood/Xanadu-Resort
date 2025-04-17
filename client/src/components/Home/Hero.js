import React from 'react';
import bkg from '../../assets/Bck.png';

function Hero() {
  return (
    <div className="relative">
      <div
        className="w-full h-screen bg-cover bg-center flex items-end justify-start relative"
        style={{ backgroundImage: `url(${bkg})` }}
      >
        {/* Circular Button - positioned top-right middle area */}
        <div className="absolute top-20 right-16 z-20">
          <button
            onClick={() => console.log("Book your stay clicked")}
            className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
          >
            {/* Sky blue background */}
            <div className="absolute inset-0 bg-[#D0E4FF]" />
            
            {/* White border */}
            <div className="absolute inset-0 rounded-full border-2" />
            
            {/* Text in the middle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-center text-gray-800 font-serif text-lg px-4">
                Book your stay
              </span>
            </div>
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-black via-black to-transparent opacity-70 z-0" />
        {/* Text container - moved up by adjusting bottom padding */}
        <div className="relative z-10 text-white w-1/2 p-20 pb-32">
          <h1 className="text-4xl md:text-6xl text-start font-jeju">Your Gateway to</h1>
          <p className="text-4xl md:text-6xl text-start font-[400px] font-jeju">Unforgettable</p>
          <p className="text-4xl md:text-6xl text-start font-[400px] font-jeju">Memories</p>
        </div>

        {/* Line beneath, starting from left of text container to end of screen */}
        <div className="absolute bottom-20 left-8 right-5 h-1 bg-white z-0" />

        {/* View Rooms button positioned below the line on right side */}
        <button className="absolute bottom-4 right-16 flex items-center justify-between gap-2 px-10 py-2 text-sm font-medium text-white bg-transparent rounded-full border border-gray-700 transition-all hover:bg-gray-900 hover:bg-opacity-30 z-10">
          <span className='text-left'>View Rooms</span>
          <div className="absolute right-[-4px] flex items-center justify-center w-10 h-10 bg-white rounded-full">
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
              className="text-black"
              style={{ transform: 'rotate(30deg)' }}
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Hero;