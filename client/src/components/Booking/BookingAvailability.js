import React, { useState } from 'react';

function BookingAvailability() {
    const [showVoucherInput, setShowVoucherInput] = useState(false);
    const [voucherCode, setVoucherCode] = useState('');
    const [showAvailabilityDropdown, setShowAvailabilityDropdown] = useState(false);

    const handleVoucherApply = () => {
        console.log('Voucher Code Applied:', voucherCode);
        // Add your logic here
    };

    return (
        <div className="p-4 border border-gray-300 rounded-md w-full max-w-md mx-auto">
            {/* Voucher Section */}
            <div className="mb-4">
                <button
                    onClick={() => setShowVoucherInput(!showVoucherInput)}
                    className="text-blue-600 font-medium underline"
                >
                    Do You Have A Voucher?
                </button>

                {showVoucherInput && (
                    <div className="mt-2 flex flex-col sm:flex-row gap-2">
                        <input
                            type="text"
                            placeholder="Enter Voucher Code"
                            value={voucherCode}
                            onChange={(e) => setVoucherCode(e.target.value)}
                            className="border border-gray-400 p-2 rounded w-full"
                        />
                        <button
                            onClick={handleVoucherApply}
                            className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
                        >
                            Apply
                        </button>
                    </div>
                )}
            </div>

            {/* Availability Section */}
            <button
                onClick={() => setShowAvailabilityDropdown(!showAvailabilityDropdown)}
                className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 w-full"
            >
                Show Availability
            </button>

            {showAvailabilityDropdown && (
                <div className="mt-4 p-4 border border-dashed border-gray-400 rounded text-center">
                    {/* Replace this with calendar later */}
                    <p className="text-gray-600">[Calendar or availability info will go here]</p>
                </div>
            )}
        </div>
    );
}

export default BookingAvailability;
