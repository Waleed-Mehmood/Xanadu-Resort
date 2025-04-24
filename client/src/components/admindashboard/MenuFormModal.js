import React, { useState } from 'react';

const MenuFormModal = ({ onClose, onAdd }) => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file)); // preview for local
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMenu = {
      ...form,
      imagePreview: imagePreview,
    };
    onAdd(newMenu);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Add New Menu Item</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <input
            name="description"
            placeholder="Description"
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border p-2 rounded"
          />
          <input
            name="price"
            type="number"
            placeholder="Price"
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <input
            name="category"
            placeholder="Category"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MenuFormModal;
