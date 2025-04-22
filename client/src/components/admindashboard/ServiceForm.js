import React, { useState } from 'react';
import axios from 'axios';

const ServiceForm = ({ onSuccess }) => {
  const [form, setForm] = useState({ title: '', description: '', imageUrl: '', price: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/services', form);
    setForm({ title: '', description: '', imageUrl: '', price: '' });
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
      <input name="imageUrl" placeholder="Image URL" value={form.imageUrl} onChange={handleChange} />
      <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} />
      <button type="submit">Add Service</button>
    </form>
  );
};

export default ServiceForm;
