import React, { useEffect, useState } from 'react';
import { Form, Input, Select, Button } from 'antd';
import axios from 'axios';
import "./index.css";

const { Option } = Select;

const RouteManagementForm = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/drivers')
      .then(response => setDrivers(response.data))
      .catch(error => console.error(error));
  }, []);

  const onFinish = async (values) => {
    try {
      await axios.post('http://localhost:5000/api/routes', values);
      alert('Route added successfully!');
    } catch (error) {
      console.error('Failed to add route', error);
    }
  };

  return (
    <Form style={{ marginTop: '48px' }} onFinish={onFinish} layout="vertical" className="booking-form">
      <Form.Item name="pickupPoints" label="Pickup Points" rules={[{ required: true, message: 'Please input the pickup points!' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="dropOffPoints" label="Drop-off Points" rules={[{ required: true, message: 'Please input the drop-off points!' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="assignedDriver" label="Assigned Driver" rules={[{ required: true, message: 'Please select an assigned driver!' }]}>
        <Select>
          {drivers.map((driver) => (
            <Option key={driver.driverId} value={driver.driverId}>{driver.name}</Option>
          ))}
        </Select>
      </Form.Item>
      <Button type="primary" htmlType="submit">Add Route</Button>
    </Form>
  );
};

export default RouteManagementForm;