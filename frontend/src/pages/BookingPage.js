import React, { useEffect, useState } from 'react';
import { Button, Table } from 'antd';
import axios from 'axios';
import './index.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/bookings')
      .then(response => setBookings(response.data))
      .catch(error => console.error(error));
  }, []);

  const columns = [
    { title: 'Booking ID', dataIndex: 'bookingId', key: 'bookingId' },
    { title: 'Employee', dataIndex: 'employee', key: 'employee' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    { title: 'From', dataIndex: 'from', key: 'from' },
    { title: 'To', dataIndex: 'to', key: 'to' },
    { title: 'Vehicle', dataIndex: 'vehicle', key: 'vehicle' },
    { title: 'Request Pickup Time', dataIndex: 'requestPickupTime', key: 'requestPickupTime' },
  ];

  const navigateTocreate = () => {
    navigate("/book-shuttle")
  }
  return (
    <div className="table-container">
      <Button type='primary' className="create-booking-button" onClick={navigateTocreate}>Create Booking</Button>
      <Table style={{marginTop: '10px'}} dataSource={bookings} columns={columns} rowKey="bookingId" />
    </div>
  );
};

export default BookingPage;