import React from 'react';

const MenuList = ({ menus }) => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {menus.map((menu, index) => (
        <div key={index} className="border rounded-lg p-4 shadow bg-white">
          {menu.imageUrl && (
            <img
              src={menu.imageUrl}
              alt={menu.name}
              className="w-full h-40 object-cover rounded mb-3"
            />
          )}
          <h3 className="text-lg font-semibold">{menu.name}</h3>
          <p className="text-sm text-gray-700 mb-1">{menu.description}</p>
          <p className="text-xs text-gray-500">Category: {menu.category}</p>
          <p className="text-md font-bold text-green-600 mt-2">₹{menu.price}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
