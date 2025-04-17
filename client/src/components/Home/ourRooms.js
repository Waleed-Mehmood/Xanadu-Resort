import React from 'react'
import Leftimg from '../../assets/imgleft1.png'
import Rightimg from '../../assets/imgright1.png'
import bkg from '../../assets/bkg1.png'

function ourRooms() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Blue background top section */}
      <div className="absolute top-0 left-0 w-full h-[400px] z-0 overflow-hidden">
        {/* Background Image with blur */}
        <img
          src={bkg}
          alt="background"
          className="w-full h-full object-cover filter blur-sm scale-110"
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#FDFDFD69]/20"></div>
      </div>




      {/* White content container */}
      <div className="relative z-10 max-w-4xl mx-auto pt-16 pb-20 px-4">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-20 font-jeju">Our Luxury Rooms</h1>
          <button className="absolute top-36 sm:top-32 left-[6rem] sm:left-[15rem] md:left-[20rem] lg:left-[23rem] flex items-center justify-between gap-2 px-10 py-2 text-sm font-medium text-white bg-transparent rounded-full border border-gray-700 transition-all hover:bg-gray-900 hover:bg-opacity-30 z-10">
            <span className='text-left font-jeju text-black'>View Rooms</span>
            <div className="absolute right-[-4px] flex items-center justify-center w-10 h-10 bg-black rounded-full">
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

        {/* Images that overlap the backgrounds */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mt-8">
          {/* Left Image with bottom overlay */}
          <div className="flex-1 relative overflow-hidden  shadow-lg">
            <img
              src={Leftimg}
              alt="Forest stream view"
              className="w-full h-96 object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-[57%] sm:h-[47%] bg-black bg-opacity-60 text-white px-4 py-6 flex flex-col justify-end">
              <h2 className="text-xl font-bold mb-1 text-left">Heritage Cottage Hut</h2>
              <p className="text-sm mb-3 text-left">Our spacious suites embody luxury and sophistication and enjoy the experience with a spacious sitting area, luxury bedding and free Wi-Fi.</p>
              <div className="flex gap-3">
                <button className="bg-transparent font-bold text-white border border-white  px-8 py-2 rounded hover:text-black hover:bg-gray-200 text-sm transition">View More</button>
                <button className="bg-[#D0E4FF] font-bold border text-black border-white px-8 py-2 rounded hover:bg-white hover:text-black text-sm transition">Book Room</button>
              </div>
            </div>
          </div>

          {/* Right Image with bottom overlay */}
          <div className="flex-1 relative overflow-hidden shadow-lg">
            <img
              src={Rightimg}
              alt="Mountain landscape view"
              className="w-full h-96 object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-[57%] sm:h-[47%] bg-black bg-opacity-60 text-white px-4 py-6 flex flex-col justify-end">
              <h2 className="text-xl font-bold mb-1 text-left">Student Room</h2>
              <p className="text-sm mb-3 text-left">Our spacious suites embody luxury and sophistication and enjoy the experience with a spacious sitting area, luxury bedding and free Wi-Fi.</p>
              <div className="flex gap-3">
                <button className="bg-transparent font-bold text-white border border-white px-8 py-2 rounded hover:text-black hover:bg-gray-200 text-sm transition">View More</button>
                <button className="bg-[#D0E4FF] font-bold border text-black border-white px-8 py-2 rounded hover:bg-white hover:text-black text-sm transition">Book Room</button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default ourRooms