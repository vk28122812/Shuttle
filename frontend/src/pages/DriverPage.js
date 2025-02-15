import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const DriverPage = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/drivers')
      .then(response => setDrivers(response.data))
      .catch(error => console.error(error));
  }, []);

  const columns = [
    { title: 'Driver ID', dataIndex: 'driverId', key: 'driverId' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    { title: 'Contact Number', dataIndex: 'contactNumber', key: 'contactNumber' }
  ];

  return <Table dataSource={drivers} columns={columns} rowKey="driverId" />;
};

export default DriverPage;
