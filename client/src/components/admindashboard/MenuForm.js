import React, { useState } from 'react';
import axios from 'axios';

const MenuForm = ({ onSuccess }) => {
  const [form, setForm] = useState({
    name: '', description: '', imageUrl: '', price: '', category: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('/api/menus', form);
    setForm({ name: '', description: '', imageUrl: '', price: '', category: '' });
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
      <input name="imageUrl" placeholder="Image URL" value={form.imageUrl} onChange={handleChange} />
      <input name="price" placeholder="Price" type="number" value={form.price} onChange={handleChange} required />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
      <button type="submit">Add Menu Item</button>
    </form>
  );
};

export default MenuForm;
