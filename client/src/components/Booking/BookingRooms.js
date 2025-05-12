import React, { useState } from "react";

const BookingRooms = ({ roomData }) => {
    const [showAmenities, setShowAmenities] = useState(false);
    const [showRates, setShowRates] = useState(false);

    const toggleAmenities = () => setShowAmenities(!showAmenities);
    const toggleRates = () => setShowRates(!showRates);

    return (
        <div className="flex flex-col md:flex-row justify-between border rounded-xl p-4 shadow-md bg-white my-4">
            {/* Left - Image */}
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <img
                    src={roomData.image}
                    alt={roomData.title}
                    className="w-full h-48 object-cover rounded-lg"
                />
            </div>

            {/* Center - Details */}
            <div className="w-full md:w-2/4 px-4">
                <h2 className="text-xl font-semibold mb-2">{roomData.title}</h2>
                <p className="text-gray-700 mb-3">{roomData.details}</p>
                <button
                    className="text-blue-600 hover:underline mb-2"
                    onClick={toggleAmenities}
                >
                    {showAmenities ? "Hide Amenities" : "More Information"}
                </button>
                {showAmenities && (
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                        {roomData.amenities.map((amenity, index) => (
                            <li key={index}>{amenity}</li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Right - Price & Rates */}
            <div className="w-full md:w-1/4 text-right">
                <p className="text-lg font-bold text-green-700">From Rs {roomData.price}</p>
                <button
                    className="text-blue-600 hover:underline mt-2"
                    onClick={toggleRates}
                >
                    {showRates ? "Hide Rates" : "Show Rates"}
                </button>
                {showRates && (
                    <div className="mt-3 text-sm text-gray-700 space-y-1">
                        <p>Max Adults: {roomData.maxAdults}</p>
                        <p>Max Children: {roomData.maxChildren}</p>
                        <p>Max Per Room: {roomData.maxPerRoom}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookingRooms;
