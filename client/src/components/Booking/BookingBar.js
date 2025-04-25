import React from 'react'
import { useState } from 'react'
import { FaCalendarAlt, FaUsers } from 'react-icons/fa'

function BookingBar() {
    const [checkInDate, setCheckInDate] = useState('10 Aug 2025')
    const [checkOutDate, setCheckOutDate] = useState('11 Aug 2025')
    const [roomCount, setRoomCount] = useState(1)

    return (
        <div className="w-full bg-white pt-2 px-6 md:px-10 rounded-md md:rounded-full shadow-md mt-5 mb-5 relative z-10 mx-auto max-w-4xl md:min-h-[80px]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-1 w-full md:pr-40">

                {/* Check-in Date */}
                <div className="flex items-center rounded-lg p-3 w-full md:w-auto">
                    <FaCalendarAlt className="text-blue-700 mr-2" size={20} />
                    <div>
                        <h1 className="font-medium text-sm">Check in</h1>
                        <p className="text-xs text-gray-500">{checkInDate}</p>
                    </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block h-10 border-l border-gray-300 mx-4"></div>
                <div className="block md:hidden w-full border-t border-gray-200 my-2"></div>

                {/* Check-out Date */}
                <div className="flex items-center  rounded-lg p-3 w-full md:w-auto">
                    <FaCalendarAlt className="text-blue-700 mr-2" size={20} />
                    <div>
                        <p className="font-medium text-sm">Check out</p>
                        <p className="text-xs text-gray-500">{checkOutDate}</p>
                    </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block h-10 border-l border-gray-300 mx-4"></div>
                <div className="block md:hidden w-full border-t border-gray-200 my-2"></div>

                {/* Room Selection */}
                <div className="flex items-center rounded-lg p-3 w-full md:w-auto">
                    <FaUsers className="text-blue-700 mr-2" size={20} />
                    <div>
                        <p className="font-medium text-sm">Student Room</p>
                        <p className="text-xs text-gray-500">{roomCount} room</p>
                    </div>
                </div>
            </div>

            {/* Check Availability Button */}
            <button
                className="bg-blue-700 text-sm text-white font-medium px-4 py-5 md:px-8 md:py-1 rounded-full 
               w-full mt-4 
               md:mt-0 md:w-auto md:h-full 
               md:absolute md:top-0 md:right-0"
            >
                Check Availability
            </button>
        </div>



    )
}

export default BookingBar;