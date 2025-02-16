import React, { useEffect, useState } from 'react';
import { Table, Button } from 'antd';
import axios from 'axios';
import './index.css'; // Assuming you have some CSS for styling
import { useNavigate } from 'react-router-dom';

const RouteManagementPage = () => {
  const [routes, setRoutes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/routes')
      .then(response => setRoutes(response.data))
      .catch(error => console.error(error));
  }, []);

  const columns = [
    { title: 'Route ID', dataIndex: '_id', key: '_id' },
    { title: 'Pickup Points', dataIndex: 'pickupPoints', key: 'pickupPoints' },
    { title: 'Drop-off Points', dataIndex: 'dropOffPoints', key: 'dropOffPoints' },
    { title: 'Assigned Driver', dataIndex: ['assignedDriver', 'name'], key: 'assignedDriver' },
  ];

  const navigateToCreate = () => {
    navigate("/add-route")
  };

  return (
    <div className="table-container">
      <Button type="primary" className="create-route-button" onClick={navigateToCreate}>Create Route</Button>
      <Table dataSource={routes} columns={columns} rowKey="_id" />
    </div>
  );
};

export default RouteManagementPage;