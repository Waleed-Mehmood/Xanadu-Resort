import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Lodging from './pages/Lodging';
import Resort from './pages/Resort';
import OurRestaurent from './pages/OurRestaurent';
import HeritageHut from './pages/HeritageHut';
import Camp from './pages/Camp';
import StudentRoom from './pages/StudentRoom';
import AdminDashboard from './pages/admindashboard/AdminDashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lodging" element={<Lodging />} />
        <Route path="/our-resort" element={<Resort />} />
        <Route path="/our-restaurent" element={<OurRestaurent />} />
        <Route path="/heritage-hut" element={<HeritageHut />} />
        <Route path="/camps" element={<Camp />} />
        <Route path="/student-room" element={<StudentRoom />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
