import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Lodging from './pages/Lodging';
import Contact from './pages/Contact';
import Booking from './pages/Booking';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lodging" element={<Lodging />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/booking' element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
