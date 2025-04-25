import React from 'react'


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

export default BookingSummary;