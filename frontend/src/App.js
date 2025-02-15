import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import BookingPage from './pages/BookingPage';
// import BookingForm from './pages/BookingForm';
import BookingPage from './pages/BookingPage';
import BookingForm from './pages/BookingForm';
import RouteManagementPage from './pages/RouteManagementPage';
import RouteManagementForm from './pages/RouteManagementForm';
import DriverForm from './pages/DriverForm';
import DriverPage from './pages/DriverPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookingPage />} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> */}
        <Route path="/bookings" element={<BookingPage />} />
        <Route path="/book-shuttle" element={<BookingForm />} />
        <Route path="/driver" element={<DriverPage />} />
        <Route path="/add-driver" element={<DriverForm />} />
        <Route path="/manage-routes" element={<RouteManagementPage />} />
        <Route path="/add-route" element={<RouteManagementForm />} />
      </Routes>
    </Router>
  );
}

export default App;
