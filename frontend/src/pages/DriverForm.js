import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import "./index.css";

const DriverForm = () => {
  const onFinish = async (values) => {
    try {
      await axios.post('http://localhost:5000/api/drivers', values);
      alert('Driver added successfully!');
    } catch (error) {
      console.error('Failed to add driver', error);
    }
  };

  return (
    <Form style={{ marginTop: '48px' }} onFinish={onFinish} layout="vertical" className="booking-form">
      <Form.Item name="name" label="Driver Name" rules={[{ required: true, message: 'Please input the driver name!' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="vehicleAssigned" label="Vehicle Assigned" rules={[{ required: true, message: 'Please input the vehicle assigned!' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="contactNumber" label="Contact Number" rules={[{ required: true, message: 'Please input the contact number!' }]}>
        <Input />
      </Form.Item>
      <Button type="primary" htmlType="submit">Add Driver</Button>
    </Form>
  );
};

export default DriverForm;