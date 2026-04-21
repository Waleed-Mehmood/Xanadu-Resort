import React, { useState } from 'react';
import Navbar from '../../components/Common/navbar';
import bkgtop from '../../assets/contactbg.png';
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import Footer from '../../components/Footer';

function Contact() {
    const [expanded, setExpanded] = useState(0);
    const [visibleFaqs, setVisibleFaqs] = useState(4);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
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
        console.log('Form submitted:', formData);
        // Here you would typically send the data to your backend
        alert('Form submitted successfully!');
        
        // Reset form after submission
        setFormData({
          firstName: '',
          lastName: '',
          contactNumber: '',
          email: '',
          message: ''
        });
      };
    

    // Sample FAQ data - replace with your actual data
    const faqs = [
        {
            question: "How do I make a booking at Xanadu Resort?",
            answer: "You can easily make a booking through our website by selecting your preferred dates, room type, and number of guests. Fill in the booking form with your details and proceed to payment. You'll receive a confirmation email with your booking details and booking reference number."
        },
        {
            question: "What is the cancellation policy?",
            answer: "Cancellations made 7 days before the check-in date are eligible for a full refund. Cancellations made within 7 days of check-in will be subject to a 50% deduction. No refunds will be provided for cancellations made less than 24 hours before check-in."
        },
        {
            question: "What amenities are included in the room?",
            answer: "All our rooms come equipped with air conditioning, comfortable bedding, an en-suite bathroom, complimentary Wi-Fi, a flat-screen TV, and daily housekeeping services. Premium rooms also include a mini-bar, bathrobe, and toiletries from our premium collection."
        },
        {
            question: "Is there a restaurant at the resort?",
            answer: "Yes, Xanadu Resort features an on-site restaurant 'Xanadu's Kitchen' that serves a variety of cuisines including local and international dishes. We also offer room service, coffee shop, and a poolside bar. Special dietary requirements can be accommodated with prior notice."
        },
        {
            question: "What activities and entertainment options are available?",
            answer: "We offer a wide range of activities including swimming, heritage tours, water sports, yoga classes, and special activities throughout the year. Entertainment options include live performances, gaming zones, and organized excursions to nearby attractions."
        },
        {
            question: "What is the check-in and check-out time?",
            answer: "Standard check-in time is 2:00 PM and check-out time is 11:00 AM. Early check-in and late check-out are subject to availability and may incur additional charges. We recommend contacting us in advance to arrange these services."
        },
        {
            question: "Is there parking available at the resort?",
            answer: "Yes, we provide complimentary parking for all our guests. We have both covered and open parking spaces available. Valet parking service is also available upon request for a small additional fee."
        },
        {
            question: "Do you offer student accommodation packages?",
            answer: "Yes, we offer special student room packages with discounted rates and flexible booking options. These rooms are designed for student groups and come with conference facilities. Please contact us for group booking inquiries and special rates."
        },
    ];

    const handleToggle = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    const handleViewMore = () => {
        setVisibleFaqs(faqs.length);
    };

    return (
        <>
            <div>
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
                            Our Contact
                        </h1>
                    </div>

                    <div>
                        {/* contactinfo */}
                        <div className="bg-white w-full">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-20 py-10 gap-4">
                                {/* Location */}
                                <div className="flex items-center gap-2">
                                    <CiLocationOn className="text-2xl text-[#044AB3]" />
                                    <h1 className="text-md font-jeju font-bold">Xanadu Resort, Kumrat Valley, Khyber Pakhtunkhwa</h1>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center gap-2">
                                    <FaPhoneVolume className="text-xl text-[#044AB3]" />
                                    <h1 className="text-md font-jeju font-bold">+123 456 7890</h1>
                                </div>

                                {/* Email */}
                                <div className="flex items-center gap-2">
                                    <MdOutlineEmail className="text-2xl text-[#044AB3]" />
                                    <h1 className="text-md font-jeju font-bold">support@xanadu.com</h1>
                                </div>
                            </div>
                        </div>

                        {/* FAQS */}
                        <div className='bg-[#D0E4FF] w-full py-12 flex flex-col items-center justify-center'>
                            <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 pb-12 px-12 mb-4 mx-4">
                                <h2 className="text-3xl font-bold text-center mb-6 font-sans">FAQs</h2>


                                <div className="">
                                    {faqs.slice(0, visibleFaqs).map((faq, index) => (
                                        <div key={index} className="py-4 border border-[#979797] border-x-0">
                                            <button
                                                className="flex justify-between items-center w-full text-left"
                                                onClick={() => handleToggle(index)}
                                            >
                                                <div className="flex items-center">
                                                    <div className="text-gray-400 mr-2">
                                                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                        </svg>
                                                    </div>
                                                    <span className="text-[#374047] font-semibold  font-sans">{faq.question}</span>
                                                </div>
                                                {expanded === index ? (
                                                    <FaChevronUp className="text-gray-400" />
                                                ) : (
                                                    <FaChevronDown className="text-gray-400" />
                                                )}
                                            </button>

                                            {expanded === index && (
                                                <div className="mt-2 pl-6 text-gray-600">
                                                    {faq.answer}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {visibleFaqs < faqs.length && (
                                <button
                                    onClick={handleViewMore}
                                    className="bg-[#91C0FF] text-black px-10 py-3 rounded-full text-sm hover:bg-blue-500 transition-colors font-[500px]"
                                >
                                    View More
                                </button>
                            )}
                        </div>

                        {/* Reach Out */}
                        <div className="max-w-xl mx-auto p-10 my-12">
                            {/* Reach Out content here */}
                            <h1 className="text-4xl font-[400px] font-jeju text-center text-gray-800 mb-6">
                                Reach out to Xanadu
                            </h1>

                            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 gap-5">
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="First Name"
                                        className="w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Last Name"
                                        className="w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 gap-5">
                                    <input
                                        type="tel"
                                        name="contactNumber"
                                        value={formData.contactNumber}
                                        onChange={handleChange}
                                        placeholder="Contact Number"
                                        className="w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email Address"
                                        className="w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
                                        required
                                    />
                                </div>

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    rows={5}
                                    className="mt-20 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
                                    required
                                />

                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        className="px-8 py-2 bg-blue-200 text-blue-800 rounded hover:bg-blue-300 transition-colors duration-300"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Footer */}
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;