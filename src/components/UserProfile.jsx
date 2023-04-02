import React, { useState } from 'react';
import { Card, Modal, message } from 'antd';
import { MailTwoTone, PhoneTwoTone, SecurityScanTwoTone, HomeTwoTone, HeartFilled, EditTwoTone, DeleteTwoTone, IdcardTwoTone } from '@ant-design/icons';
import styles from './UserProfile.module.css';
import UserForm from './UserForm';

const { Meta } = Card;

const UserProfile = ({ user, onDelete }) => {
  const [showForm, setShowForm] = useState(false);
  const [heartClicked, setHeartClicked] = useState(false);



  const handleUpdate = (updatedUser) => {
    setUser(updatedUser);
    setShowForm(false);
  };


  const handleEditClick = () => {
    setShowForm(true);
  };

  const handleFormCancel = () => {
    setShowForm(false);
  };

  const handleHeartClick = () => {
    setHeartClicked(!heartClicked);
  };

  const handleDeleteClick = () => {

    Modal.confirm({
      title: 'Confirm',
      content: `Are you sure you want to delete ${user.name} profile?`,
      okText: 'Yes',
      cancelText: 'No',
      onOk: () => {
        message.success(` ${user.name} profile deleted successfully`);
        onDelete(user);
      },
    });
  };

  return (
    <Card
      cover={
        <img
          className={styles.avatar}
          alt="avatar"
          src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
        />
      }
      style={{ width: 300 }}
    >
      <Meta title={user.name} />
      <p>
        <MailTwoTone /> <strong>Email : </strong>
        {user.email}
      </p>
      <p>
        <PhoneTwoTone /> <strong>Phone :</strong> {user.phone}
      </p>
      <p>
        <HomeTwoTone /> <strong>Address : </strong> {user.address.street}, {user.address.suite}, {user.address.city},{' '}
        {user.address.zipcode}
      </p>
      <p>
        <SecurityScanTwoTone /> <strong>Website : </strong> {user.website}
      </p>
      <p>
        <IdcardTwoTone /> <strong>Company : </strong>
        {user.company.name}
      </p>
      <div className={styles.footer}>
        <HeartFilled
          style={{ fontSize: 24, color: heartClicked ? 'red' : 'white' }}
          onClick={handleHeartClick}
        />
        <EditTwoTone style={{ fontSize: 24 }} onClick={handleEditClick} />
        <DeleteTwoTone style={{ fontSize: 24 }} onClick={handleDeleteClick} />
      </div>
      <Modal visible={showForm} onCancel={handleFormCancel} footer={null} destroyOnClose={true}>
        <UserForm user={user} onSubmit={handleUpdate} onCancel={handleFormCancel} />
      </Modal>
    </Card>
  );
};

export default UserProfile;