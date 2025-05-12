import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaCalendarAlt, FaUsers } from "react-icons/fa";
import { format } from "date-fns";

function BookingBar() {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());

  const [nights, setNights] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children6to12, setChildren6to12] = useState(0);
  const [children13to17, setChildren13to17] = useState(0);

  const [showCheckInCalendar, setShowCheckInCalendar] = useState(false);
  const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false);

  const formatDate = (date) => format(date, "dd MMM yyyy");

  return (
    <div className="w-full bg-white pt-2 px-2 md:px-10 shadow-md mt-5 mb-5 relative z-10 md:min-h-[80px]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-1 w-full md:pr-40 relative">
        {/* Check-in Date */}
        <div
          className="flex items-center rounded-lg p-3 w-full md:w-auto cursor-pointer relative hover:bg-gray-100"
          onClick={() => {
            setShowCheckInCalendar(!showCheckInCalendar);
            setShowCheckOutCalendar(false);
          }}
        >
          <FaCalendarAlt className="text-blue-700 mr-2" size={20} />
          <div>
            <h1 className="font-medium text-sm">Check in</h1>
            <p className="text-xs text-gray-500">{formatDate(checkInDate)}</p>
          </div>

          {showCheckInCalendar && (
            <div className="absolute top-full mt-2 z-50">
              <Calendar
                onChange={(date) => {
                  setCheckInDate(date);
                  setShowCheckInCalendar(false);
                }}
                value={checkInDate}
              />
            </div>
          )}
        </div>

        <Divider />

        {/* Check-out Date */}
        <div
          className="flex items-center rounded-lg p-3 w-full md:w-auto cursor-pointer relative hover:bg-gray-100"
          onClick={() => {
            setShowCheckOutCalendar(!showCheckOutCalendar);
            setShowCheckInCalendar(false);
          }}
        >
          <FaCalendarAlt className="text-blue-700 mr-2" size={20} />
          <div>
            <p className="font-medium text-sm">Check out</p>
            <p className="text-xs text-gray-500">{formatDate(checkOutDate)}</p>
          </div>

          {showCheckOutCalendar && (
            <div className="absolute top-full mt-2 z-50">
              <Calendar
                onChange={(date) => {
                  setCheckOutDate(date);
                  setShowCheckOutCalendar(false);
                }}
                value={checkOutDate}
                minDate={checkInDate}
              />
            </div>
          )}
        </div>

        <Divider />

        {/* Nights */}
        <NumberInput label="Nights" value={nights} onChange={setNights} />

        <Divider />

        {/* Adults */}
        <NumberInput label="Adults" value={adults} onChange={setAdults} />

        <Divider />

        {/* 6-12 Y */}
        <NumberInput
          label="6-12 Y"
          value={children6to12}
          onChange={setChildren6to12}
        />

        <Divider />

        {/* 13-17 Y */}
        <NumberInput
          label="13-17 Y"
          value={children13to17}
          onChange={setChildren13to17}
        />

        {/* Search Button */}
        {/* Search Button */}
<div className="w-full md:w-auto md:absolute md:right-10 md:top-1/2 md:-translate-y-1/2 mt-3 md:mt-0">
  <button
    className="w-full md:w-auto bg-blue-700 hover:bg-blue-800 text-white font-medium text-sm px-6 py-3 rounded-full transition duration-200"
    onClick={() => {
      console.log({
        checkInDate,
        checkOutDate,
        nights,
        adults,
        children6to12,
        children13to17,
      });
    }}
  >
    Search
  </button>
</div>

      </div>
    </div>
  );
}

const Divider = () => (
  <>
    <div className="hidden md:block h-10 border-l border-gray-300 mx-4"></div>
    <div className="block md:hidden w-full border-t border-gray-200 my-2"></div>
  </>
);

const NumberInput = ({ label, value, onChange }) => (
  <div className="flex items-center rounded-lg p-3 w-full md:w-auto">
    <FaUsers className="text-blue-700 mr-2" size={20} />
    <div>
      <p className="font-medium text-sm">{label}</p>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-16 text-xs text-gray-700 border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        min="0"
      />
    </div>
  </div>
);

export default BookingBar;
