import React from 'react'
import { useState } from 'react'
import { FaCalendarAlt, FaUsers } from 'react-icons/fa'
import Navbar from '../components/Common/navbar'
import bkgtop from '../assets/bookingbg.png'
import Footer from '../components/Footer'
import room from '../assets/camps.png'


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

function BookingSteps() {
    const steps = [
        { id: 1, name: 'Your Information', status: 'active' },
        { id: 2, name: 'Payment Information', status: 'upcoming' },
        { id: 3, name: 'Booking Confirmation', status: 'upcoming' }
    ];

    return (
        <div className="w-full max-w-3xl mx-auto py-6">
            <div className="flex items-center">
                {steps.map((step, stepIdx) => (
                    <React.Fragment key={step.id}>
                        {/* Step Circle */}
                        <div className="flex flex-col items-center relative z-10">
                            <div className={`flex items-center justify-center mt-12 w-12 h-12 rounded-full text-sm font-medium
                  ${step.status === 'active' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                                {step.id}
                            </div>
                            {/* Step Label */}
                            <div className="mt-2 text-sm">
                                <p className={`text-center ${step.status === 'active' ? 'font-medium text-gray-900' : 'text-gray-400'}`}>
                                    {step.name}
                                </p>
                            </div>
                        </div>

                        {/* Connector Line */}
                        {stepIdx < steps.length - 1 && (
                            <div className="w-full h-[2px] relative -mx-4">
                                <div className={`absolute top-0 left-0 right-0 h-full ${stepIdx === 0 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

function BookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        address: '',
        specialRequest: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="max-w-6xl p-6 bg-white border-2 rounded-md">
            <h2 className="text-xl font-bold mb-6 text-left">Let Us Know Who You Are</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="w-full p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="flex">
                    <div className="w-16 bg-gray-100 p-3 rounded-l-md text-gray-500 border-r border-gray-200">
                        +91
                    </div>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Mobile Number"
                        className="flex-1 p-3 bg-gray-100 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email ID"
                        className="w-full p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address"
                        className="w-full p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <textarea
                        name="specialRequest"
                        value={formData.specialRequest}
                        onChange={handleChange}
                        placeholder="Special Request"
                        rows="4"
                        className="w-full p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}



function BookingSummary({ bookingData }) {
    // Destructuring the booking data for easier access
    const {
        checkIn,
        checkOut,
        nights,
        roomType,
        quantity,
        roomImage,
        accommodates,
        bedType,
        amenities,
        subtotal,
        taxesAndFees,
        currency = "Rs"
    } = bookingData;

    // Calculate total
    const total = subtotal + taxesAndFees;

    return (
        <div className="max-w-md mx-auto">
            {/* Room Summary Section */}
            <div className="mb-6">
                <h3 className="text-sm font-bold mb-2">Room Summary</h3>
                <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-sm">{checkIn} - {checkOut}</div>
                        <div className="text-sm">{nights} Night{nights !== 1 ? 's' : ''}</div>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                        <div className="font-medium">{roomType} * {quantity}</div>
                        <div className="text-blue-600 text-sm cursor-pointer hover:underline">Change</div>
                    </div>

                    <div className="flex border rounded-md overflow-hidden">
                        <div className="w-1/3">
                            <img
                                src={roomImage || "/api/placeholder/120/120"}
                                alt={roomType}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="w-2/3 p-3 flex flex-col justify-between space-y-2">
                            {accommodates && (
                                <div className="flex items-center text-sm">
                                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor" />
                                    </svg>
                                    <span>{accommodates} Person Accommodation</span>
                                </div>
                            )}

                            {bedType && (
                                <div className="flex items-center text-sm">
                                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 13C7 13.55 6.55 14 6 14C5.45 14 5 13.55 5 13C5 12.45 5.45 12 6 12C6.55 12 7 12.45 7 13ZM19 13C19 13.55 18.55 14 18 14C17.45 14 17 13.55 17 13C17 12.45 17.45 12 18 12C18.55 12 19 12.45 19 13ZM3 19H21V21H3V19ZM5 16H19C19 16 19 8 12 8C5 8 5 16 5 16Z" fill="currentColor" />
                                    </svg>
                                    <span>{bedType}</span>
                                </div>
                            )}

                            {amenities && amenities.map((amenity, index) => (
                                <div key={index} className="flex items-center text-sm">
                                    {amenity.icon ? (
                                        <span className="mr-2">{amenity.icon}</span>
                                    ) : (
                                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L3 11C7.97 6.03 16.03 6.03 21 11L23 9C16.93 2.93 7.08 2.93 1 9ZM9 17L12 20L15 17C13.35 15.34 10.66 15.34 9 17ZM5 13L7 15C9.76 12.24 14.24 12.24 17 15L19 13C15.14 9.14 8.87 9.14 5 13Z" fill="currentColor" />
                                        </svg>
                                    )}
                                    <span>{amenity.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Summary Section */}
            <div>
                <h3 className="text-sm font-bold mb-2">Payment Summary</h3>
                <div className="border rounded-lg p-4">
                    <div className="flex justify-between mb-3">
                        <div className="text-sm">Subtotal:</div>
                        <div className="font-medium">{currency} {subtotal.toFixed(2)}</div>
                    </div>

                    <div className="flex justify-between mb-3">
                        <div className="text-sm">Taxes & Fees:</div>
                        <div className="font-medium">{currency} {taxesAndFees.toFixed(2)}</div>
                    </div>

                    <div className="border-t my-3"></div>

                    <div className="flex justify-between items-center">
                        <div className="text-sm font-medium">Total Pay:</div>
                        <div className="font-bold text-lg">{currency} {total.toFixed(2)}</div>
                    </div>

                    <div className="text-xs text-gray-500 text-right">(Incl of all taxes)</div>
                </div>
            </div>
        </div>
    );
}

// Example of how to use this component with data
function BookingPage() {
    const sampleBookingData = {
        checkIn: "Aug 2, 2025",
        checkOut: "Aug 4, 2025",
        nights: 1,
        roomType: "Student Room",
        quantity: 1,
        roomImage: room, // Replace with actual image path
        accommodates: 2,
        bedType: "King Size Bed",
        amenities: [
            { name: "Free Wifi" }
        ],
        subtotal: 6000.00,
        taxesAndFees: 1200.00,
        currency: "Rs"
    };

    return (
        <div>
            <BookingSummary bookingData={sampleBookingData} />
        </div>
    );
}


function Booking() {
    return (
        <>
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
                        Booking
                    </h1>
                </div>
                {/* Booking card */}
                <div className='bg-[#D0E4FF] py-8 px-4'>
                    <BookingBar />
                </div>
                {/* Booking form */}
                <div className='bg-white h-[1400px] md:h-[900px]'>
                    {/* Your booking form content goes here */}
                    <BookingSteps />
                    <div className="bg-white py-8">
                        <div className="container mx-auto px-6">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="w-full md:w-[60%] order-2 md:order-1">
                                    <BookingForm />
                                </div>
                                <div className="w-full md:w-1/3 order-1 md:order-2">
                                    <BookingPage />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        </>
    )
}

export default Booking