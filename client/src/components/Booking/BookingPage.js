import React from 'react'
import room from '../../assets/camps.png'
import BookingSummary from './BookingSummary'
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
            { name: "Free Wifi" },
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

export default BookingPage;