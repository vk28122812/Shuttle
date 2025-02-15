import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const RouteManagementPage = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    axios.get('/api/routes')
      .then(response => setRoutes(response.data))
      .catch(error => console.error(error));
  }, []);

  const columns = [
    { title: 'Route ID', dataIndex: 'routeId', key: 'routeId' },
    { title: 'Pickup Points', dataIndex: 'pickupPoints', key: 'pickupPoints', render: points => points.join(', ') },
    { title: 'Drop-off Points', dataIndex: 'dropOffPoints', key: 'dropOffPoints', render: points => points.join(', ') },
    { title: 'Assigned Driver', dataIndex: 'assignedDriver', key: 'assignedDriver' }
  ];

  return <Table dataSource={routes} columns={columns} rowKey="routeId" />;
};

export default RouteManagementPage;
