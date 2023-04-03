import React, { useState } from 'react';
import { Row, Col, Spin } from 'antd';
import UserProfile from './UserProfile';
import UserForm from './UserForm';

const UserList = ({ loading, users, onDelete }) => {
  const [editingUser, setEditingUser] = useState(null);

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  if (loading) {
    return (
      <Row justify="center">
        <Col>
          <Spin size="large" />
        </Col>
      </Row>
    );
  }

  return (
    <Row gutter={[16, 16]}>
      {users.map((user) => (
        <Col key={user.id} xs={24} sm={12} md={8} lg={6}>
          <UserProfile
            key={user.id}
            user={user}
            onDelete={onDelete}
            onEdit={handleEditUser}
          />
        </Col>
      ))}
      {editingUser && (
        <UserForm user={editingUser} onCancel={() => setEditingUser(null)} />
      )}
    </Row>
  );
};

export default UserList;