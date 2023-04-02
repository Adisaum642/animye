import React, { useState } from 'react';
import { Row, Col, Spin } from 'antd';
import UserProfile from '../components/UserProfile';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import { getUsers } from '../api/users';

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false); // new state variable

  const handleSubmit = values => {
    console.log(values);
  };

  const handleEdit = () => {
    setShowForm(true); // display form when EditTwoTone icon is clicked
  }

  const fetchUsers = async () => {
    setLoading(true);
    const data = await getUsers();
    setUsers(data);
    setLoading(false);
  };

  return (
    <div>
      {showForm && <UserForm onSubmit={handleSubmit} />} {/* display form if showForm is true */}
      <Spin spinning={loading}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <UserList users={users} fetchUsers={fetchUsers} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={18} xl={18}>
            <UserProfile user={users[0]} onEdit={handleEdit} />
          </Col>
        </Row>
      </Spin>
    </div>
  );
};

export default HomePage;
