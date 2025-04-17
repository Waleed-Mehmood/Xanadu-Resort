import React from 'react'
import Navbar from '../components/Common/navbar'
import bkgtop from '../assets/bkg1.png'
import heritagehut from '../assets/heritagehut.png'
import camps from '../assets/camps.png'
import Rightimg from '../assets/imgleft1.png'
import studentimg from '../assets/imgright1.png'
import Footer from '../components/Footer'


function Lodging() {

  const rooms = [
    {
      title: "Heritage Hut",
      description:
        "Our spacious suites embody luxury and sophistication and enjoy the experience with a spacious sitting area, luxury bedding and free Wi-Fi.",
      image: heritagehut,
    },
    {
      title: "Camps",
      description:
        "Our spacious suites embody luxury and sophistication and enjoy the experience with a spacious sitting area, luxury bedding and free Wi-Fi.",
      image: camps,
    }, {
      title: "Heritage Cottage Room",
      description:
        "Our spacious suites embody luxury and sophistication and enjoy the experience with a spacious sitting area, luxury bedding and free Wi-Fi.",
      image: Rightimg,
    }, {
      title: "Student Room",
      description:
        "Our spacious suites embody luxury and sophistication and enjoy the experience with a spacious sitting area, luxury bedding and free Wi-Fi.",
      image: studentimg,
    },
  ];


  return (
    <div>
      <Navbar />
      <div>
        <div className="relative">
          <img
            src={bkgtop}
            alt="."
            className="h-48 sm:h-64 md:h-auto w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#1E1E1E] to-transparent"></div>
          <h1 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 font-jeju text-3xl sm:text-5xl text-white">
            Lodging
          </h1>
        </div>


        {/* Second Part */}

        <div className="relative w-full min-h-screen">
          {/* Blue background top section */}
          <div className="absolute top-0 left-0 w-full h-96 bg-[#D0E4FF] z-0"></div>

          {/* White content container */}
          <div className="relative z-10 max-w-4xl mx-auto pt-16 pb-20 px-4">
            {/* Heading Section */}
            <div className="text-center mb-8">
              <p className="text-black max-w-2xl mx-auto text-center font-jeju">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim
              </p>
            </div>

            {/* Images that overlap the backgrounds */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {rooms.map((room, index) => (
                <div key={index} className="relative overflow-hidden shadow-lg">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[55%] sm:h-[47%] bg-black bg-opacity-60 text-white px-4 py-6 flex flex-col justify-end">
                    <h2 className="text-xl font-[600] mb-1 text-left">{room.title}</h2>
                    <p className="text-sm mb-3 text-left font-[400]">{room.description}</p>
                    <div className="flex gap-3">
                      <button className="bg-transparent font-bold text-white border border-white px-8 py-2 rounded hover:text-black hover:bg-gray-200 text-sm transition">
                        View More
                      </button>
                      <button className="bg-[#D0E4FF] font-bold border text-black border-white px-8 py-2 rounded hover:bg-white hover:text-black text-sm transition">
                        Book Room
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>


          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Lodging