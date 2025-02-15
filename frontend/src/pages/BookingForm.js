import React from 'react';
import { Form, Input, DatePicker, Select, Button } from 'antd';
import axios from 'axios';
import './index.css'; // Import the CSS file

const { Option } = Select;

const BookingForm = () => {
  const onFinish = async (values) => {
    try {
      await axios.post('http://localhost:5000/api/bookings', values);
      alert('Booking created successfully!');
    } catch (error) {
      console.error('Booking failed', error);
    }
  };

  return (
    <Form style={{marginTop: '48px'}} onFinish={onFinish} layout="vertical" className="booking-form">
      <Form.Item name="employee" label="Employee Name" rules={[{ required: true }]} className="form-item">
        <Input />
      </Form.Item>
      <Form.Item name="status" label="Status" rules={[{ required: true }]} className="form-item">
        <Select>
          <Option value="pending">Pending</Option>
          <Option value="confirmed">Confirmed</Option>
          <Option value="completed">Completed</Option>
        </Select>
      </Form.Item>
      <Form.Item name="from" label="From" rules={[{ required: true }]} className="form-item">
        <Input />
      </Form.Item>
      <Form.Item name="to" label="To" rules={[{ required: true }]} className="form-item">
        <Input />
      </Form.Item>
      <Form.Item name="vehicle" label="Vehicle" rules={[{ required: true }]} className="form-item">
        <Input />
      </Form.Item>
      <Form.Item name="requestPickupTime" label="Request Pickup Time" rules={[{ required: true }]} className="form-item">
        <DatePicker showTime />
      </Form.Item>
      <Button type="primary" htmlType="submit" className="submit-button">Create Booking</Button>
    </Form>
  );
};

export default BookingForm;