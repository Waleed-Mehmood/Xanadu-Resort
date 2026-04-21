import React from 'react'
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <div>
      <div className='bg-gradient-to-br from-[#D0E4FF] to-[#B8D4FF] py-16'>
        <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>

          {/* Logo and Description */}
          <div className='flex flex-col justify-start'>
            <Link to="/" className='font-bold text-3xl text-left font-serif text-[#1E1E1E] mb-4 hover:text-blue-600 transition inline-block' style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.15)' }}>
              Xanadu Resort
            </Link>

            <p className='text-[#333] text-left font-serif text-sm leading-relaxed'>
              Sanctuary of Luxury and comfort awaits your arrival. Experience the best hospitality with us.
            </p>
          </div>

          {/* Address */}
          <div className='flex flex-col justify-start'>
            <h2 className='text-xl font-bold text-left font-serif text-[#1E1E1E] mb-4 flex items-center gap-2'>
              <FaMapMarkerAlt className='text-[#2564b6]' /> Contact Info
            </h2>
            <div className='space-y-3'>
              <p className='text-[#333] text-left font-serif text-sm'>
                <span className='font-semibold'>Address:</span><br />
                Xanadu Resort, Kumrat Valley, Khyber Pakhtunkhwa, Pakistan
              </p>
              <p className='text-[#333] text-left font-serif text-sm flex items-center gap-2'>
                <FaEnvelope className='text-[#2564b6]' />
                <a href='mailto:support@xanadu.com' className='hover:text-[#2564b6] transition'>support@xanadu.com</a>
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className='flex flex-col justify-start'>
            <h2 className='font-bold text-xl text-left font-serif text-[#1E1E1E] mb-4'>Follow Us</h2>
            <div className='flex items-center text-left gap-5'>
              <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='hover:scale-125 transition transform duration-300' title='Instagram'>
                <FaInstagram className='text-[#2564b6] text-2xl' />
              </a>
              <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer' className='hover:scale-125 transition transform duration-300' title='LinkedIn'>
                <CiLinkedin className='text-[#2564b6] text-2xl' />
              </a>
              <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='hover:scale-125 transition transform duration-300' title='Facebook'>
                <FaFacebook className='text-[#2564b6] text-2xl' />
              </a>
              <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer' className='hover:scale-125 transition transform duration-300' title='Twitter'>
                <FaTwitter className='text-[#2564b6] text-2xl' />
              </a>
              <a href='https://www.youtube.com' target='_blank' rel='noopener noreferrer' className='hover:scale-125 transition transform duration-300' title='YouTube'>
                <FaYoutube className='text-[#2564b6] text-2xl' />
              </a>
            </div>
          </div>

        </div>
        
        {/* Divider */}
        <div className='max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-[#91C0FF]'></div>
      </div>

      {/* Bottom Bar */}
      <div className='bg-gradient-to-r from-[#91C0FF] to-[#7EB3FF] py-6 text-center text-white font-semibold shadow-lg'>
        <p className='mb-1'>© 2025 Xanadu Resort. All Rights Reserved.</p>
        <p className='text-sm font-light'>Developed by TechXServe | Premium Resort Experience</p>
      </div>
    </div>
  )
}

export default Footer
