import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ServiceForm from '../../components/admindashboard/ServiceForm';
import MenuForm from '../../components/admindashboard/MenuForm';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [services, setServices] = useState([]);
  const [menus, setMenus] = useState([]);

  const fetchServices = async () => {
    const res = await axios.get('/api/services');
    setServices(res.data);
  };

  const fetchMenus = async () => {
    const res = await axios.get('/api/menus');
    setMenus(res.data);
  };

  const deleteMenu = async (id) => {
    await axios.delete(`/api/menus/${id}`);
    fetchMenus();
  };

  useEffect(() => {
    fetchServices();
    fetchMenus();
  }, []);

  return (
    <div className="p-4">
      <h1>Xanadu Resort - Admin Dashboard</h1>

      <div className="tabs my-4">
        <button onClick={() => setActiveTab('services')}>Services</button>
        <button onClick={() => setActiveTab('menus')}>Menus</button>
      </div>

      {activeTab === 'services' && (
        <>
          <ServiceForm onSuccess={fetchServices} />
          <ul>
            {services.map(service => (
              <li key={service._id}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </li>
            ))}
          </ul>
        </>
      )}

      {activeTab === 'menus' && (
        <>
          <MenuForm onSuccess={fetchMenus} />
          <ul>
            {menus.map(menu => (
              <li key={menu._id}>
                <h3>{menu.name}</h3>
                <p>{menu.description} - ₹{menu.price}</p>
                <button onClick={() => deleteMenu(menu._id)}>Delete</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
