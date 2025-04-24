// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import ServiceForm from "../../components/admindashboard/ServiceForm";
// import MenuForm from "../../components/admindashboard/MenuForm";
// import { FiLogOut, FiMenu, FiX } from "react-icons/fi";

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState("services");
//   const [services, setServices] = useState([]);
//   const [menus, setMenus] = useState([]);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const fetchServices = async () => {
//     const res = await axios.get("/api/services");
//     setServices(res.data);
//   };

//   const fetchMenus = async () => {
//     const res = await axios.get("/api/menus");
//     setMenus(res.data);
//   };

//   const deleteMenu = async (id) => {
//     await axios.delete(`/api/menus/${id}`);
//     fetchMenus();
//   };

//   useEffect(() => {
//     fetchServices();
//     fetchMenus();
//   }, []);

//   const handleLogout = () => {
//     localStorage.clear();
//     window.location.href = "/login";
//   };

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//     setMobileMenuOpen(false);
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="hidden md:flex flex-col w-64 bg-white shadow-lg p-6 justify-between fixed h-screen">
//         <div>
//           <h2 className="text-2xl font-light font-serif mb-8 text-left">
//             Xanadu Resort
//           </h2>

//           <nav className="space-y-4">
//             <button
//               onClick={() => setActiveTab("services")}
//               className={`w-full text-left px-4 py-2 rounded-md ${
//                 activeTab === "services"
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-100 text-gray-800 hover:bg-gray-200"
//               }`}
//             >
//               Services
//             </button>
//             <button
//               onClick={() => setActiveTab("menus")}
//               className={`w-full text-left px-4 py-2 rounded-md ${
//                 activeTab === "menus"
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-100 text-gray-800 hover:bg-gray-200"
//               }`}
//             >
//               Menus
//             </button>
//           </nav>
//         </div>

//         <div className="flex justify-center mt-6">
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-2 text-red-500 hover:text-red-700 font-medium"
//           >
//             <FiLogOut /> Logout
//           </button>
//         </div>
//       </div>

//       {/* Main content area */}
//       <div className="flex-1 md:ml-64 flex flex-col h-screen overflow-hidden">
//         {/* Header */}
//         <header className="bg-white shadow px-6 py-4 flex items-center justify-between sticky top-0 z-10">
//           {/* Mobile header */}
//           <div className="flex items-center gap-4 md:hidden">
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="text-2xl text-gray-600"
//             >
//               {mobileMenuOpen ? <FiX /> : <FiMenu />}
//             </button>
//             <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
//           </div>

//           {/* Desktop title */}
//           <div className="hidden md:block">
//             <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
//           </div>

//           <div className="flex items-center gap-4">
//             <img
//               src="https://i.pravatar.cc/40"
//               alt="Profile"
//               className="w-10 h-10 rounded-full border-2 border-gray-300"
//             />
//           </div>
//         </header>

//         {/* Mobile menu dropdown */}
//         {mobileMenuOpen && (
//           <div className="md:hidden bg-white shadow p-4 space-y-2">
//             <button
//               onClick={() => handleTabChange("services")}
//               className={`block w-full text-left px-4 py-2 rounded-md ${
//                 activeTab === "services"
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-100 text-gray-800 hover:bg-gray-200"
//               }`}
//             >
//               Services
//             </button>
//             <button
//               onClick={() => handleTabChange("menus")}
//               className={`block w-full text-left px-4 py-2 rounded-md ${
//                 activeTab === "menus"
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-100 text-gray-800 hover:bg-gray-200"
//               }`}
//             >
//               Menus
//             </button>
//             <div className="flex justify-center mt-6">
//               <button
//                 onClick={handleLogout}
//                 className="flex items-center gap-2 text-red-500 hover:text-red-700 font-medium mt-6"
//               >
//                 <FiLogOut /> Logout
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Scrollable Content */}
//         <main className="p-6 flex-1 overflow-y-auto bg-gray-100">
//           {activeTab === "services" && (
//             <>
//               <ServiceForm onSuccess={fetchServices} />
//               <ul className="mt-6 space-y-4">
//                 {services.map((service) => (
//                   <li
//                     key={service._id}
//                     className="bg-white shadow p-4 rounded-lg"
//                   >
//                     <h3 className="text-lg font-semibold">{service.title}</h3>
//                     <p className="text-gray-600">{service.description}</p>
//                   </li>
//                 ))}
//               </ul>
//             </>
//           )}

//           {activeTab === "menus" && (
//             <>
//               <MenuForm onSuccess={fetchMenus} />
//               <ul className="mt-6 space-y-4">
//                 {menus.map((menu) => (
//                   <li key={menu._id} className="bg-white shadow p-4 rounded-lg">
//                     <div className="flex justify-between items-center flex-wrap gap-2">
//                       <div>
//                         <h3 className="text-lg font-semibold">{menu.name}</h3>
//                         <p className="text-gray-600">
//                           {menu.description} - ₹{menu.price}
//                         </p>
//                       </div>
//                       <button
//                         onClick={() => deleteMenu(menu._id)}
//                         className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;



import React, { useState, useEffect } from "react";
import axios from "axios";
import ServiceForm from "../../components/admindashboard/ServiceForm";
import MenuForm from "../../components/admindashboard/MenuForm";
import { FiLogOut, FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("services");
  const [services, setServices] = useState([]);
  const [menus, setMenus] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const fetchServices = async () => {
    const res = await axios.get("/api/services");
    setServices(res.data);
  };

  const fetchMenus = async () => {
    const res = await axios.get("/api/menus");
    setMenus(res.data);
  };

  const deleteMenu = async (id) => {
    await axios.delete(`/api/menus/${id}`);
    fetchMenus();
  };

  useEffect(() => {
    fetchServices();
    fetchMenus();
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setDarkMode(savedTheme === "true");
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to body
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    
    // Save theme preference
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <div className={`flex min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      {/* Sidebar */}
      <div className={`hidden md:flex flex-col w-64 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg p-6 justify-between fixed h-screen`}>
        <div>
          <h2 className={`text-2xl font-light font-serif mb-8 text-left ${darkMode ? "text-white" : ""}`}>
            Xanadu Resort
          </h2>

          <nav className="space-y-4">
            <button
              onClick={() => setActiveTab("services")}
              className={`w-full text-left px-4 py-2 rounded-md ${
                activeTab === "services"
                  ? "bg-blue-500 text-white"
                  : darkMode 
                    ? "bg-gray-700 text-gray-200 hover:bg-gray-600" 
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setActiveTab("menus")}
              className={`w-full text-left px-4 py-2 rounded-md ${
                activeTab === "menus"
                  ? "bg-blue-500 text-white"
                  : darkMode 
                    ? "bg-gray-700 text-gray-200 hover:bg-gray-600" 
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              Menus
            </button>
          </nav>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-500 hover:text-red-700 font-medium"
          >
            <FiLogOut /> Logout
          </button>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 md:ml-64 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className={`${darkMode ? "bg-gray-800 text-white" : "bg-white"} shadow px-6 py-4 flex items-center justify-between sticky top-0 z-10`}>
          {/* Mobile header */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`text-2xl ${darkMode ? "text-gray-200" : "text-gray-600"}`}
            >
              {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
            <h1 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>Admin Dashboard</h1>
          </div>

          {/* Desktop title */}
          <div className="hidden md:block">
            <h1 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>Admin Dashboard</h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? "bg-gray-700 text-yellow-300" : "bg-gray-200 text-gray-800"}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            
            <img
              src="https://i.pravatar.cc/40"
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-gray-300"
            />
          </div>
        </header>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? "bg-gray-800" : "bg-white"} shadow p-4 space-y-2`}>
            <button
              onClick={() => handleTabChange("services")}
              className={`block w-full text-left px-4 py-2 rounded-md ${
                activeTab === "services"
                  ? "bg-blue-500 text-white"
                  : darkMode 
                    ? "bg-gray-700 text-gray-200 hover:bg-gray-600" 
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => handleTabChange("menus")}
              className={`block w-full text-left px-4 py-2 rounded-md ${
                activeTab === "menus"
                  ? "bg-blue-500 text-white"
                  : darkMode 
                    ? "bg-gray-700 text-gray-200 hover:bg-gray-600" 
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              Menus
            </button>
            <div className="flex justify-center mt-6">
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-500 hover:text-red-700 font-medium mt-6"
              >
                <FiLogOut /> Logout
              </button>
            </div>
          </div>
        )}

        {/* Scrollable Content */}
        <main className={`p-6 flex-1 overflow-y-auto ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
          {activeTab === "services" && (
            <>
              <ServiceForm onSuccess={fetchServices} darkMode={darkMode} />
              <ul className="mt-6 space-y-4">
                {services.map((service) => (
                  <li
                    key={service._id}
                    className={`${darkMode ? "bg-gray-800 text-white" : "bg-white"} shadow p-4 rounded-lg`}
                  >
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className={darkMode ? "text-gray-300" : "text-gray-600"}>{service.description}</p>
                  </li>
                ))}
              </ul>
            </>
          )}

          {activeTab === "menus" && (
            <>
              <MenuForm onSuccess={fetchMenus} darkMode={darkMode} />
              <ul className="mt-6 space-y-4">
                {menus.map((menu) => (
                  <li key={menu._id} className={`${darkMode ? "bg-gray-800 text-white" : "bg-white"} shadow p-4 rounded-lg`}>
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <div>
                        <h3 className="text-lg font-semibold">{menu.name}</h3>
                        <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                          {menu.description} - ₹{menu.price}
                        </p>
                      </div>
                      <button
                        onClick={() => deleteMenu(menu._id)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;