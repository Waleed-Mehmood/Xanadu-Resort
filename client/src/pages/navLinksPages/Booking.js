import React from 'react'
import Navbar from '../../components/Common/navbar'
import bkgtop from '../../assets/bookingbg.png'
import Footer from '../../components/Footer'
import BookingPage from '../../components/Booking/BookingPage'
import BookingBar from '../../components/Booking/BookingBar'
import BookingForm from '../../components/Booking/BookingForm'

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