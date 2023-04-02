import React from 'react';
import { Row, Col, Spin } from 'antd';
import UserProfile from './UserProfile';

const UserList = ({ loading, users }) => {
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
          <UserProfile user={user} />
        </Col>
      ))}
    </Row>
  );
};

export default UserList;