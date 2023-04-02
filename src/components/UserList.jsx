import React from 'react';
import { Row, Col, Spin } from 'antd';
import UserProfile from './UserProfile';

const UserList = ({ loading, users ,  onDelete }) => {
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
      {users.map(user => (
        <Col key={user.id} xs={24} sm={12} md={8} lg={6}>
          <UserProfile key={user.id} user={user} onDelete={onDelete} />
        </Col>
      ))}
    </Row>
    
  );
};

export default UserList;