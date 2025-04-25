import React, { useState } from "react";

import camps1 from "../../assets/camps1.png";
import camps2 from "../../assets/camps2.png";
import Navbar from "../../components/Common/navbar";

import Footer from "../../components/Footer";
import { BsCheck } from "react-icons/bs";

const Camp = () => {
  // const [roomCount, setRoomCount] = useState(2);
  const [count, setCount] = useState(2);

  return (
    <div>
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <div
        className="relative h-[200px] md:h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${camps1})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-10 w-full text-center text-white z-10">
          <h2 className="text-4xl md:text-5xl font-serif">Camps</h2>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row border rounded-xl shadow-lg overflow-hidden max-w-5xl mx-auto my-10 p-5 space-y-4 lg:space-y-0 lg:space-x-4">
        {/* Left: Image and Icons */}
        <div className="lg:w-1/3 w-full relative">
          <img
            src={camps2}
            alt="Heritage Hut"
            className="h-64 lg:h-full w-full object-cover rounded-xl"
          />
          <div className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
            +5 Photos
          </div>
          <div className="absolute bottom-2 right-2 flex flex-col space-y-2 text-xs text-white bg-black bg-opacity-50 p-2 rounded">
            <div className="flex items-center gap-1">
              <span>👥</span> <span>4 Person Accommodation</span>
            </div>
            <div className="flex items-center gap-1">
              <span>🚪</span> <span>2-Rooms</span>
            </div>
            <div className="flex items-center gap-1">
              <span>🛏️</span> <span>King Size Bed</span>
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-px bg-gray-300" />

        {/* Middle: Description */}
        <div className="lg:w-1/3 w-full p-2 space-y-3">
          <h2 className="text-xl font-semibold text-start">Camps</h2>
          <p className="text-sm text-gray-600 text-start leading-relaxed">
            Our spacious suites embody luxury and sophistication and enjoy the
            experience wit…{" "}
            <span className="text-black cursor-pointer underline">
              Read More
            </span>
          </p>
          <ul className="text-sm space-y-2">
            {["High-Speed Wifi", "Internet", "Hot Water", "Television"].map(
              (item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-500 text-white text-xs">
                    <BsCheck size={16} />
                  </span>
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="hidden lg:block w-px bg-gray-300" />

        {/* Right: Price & Booking */}
        <div className="lg:w-1/3 w-full p-2 flex flex-col justify-between items-start">
          <div className="text-start">
          <div
              className="bg-blue-600 text-white px-4 py-1 font-bold text-sm inline-block"
              style={{
                clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)",
              }}
            >
              20% OFF
            </div>
            <div className="text-xl font-bold">Rs 3,000.00</div>
            <div className="text-sm text-gray-400 line-through">
              Rs 3,600.00
            </div>
            <div className="text-sm text-gray-600 mt-1 underline">
              1 Hut Per Night
            </div>
            <div className="text-sm text-gray-600">4 Adults, 4 Children</div>
          </div>

          <div className="flex items-center justify-center my-4">
            <div className="flex border-2 border-blue-500 rounded-full overflow-hidden w-32">
              <button
                onClick={() => setCount(count - 1)}
                className="flex-1 text-black text-xl font-bold hover:bg-blue-100"
              >
                −
              </button>
              <div className="flex-1 text-center bg-blue-100 text-xl font-bold text-black">
                {count}
              </div>
              <button
                onClick={() => setCount(count + 1)}
                className="flex-1 text-black text-xl font-bold hover:bg-blue-100"
              >
                +
              </button>
            </div>
          </div>

          <button className="w-full lg:w-[150px] bg-[#d0e4ff] text-black py-2  hover:bg-[#bdd9ff] transition text-sm rounded-lg">
            Book Room
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Camp;
