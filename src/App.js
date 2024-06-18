import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import SearchPage from './pages/SearchPage/SearchPage';
import Booking from './pages/Booking/Booking';

function App() {
  return (
    <div>
      <BrowserRouter>
   <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
    </BrowserRouter>
  
    </div>
  );
}

export default App;