import React from "react";
import Navbar from "../components/Common/navbar";
import resort from "../assets/resort.png";
import resort2 from "../assets/resort2.png";
import resort3 from "../assets/resort3.png";
import vision1 from "../assets/ourvision1.png";
import vision2 from "../assets/ourvision2.png";
import Footer from "../components/Footer";

const Resort = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <div
        className="relative h-[200px] md:h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${resort})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Centered Heading */}
        <div className="absolute bottom-10 w-full text-center text-white z-10">
          <h2 className="text-4xl md:text-5xl font-serif">Our Resort</h2>
        </div>
      </div>

      <div className="bg-blue-100 py-12 px-6 flex justify-center items-center">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Image */}
          <img
            src={resort2}
            alt="Scenery"
            className="w-48 h-48 md:w-48 md:h-48 object-cover rotate-[-10deg] rounded-md"
          />

          {/* Center Text */}
          <div className="text-center text-gray-800  leading-loose max-w-2xl px-2 md:px-0">
            <p>
              Welcome to{" "}
              <span className="font-semibold text-gray-900">Xanadu</span>, where
              every story begins with a journey, and every journey becomes a{" "}
              <span className="font-semibold">forgettable tale</span>. Our story
              is one of passion for travel, a love for{" "}
              <span className="font-semibold text-gray-900">
                exceptional destinations
              </span>
              , and an unwavering commitment to providing you with the{" "}
              <span className="font-semibold text-gray-900">
                ultimate hospitality
              </span>{" "}
              experience.
            </p>
          </div>

          {/* Right Image */}
          <img
            src={resort3}
            alt="Chairs in forest"
            className="w-48 h-48 md:w-48 md:h-48 object-cover rotate-[3deg] rounded-md mt-8 md:mt-28"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-6 py-12 gap-8 bg-white">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <img
            src={vision1}
            alt="Splashing Car"
            className="w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 object-cover shadow-lg rounded-md"
          />
          <img
            src={vision2}
            alt="Mountain Landscape"
            className="w-64 h-40 sm:w-72 md:w-96 md:h-56 object-cover shadow-md rounded-md absolute top-[-30px] sm:top-[-40px] right-[-20px] md:right-[-150px] border-4 border-white"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-0 md:mt-52">
          <h2 className="text-2xl sm:text-2xl lg:text-3xl font-serif font-semibold mb-2">
            Our Vision
          </h2>
          <p className="text-gray-700 text-sm lg:text-base leading-relaxed px-2 sm:px-0">
            At Xanadu, our vision is to redefine the art of hospitality, setting
            new standards of excellence in industry. We aspire to be more than
            just a place to stay; we aim to be a destination in itself, where
            every guest is embraced by the beauty of their surroundings and the
            warmth of our hospitality.
          </p>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Resort;
