import React, { useState } from "react";
import { Calendar, Plus, Trash2, Edit, Check, X } from "lucide-react";

// Initial booking data structure with status
const initialBookings = [
  {
    id: 1,
    userName: "John Doe",
    phoneNumber: "+1 (555) 123-4567",
    email: "john.doe@example.com",
    address: "123 Main St, Cityville, State 12345",
    roomType: "Deluxe Room",
    bookingDate: "2024-06-15",
    checkIn: "2024-07-01",
    checkOut: "2024-07-05",
    totalGuests: 2,
    totalCost: "$500",
    status: "approved", // 'pending', 'approved', 'declined'
  },
  {
    id: 2,
    userName: "Jane Smith",
    phoneNumber: "+1 (555) 987-6543",
    email: "jane.smith@example.com",
    address: "456 Oak Ave, Townsville, State 67890",
    roomType: "Standard Room",
    bookingDate: "2024-06-18",
    checkIn: "2024-07-10",
    checkOut: "2024-07-12",
    totalGuests: 1,
    totalCost: "$250",
    status: "pending",
  },
];

const BookingManagementSystem = () => {
  const [bookings, setBookings] = useState(initialBookings);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isAddBookingOpen, setIsAddBookingOpen] = useState(false);
  const [isEditBookingOpen, setIsEditBookingOpen] = useState(false);
  const [editingBooking, setEditingBooking] = useState(null);
  const [newBooking, setNewBooking] = useState({
    userName: "",
    phoneNumber: "",
    email: "",
    address: "",
    roomType: "",
    checkIn: "",
    checkOut: "",
    totalGuests: 1,
    totalCost: "",
    status: "approved", // Admin-created bookings are auto-approved
  });
  // New state variables for delete confirmation
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [bookingToDelete, setBookingToDelete] = useState(null);

  // Function to approve a booking
  const handleApproveBooking = (bookingId) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === bookingId ? { ...booking, status: "approved" } : booking
      )
    );
  };

  // Function to decline a booking
  const handleDeclineBooking = (bookingId) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === bookingId ? { ...booking, status: "declined" } : booking
      )
    );
  };

  // Function to open edit dialog
  const handleEditBooking = (booking) => {
    setEditingBooking({ ...booking });
    setIsEditBookingOpen(true);
  };

  // Function to save edited booking
  const handleSaveEdit = () => {
    setBookings(
      bookings.map((booking) =>
        booking.id === editingBooking.id ? editingBooking : booking
      )
    );
    setIsEditBookingOpen(false);
    setEditingBooking(null);
  };

  // Function to handle adding a new booking
  const handleAddBooking = () => {
    const bookingToAdd = {
      ...newBooking,
      id: bookings.length + 1,
      bookingDate: new Date().toISOString().split("T")[0],
    };

    setBookings([...bookings, bookingToAdd]);
    setIsAddBookingOpen(false);
    // Reset form
    setNewBooking({
      userName: "",
      phoneNumber: "",
      email: "",
      address: "",
      roomType: "",
      checkIn: "",
      checkOut: "",
      totalGuests: 1,
      totalCost: "",
      status: "approved",
    });
  };

  // Function to handle date selection
  const handleDateClick = (date) => {
    const bookingsOnDate = bookings.filter(
      (booking) =>
        new Date(booking.checkIn) <= new Date(date) &&
        new Date(booking.checkOut) >= new Date(date)
    );
    setSelectedBooking(bookingsOnDate.length > 0 ? bookingsOnDate[0] : null);
  };

  // Function to open delete confirmation popup
  const openDeleteConfirmation = (booking) => {
    setBookingToDelete(booking);
    setIsDeleteConfirmOpen(true);
  };

  // Modified function to handle booking deletion
  const handleDeleteBooking = () => {
    if (bookingToDelete) {
      setBookings(
        bookings.filter((booking) => booking.id !== bookingToDelete.id)
      );
      setSelectedBooking(null);
      setIsDeleteConfirmOpen(false);
      setBookingToDelete(null);
    }
  };

  // Render calendar days
  const renderCalendarDays = () => {
    const daysInMonth = 31;
    const monthDays = [];

    // Add padding for start of week
    for (let i = 0; i < 0; i++) {
      monthDays.push(<div key={`padding-${i}`} className="p-2"></div>);
    }

    // Add actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(2024, 6, day); // July 2024
      const dateString = date.toISOString().split("T")[0];

      // Only count approved bookings for calendar display
      const approvedBookingsOnDate = bookings.filter(
        (booking) =>
          booking.status === "approved" &&
          new Date(booking.checkIn) <= date &&
          new Date(booking.checkOut) >= date
      );

      const allBookingsOnDate = bookings.filter(
        (booking) =>
          new Date(booking.checkIn) <= date &&
          new Date(booking.checkOut) >= date
      );

      monthDays.push(
        <div key={day} className="relative">
          <button
            onClick={() => {
              handleDateClick(dateString);
              document.getElementById(`dialog-${day}`).style.display = "flex";
            }}
            className={`p-2 border rounded relative ${
              approvedBookingsOnDate.length > 0
                ? "bg-blue-100 hover:bg-blue-200"
                : "bg-gray-50 hover:bg-gray-100"
            }`}
          >
            {day}
            {approvedBookingsOnDate.length > 0 && (
              <span className="absolute top-0 right-0 bg-blue-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                {approvedBookingsOnDate.length}
              </span>
            )}
          </button>

          {/* Modal Dialog */}
          <div
            id={`dialog-${day}`}
            className="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50"
            onClick={(e) => {
              if (e.target.id === `dialog-${day}`) {
                e.target.style.display = "none";
              }
            }}
          >
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-screen overflow-auto mx-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Date: {dateString}</h2>
                <button
                  onClick={() =>
                    (document.getElementById(`dialog-${day}`).style.display =
                      "none")
                  }
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Bookings on this date */}
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {allBookingsOnDate.length > 0 ? (
                  allBookingsOnDate.map((booking) => (
                    <div
                      key={booking.id}
                      className={`p-4 rounded-lg relative ${
                        booking.status === "approved"
                          ? "bg-green-50 border border-green-200"
                          : booking.status === "pending"
                          ? "bg-yellow-50 border border-yellow-200"
                          : "bg-red-50 border border-red-200"
                      }`}
                    >
                      <div className="space-y-2">
                        <p>
                          <strong>Name:</strong> {booking.userName}
                        </p>
                        <p>
                          <strong>Phone:</strong> {booking.phoneNumber}
                        </p>
                        <p>
                          <strong>Email:</strong> {booking.email}
                        </p>
                        <p>
                          <strong>Address:</strong> {booking.address}
                        </p>
                        <p>
                          <strong>Room Type:</strong> {booking.roomType}
                        </p>
                        <p>
                          <strong>Check-In:</strong> {booking.checkIn}
                        </p>
                        <p>
                          <strong>Check-Out:</strong> {booking.checkOut}
                        </p>
                        <p>
                          <strong>Total Guests:</strong> {booking.totalGuests}
                        </p>
                        <p>
                          <strong>Total Cost:</strong> {booking.totalCost}
                        </p>
                        <p>
                          <strong>Status:</strong>{" "}
                          <span
                            className={`px-2 py-1 rounded text-xs ${
                              booking.status === "approved"
                                ? "bg-green-100 text-green-800"
                                : booking.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {booking.status}
                          </span>
                        </p>
                      </div>
                      <div className="absolute top-2 right-2 flex flex-wrap gap-2 justify-end">
                        {booking.status === "pending" && (
                          <>
                            <button
                              onClick={() => handleApproveBooking(booking.id)}
                              className="bg-green-500 hover:bg-green-600 text-white p-2 rounded"
                              title="Approve Booking"
                            >
                              <Check className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleDeclineBooking(booking.id)}
                              className="bg-red-500 hover:bg-red-600 text-white p-2 rounded"
                              title="Decline Booking"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </>
                        )}
                        {booking.status === "declined" && (
                          <button
                            onClick={() => handleApproveBooking(booking.id)}
                            className="bg-green-500 hover:bg-green-600 text-white p-2 rounded"
                            title="Approve Booking"
                          >
                            <Check className="h-4 w-4" />
                          </button>
                        )}
                        <button
                          onClick={() => handleEditBooking(booking)}
                          className="border border-gray-300 hover:bg-gray-100 p-2 rounded"
                          title="Edit Booking"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => openDeleteConfirmation(booking)}
                          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded"
                          title="Delete Booking"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 px-4 sm:mx-6 lg:mx-8">
                    <div className="flex flex-col items-center justify-center">
                      <Calendar className="h-12 w-12 text-gray-300 mb-3" />
                      <p className="text-gray-500 text-sm sm:text-base font-medium">
                        No bookings on this date
                      </p>
                      <p className="text-gray-400 text-xs sm:text-sm mt-1">
                        Select another date or add a new booking
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return monthDays;
  };

  // Get status color for table
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "declined":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Hotel Booking Management System
      </h1>

      {/* Add Booking Button */}
      <div className="mb-6 flex justify-end">
        <button
          onClick={() => setIsAddBookingOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center"
        >
          <Plus className="mr-2 h-4 w-4" /> Add New Booking
        </button>
      </div>

      {/* Bookings Table */}
      <div className="w-full">
        {/* Container with overflow settings */}
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="w-full bg-white">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 text-center">Name</th>
                <th className="p-3 text-center">Phone</th>
                <th className="p-3 text-center">Room Type</th>
                <th className="p-3 text-center">Check-In</th>
                <th className="p-3 text-center">Check-Out</th>
                <th className="p-3 text-center">Status</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 whitespace-nowrap">{booking.userName}</td>
                  <td className="p-3 whitespace-nowrap">
                    {booking.phoneNumber}
                  </td>
                  <td className="p-3 whitespace-nowrap">{booking.roomType}</td>
                  <td className="p-3 whitespace-nowrap">{booking.checkIn}</td>
                  <td className="p-3 whitespace-nowrap">{booking.checkOut}</td>
                  <td className="p-3 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 rounded text-xs ${getStatusBadgeClass(
                        booking.status
                      )}`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="p-3 whitespace-nowrap">
                    <div className="flex space-x-2">
                      {booking.status === "pending" && (
                        <>
                          <button
                            onClick={() => handleApproveBooking(booking.id)}
                            className="bg-green-500 hover:bg-green-600 text-white p-1 rounded"
                            title="Approve"
                          >
                            <Check className="h-3 w-3" />
                          </button>
                          <button
                            onClick={() => handleDeclineBooking(booking.id)}
                            className="bg-red-500 hover:bg-red-600 text-white p-1 rounded"
                            title="Decline"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </>
                      )}
                      <button
                        onClick={() => handleEditBooking(booking)}
                        className="border border-gray-300 hover:bg-gray-100 p-1 rounded"
                        title="Edit"
                      >
                        <Edit className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => openDeleteConfirmation(booking)}
                        className="bg-red-500 hover:bg-red-600 text-white p-1 rounded"
                        title="Delete"
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Calendar Component */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Calendar className="mr-2" /> Booking Calendar (July 2024)
        </h2>

        <div className="mb-4 text-sm text-gray-600">
          <span className="inline-block w-4 h-4 bg-blue-100 rounded mr-2"></span>
          Approved bookings
        </div>

        <div className="grid grid-cols-7 gap-2 text-center">
          <div className="font-semibold text-sm text-gray-600">Sun</div>
          <div className="font-semibold text-sm text-gray-600">Mon</div>
          <div className="font-semibold text-sm text-gray-600">Tue</div>
          <div className="font-semibold text-sm text-gray-600">Wed</div>
          <div className="font-semibold text-sm text-gray-600">Thu</div>
          <div className="font-semibold text-sm text-gray-600">Fri</div>
          <div className="font-semibold text-sm text-gray-600">Sat</div>
          {renderCalendarDays()}
        </div>
      </div>

      {/* Add Booking Dialog */}
      {isAddBookingOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsAddBookingOpen(false);
            }
          }}
        >
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto my-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg sm:text-xl font-bold">
                  Add New Booking (Admin)
                </h2>
                <button
                  onClick={() => setIsAddBookingOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-4 py-2 sm:py-4">
                {/* Form fields - responsive layout that stacks on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <label
                    htmlFor="userName"
                    className="sm:text-right font-medium text-sm sm:text-base"
                  >
                    Name
                  </label>
                  <input
                    id="userName"
                    type="text"
                    value={newBooking.userName}
                    onChange={(e) =>
                      setNewBooking({ ...newBooking, userName: e.target.value })
                    }
                    className="col-span-1 sm:col-span-3 border border-gray-300 rounded px-3 py-2 w-full"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <label
                    htmlFor="phoneNumber"
                    className="sm:text-right font-medium text-sm sm:text-base"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    value={newBooking.phoneNumber}
                    onChange={(e) =>
                      setNewBooking({
                        ...newBooking,
                        phoneNumber: e.target.value,
                      })
                    }
                    className="col-span-1 sm:col-span-3 border border-gray-300 rounded px-3 py-2 w-full"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <label
                    htmlFor="email"
                    className="sm:text-right font-medium text-sm sm:text-base"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={newBooking.email}
                    onChange={(e) =>
                      setNewBooking({ ...newBooking, email: e.target.value })
                    }
                    className="col-span-1 sm:col-span-3 border border-gray-300 rounded px-3 py-2 w-full"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <label
                    htmlFor="address"
                    className="sm:text-right font-medium text-sm sm:text-base"
                  >
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    value={newBooking.address}
                    onChange={(e) =>
                      setNewBooking({ ...newBooking, address: e.target.value })
                    }
                    className="col-span-1 sm:col-span-3 border border-gray-300 rounded px-3 py-2 w-full"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <label
                    htmlFor="roomType"
                    className="sm:text-right font-medium text-sm sm:text-base"
                  >
                    Room Type
                  </label>
                  <input
                    id="roomType"
                    type="text"
                    value={newBooking.roomType}
                    onChange={(e) =>
                      setNewBooking({ ...newBooking, roomType: e.target.value })
                    }
                    className="col-span-1 sm:col-span-3 border border-gray-300 rounded px-3 py-2 w-full"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <label
                    htmlFor="checkIn"
                    className="sm:text-right font-medium text-sm sm:text-base"
                  >
                    Check-In Date
                  </label>
                  <input
                    id="checkIn"
                    type="date"
                    value={newBooking.checkIn}
                    onChange={(e) =>
                      setNewBooking({ ...newBooking, checkIn: e.target.value })
                    }
                    className="col-span-1 sm:col-span-3 border border-gray-300 rounded px-3 py-2 w-full"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <label
                    htmlFor="checkOut"
                    className="sm:text-right font-medium text-sm sm:text-base"
                  >
                    Check-Out Date
                  </label>
                  <input
                    id="checkOut"
                    type="date"
                    value={newBooking.checkOut}
                    onChange={(e) =>
                      setNewBooking({ ...newBooking, checkOut: e.target.value })
                    }
                    className="col-span-1 sm:col-span-3 border border-gray-300 rounded px-3 py-2 w-full"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <label
                    htmlFor="totalGuests"
                    className="sm:text-right font-medium text-sm sm:text-base"
                  >
                    Total Guests
                  </label>
                  <input
                    id="totalGuests"
                    type="number"
                    value={newBooking.totalGuests}
                    onChange={(e) =>
                      setNewBooking({
                        ...newBooking,
                        totalGuests: parseInt(e.target.value),
                      })
                    }
                    className="col-span-1 sm:col-span-3 border border-gray-300 rounded px-3 py-2 w-full"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <label
                    htmlFor="totalCost"
                    className="sm:text-right font-medium text-sm sm:text-base"
                  >
                    Total Cost
                  </label>
                  <input
                    id="totalCost"
                    type="text"
                    value={newBooking.totalCost}
                    onChange={(e) =>
                      setNewBooking({
                        ...newBooking,
                        totalCost: e.target.value,
                      })
                    }
                    className="col-span-1 sm:col-span-3 border border-gray-300 rounded px-3 py-2 w-full"
                  />
                </div>
              </div>

              <div className="bg-green-50 p-3 rounded-md mb-4 text-xs sm:text-sm">
                <p className="text-green-800">
                  Admin-created bookings are automatically approved and will
                  appear on the calendar immediately.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-2 sm:space-x-2 mt-4">
                <button
                  onClick={() => setIsAddBookingOpen(false)}
                  className="border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded w-full sm:w-auto"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddBooking}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto"
                >
                  Add Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Booking Dialog */}
      {isEditBookingOpen && editingBooking && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsEditBookingOpen(false);
              setEditingBooking(null);
            }
          }}
        >
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto my-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg sm:text-xl font-bold">Edit Booking</h2>
                <button
                  onClick={() => {
                    setIsEditBookingOpen(false);
                    setEditingBooking(null);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-4 py-2 sm:py-4">
                {/* Form fields - responsive layout that stacks on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <label
                    htmlFor="edit-userName"
                    className="sm:text-right font-medium text-sm sm:text-base"
                  >
                    Name
                  </label>
                  <input
                    id="edit-userName"
                    type="text"
                    value={editingBooking.userName}
                    onChange={(e) =>
                      setEditingBooking({
                        ...editingBooking,
                        userName: e.target.value,
                      })
                    }
                    className="col-span-1 sm:col-span-3 border border-gray-300 rounded px-3 py-2 w-full"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <label
                    htmlFor="edit-phoneNumber"
                    className="sm:text-right font-medium text-sm sm:text-base"
                  >
                    Phone Number
                  </label>
                  <input
                    id="edit-phoneNumber"
                    type="tel"
                    value={editingBooking.phoneNumber}
                    onChange={(e) =>
                      setEditingBooking({
                        ...editingBooking,
                        phoneNumber: e.target.value,
                      })
                    }
                    className="col-span-1 sm:col-span-3 border border-gray-300 rounded px-3 py-2 w-full"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <label
                    htmlFor="edit-email"
                    className="sm:text-right font-medium text-sm sm:text-base"
                  >
                    Email
                  </label>
                  <input
                    id="edit-email"
                    type="email"
                    value={editingBooking.email}
                    onChange={(e) =>
                      setEditingBooking({
                        ...editingBooking,
                        email: e.target.value,
                      })
                    }
                    className="col-span-1 sm:col-span-3 border border-gray-300 rounded px-3 py-2 w-full"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <label
                    htmlFor="edit-address"
                    className="sm:text-right font-medium text-sm sm:text-base"
                  >
                    Address
                  </label>
                  <input
                    id="edit-address"
                    type="text"
                    value={editingBooking.address}
                    onChange={(e) =>
                      setEditingBooking({
                        ...editingBooking,
                        address: e.target.value,
                      })
                    }
                    className="col-span-1 sm:col-span-3 border border-gray-300 rounded px-3 py-2 w-full"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <label
                    htmlFor="edit-roomType"
                    className="sm:text-right font-medium text-sm sm:text-base"
                  >
                    Room Type
                  </label>
                  <input
                    id="edit-roomType"
                    type="text"
                    value={editingBooking.roomType}
                    onChange={(e) =>
                      setEditingBooking({
                        ...editingBooking,
                        roomType: e.target.value,
                      })
                    }
                    className="col-span-1 sm:col-span-3 border border-gray-300 rounded px-3 py-2 w-full"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <label
                    htmlFor="edit-checkIn"
                    className="sm:text-right font-medium text-sm sm:text-base"
                  >
                    Check-In Date
                  </label>
                  <input
                    id="edit-checkIn"
                    type="date"
                    value={editingBooking.checkIn}
                    onChange={(e) =>
                      setEditingBooking({
                        ...editingBooking,
                        checkIn: e.target.value,
                      })
                    }
                    className="col-span-1 sm:col-span-3 border border-gray-300 rounded px-3 py-2 w-full"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <label
                    htmlFor="edit-checkOut"
                    className="sm:text-right font-medium text-sm sm:text-base"
                  >
                    Check-Out Date
                  </label>
                  <input
                    id="edit-checkOut"
                    type="date"
                    value={editingBooking.checkOut}
                    onChange={(e) =>
                      setEditingBooking({
                        ...editingBooking,
                        checkOut: e.target.value,
                      })
                    }
                    className="col-span-1 sm:col-span-3 border border-gray-300 rounded px-3 py-2 w-full"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <label
                    htmlFor="edit-totalGuests"
                    className="sm:text-right font-medium text-sm sm:text-base"
                  >
                    Total Guests
                  </label>
                  <input
                    id="edit-totalGuests"
                    type="number"
                    value={editingBooking.totalGuests}
                    onChange={(e) =>
                      setEditingBooking({
                        ...editingBooking,
                        totalGuests: parseInt(e.target.value),
                      })
                    }
                    className="col-span-1 sm:col-span-3 border border-gray-300 rounded px-3 py-2 w-full"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <label
                    htmlFor="edit-totalCost"
                    className="sm:text-right font-medium text-sm sm:text-base"
                  >
                    Total Cost
                  </label>
                  <input
                    id="edit-totalCost"
                    type="text"
                    value={editingBooking.totalCost}
                    onChange={(e) =>
                      setEditingBooking({
                        ...editingBooking,
                        totalCost: e.target.value,
                      })
                    }
                    className="col-span-1 sm:col-span-3 border border-gray-300 rounded px-3 py-2 w-full"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <label
                    htmlFor="edit-status"
                    className="sm:text-right font-medium text-sm sm:text-base"
                  >
                    Status
                  </label>
                  <select
                    id="edit-status"
                    value={editingBooking.status}
                    onChange={(e) =>
                      setEditingBooking({
                        ...editingBooking,
                        status: e.target.value,
                      })
                    }
                    className="col-span-1 sm:col-span-3 border border-gray-300 rounded px-3 py-2 w-full"
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="declined">Declined</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-2 sm:space-x-2 mt-4">
                <button
                  onClick={() => {
                    setIsEditBookingOpen(false);
                    setEditingBooking(null);
                  }}
                  className="border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded w-full sm:w-auto"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveEdit}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteConfirmOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-xs sm:max-w-sm md:max-w-md animate-fade-in">
            <h3 className="text-lg font-bold mb-3 sm:mb-4">Confirm Deletion</h3>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base">
              Are you sure you want to delete the booking for{" "}
              <span className="font-medium">{bookingToDelete?.userName}</span>?
              <span className="block mt-2 text-red-500 text-sm">
                This action cannot be undone.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row-reverse space-y-2 sm:space-y-0 sm:space-x-3 sm:space-x-reverse">
              <button
                onClick={handleDeleteBooking}
                className="w-full sm:w-auto px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm sm:text-base"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setIsDeleteConfirmOpen(false);
                  setBookingToDelete(null);
                }}
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 text-sm sm:text-base"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingManagementSystem;
