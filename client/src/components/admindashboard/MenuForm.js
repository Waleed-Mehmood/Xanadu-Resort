import React, { useState } from 'react';
import { X, Edit, Trash2 } from 'lucide-react';
import MenuFormModal from './MenuFormModal';

const MenuForm = () => {
  const [menus, setMenus] = useState([
    {
      name: 'Margherita Pizza',
      description: 'Classic cheese and tomato pizza with a crispy crust.',
      price: 299,
      category: 'Pizza',
      imagePreview: 'https://source.unsplash.com/400x300/?pizza',
    },
    {
      name: 'Paneer Butter Masala',
      description: 'Creamy tomato-based curry with tender paneer cubes.',
      price: 250,
      category: 'Main Course',
      imagePreview: 'https://source.unsplash.com/400x300/?paneer',
    },
    {
      name: 'Chocolate Brownie',
      description: 'Rich chocolate brownie served with vanilla ice cream.',
      price: 180,
      category: 'Dessert',
      imagePreview: 'https://source.unsplash.com/400x300/?brownie',
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddMenu = (newMenu) => {
    if (editingIndex !== null) {
      const updatedMenus = [...menus];
      updatedMenus[editingIndex] = newMenu;
      setMenus(updatedMenus);
      setEditingIndex(null);
    } else {
      setMenus([...menus, newMenu]);
    }
    setShowModal(false);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setShowModal(true);
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this menu item?");
    if (confirmDelete) {
      const updatedMenus = menus.filter((_, i) => i !== index);
      setMenus(updatedMenus);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Menus</h1>
        <button
          onClick={() => {
            setEditingIndex(null);
            setShowModal(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + New Menu
        </button>
      </div>

      {/* Menu Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menus.map((menu, idx) => (
          <div key={idx} className="relative border rounded-lg shadow p-4 bg-white">
            {/* Card Actions */}
            <div className="absolute top-2 right-2 flex space-x-2 z-10">
              <button
                onClick={() => handleEdit(idx)}
                className="bg-white p-2 rounded-full shadow hover:bg-blue-100 transition-colors"
              >
                <Edit size={16} className="text-blue-600" />
              </button>
              <button
                onClick={() => handleDelete(idx)}
                className="bg-white p-2 rounded-full shadow hover:bg-red-100 transition-colors"
              >
                <Trash2 size={16} className="text-red-600" />
              </button>
            </div>

            {menu.imagePreview && (
              <img
                src={menu.imagePreview}
                alt={menu.name}
                className="w-full h-40 object-cover rounded cursor-pointer"
                onClick={() => setSelectedImage(menu.imagePreview)}
              />
            )}
            <h2 className="text-xl font-semibold mt-2">{menu.name}</h2>
            <p className="text-gray-600">{menu.description}</p>
            <p className="font-medium mt-1">Rs {menu.price}</p>
            <span className="inline-block mt-2 text-sm bg-gray-200 px-2 py-1 rounded">
              {menu.category}
            </span>
          </div>
        ))}
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <MenuFormModal
          onClose={() => {
            setShowModal(false);
            setEditingIndex(null);
          }}
          onAdd={handleAddMenu}
          existingData={editingIndex !== null ? menus[editingIndex] : null}
        />
      )}

      {/* Image Preview Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X size={24} className="text-gray-800" />
            </button>
            <img
              src={selectedImage}
              alt="Full View"
              className="max-w-full max-h-screen rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuForm;
