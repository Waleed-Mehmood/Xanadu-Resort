

import React, { useState } from 'react';
import { Upload, Plus, X } from 'lucide-react';

const ServiceManagement = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    images: [],
    features: [],
    serviceDetails: {
      duration: 60,
      maxPersons: 4,
      location: 'On-site'
    },
    pricing: {
      originalPrice: 0,
      discountPercentage: 0,
      priceLabel: 'Per Session'
    },
    availability: {
      daysAvailable: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      timeSlots: ['Morning', 'Afternoon']
    }
  });

  const [imagePreview, setImagePreview] = useState([]);

  const featureOptions = [
    { id: 'equipment', name: 'Equipment Provided', icon: 'equipment' },
    { id: 'instructor', name: 'Professional Instructor', icon: 'instructor' },
    { id: 'certificate', name: 'Certificate', icon: 'certificate' },
    { id: 'refreshments', name: 'Refreshments', icon: 'refreshments' }
  ];

  const locationOptions = [
    'On-site',
    'Off-site',
    'Virtual',
    'Mobile'
  ];
  
  const daysOfWeek = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];
  
  const timeSlotOptions = [
    'Morning', 'Afternoon', 'Evening', 'Night'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFeatureToggle = (feature) => {
    setFormData(prev => {
      const features = prev.features.some(f => f.id === feature.id)
        ? prev.features.filter(f => f.id !== feature.id)
        : [...prev.features, feature];
      
      return { ...prev, features };
    });
  };
  
  const handleDayToggle = (day) => {
    setFormData(prev => {
      const daysAvailable = prev.availability.daysAvailable.includes(day)
        ? prev.availability.daysAvailable.filter(d => d !== day)
        : [...prev.availability.daysAvailable, day];
      
      return { 
        ...prev, 
        availability: {
          ...prev.availability,
          daysAvailable
        }
      };
    });
  };
  
  const handleTimeSlotToggle = (timeSlot) => {
    setFormData(prev => {
      const timeSlots = prev.availability.timeSlots.includes(timeSlot)
        ? prev.availability.timeSlots.filter(t => t !== timeSlot)
        : [...prev.availability.timeSlots, timeSlot];
      
      return { 
        ...prev, 
        availability: {
          ...prev.availability,
          timeSlots
        }
      };
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    
    // Create preview URLs
    const previews = files.map(file => URL.createObjectURL(file));
    setImagePreview(prev => [...prev, ...previews]);
    
    // Store files in form data
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...files]
    }));
  };

  const removeImage = (index) => {
    setImagePreview(prev => prev.filter((_, i) => i !== index));
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formDataToSend = new FormData();
      
      // Prepare data for sending
      const dataToSend = {
        ...formData,
        pricing: {
          ...formData.pricing,
          finalPrice: formData.pricing.originalPrice * (1 - formData.pricing.discountPercentage / 100)
        }
      };
      
      // Add images to FormData
      formData.images.forEach((image, index) => {
        formDataToSend.append(`image_${index}`, image);
      });
      
      // Add other data as JSON
      formDataToSend.append('data', JSON.stringify(dataToSend));
      
      // Simulated API call
      console.log('Submitting service data:', dataToSend);
      // const response = await fetch('/api/services', {
      //   method: 'POST',
      //   body: formDataToSend
      // });
      
      alert('Service details saved successfully!');
    } catch (error) {
      console.error('Error saving service details:', error);
      alert('Error saving service details');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8">Service Management</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Service Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>
          
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Service Images
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition duration-200">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <Upload className="w-12 h-12 text-gray-400 mb-2" />
                <span className="text-sm text-gray-600">
                  Click to upload or drag and drop images
                </span>
              </label>
            </div>
            
            {/* Image Previews */}
            {imagePreview.length > 0 && (
              <div className="mt-4 grid grid-cols-4 gap-4">
                {imagePreview.map((preview, index) => (
                  <div key={index} className="relative">
                    <img
                      src={preview}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Features */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Features
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {featureOptions.map(feature => (
                <label
                  key={feature.id}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={formData.features.some(f => f.id === feature.id)}
                    onChange={() => handleFeatureToggle(feature)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{feature.name}</span>
                </label>
              ))}
            </div>
          </div>
          
          {/* Service Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration (minutes)
              </label>
              <input
                type="number"
                name="serviceDetails.duration"
                value={formData.serviceDetails.duration}
                onChange={handleInputChange}
                min="15"
                step="15"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Maximum Persons
              </label>
              <input
                type="number"
                name="serviceDetails.maxPersons"
                value={formData.serviceDetails.maxPersons}
                onChange={handleInputChange}
                min="1"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <select
                name="serviceDetails.location"
                value={formData.serviceDetails.location}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                {locationOptions.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Pricing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Original Price (Rs)
              </label>
              <input
                type="number"
                name="pricing.originalPrice"
                value={formData.pricing.originalPrice}
                onChange={handleInputChange}
                min="0"
                step="0.01"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Discount (%)
              </label>
              <input
                type="number"
                name="pricing.discountPercentage"
                value={formData.pricing.discountPercentage}
                onChange={handleInputChange}
                min="0"
                max="100"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price Label
              </label>
              <input
                type="text"
                name="pricing.priceLabel"
                value={formData.pricing.priceLabel}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Per Session, Per Hour, etc."
              />
            </div>
          </div>
          
          {/* Availability */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Days Available
            </label>
            <div className="flex flex-wrap gap-3">
              {daysOfWeek.map(day => (
                <label
                  key={day}
                  className={`px-4 py-2 border rounded-md cursor-pointer text-sm ${
                    formData.availability.daysAvailable.includes(day)
                      ? 'bg-blue-100 border-blue-500 text-blue-800'
                      : 'bg-white border-gray-300 text-gray-700'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.availability.daysAvailable.includes(day)}
                    onChange={() => handleDayToggle(day)}
                    className="hidden"
                  />
                  {day}
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Time Slots
            </label>
            <div className="flex flex-wrap gap-3">
              {timeSlotOptions.map(slot => (
                <label
                  key={slot}
                  className={`px-4 py-2 border rounded-md cursor-pointer text-sm ${
                    formData.availability.timeSlots.includes(slot)
                      ? 'bg-blue-100 border-blue-500 text-blue-800'
                      : 'bg-white border-gray-300 text-gray-700'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.availability.timeSlots.includes(slot)}
                    onChange={() => handleTimeSlotToggle(slot)}
                    className="hidden"
                  />
                  {slot}
                </label>
              ))}
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-200 flex items-center gap-2"
            >
              <Plus size={20} />
              Save Service Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceManagement;