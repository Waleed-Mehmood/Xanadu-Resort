import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <div>
      <div className='bg-[#D0E4FF] pb-28 pt-4'>
        <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

          {/* Logo and Description */}
          <div>
            <h1 className='font-bold text-2xl text-left font-serif text-[#1E1E1E] mb-2' style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.2)' }}>
              Xanadu Resort
            </h1>

            <p className='text-[#1E1E1E] w-1/2 text-left font-serif'>
              Sanctuary of Luxury and comfort awaits your arrival.
            </p>
          </div>

          {/* Address */}
          <div className=' md:pl-10 lg:pl-24'>
            <h1 className='font-[500px] text-xl text-left font-serif text-[#1E1E1E] mb-2'>Address</h1>
            <p className='text-[#1E1E1E] text-left'>
              Xanadu, ABC City, XYZ Country<br />
              support@xanadu.com
            </p>
          </div>

          {/* Social Icons */}
          <div className='lg:pl-20'>
            <h1 className='font-[500px]  text-xl text-left font-serif text-[#1E1E1E] mb-2'>Follow us</h1>
            <div className='flex items-center text-left gap-8'>
              <FaInstagram className='text-[#2564b6] text-2xl' />
              <CiLinkedin className='text-[#2564b6] text-2xl' />
              <FaFacebook className='text-[#2564b6] text-2xl' />
              <FaTwitter className='text-[#2564b6] text-2xl' />
              <FaYoutube className='text-[#2564b6] text-2xl' />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className='bg-[#91C0FF] p-4 text-center text-white font-semibold'>
        © 2025 Xanadu. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer
