import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const UserForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [website, setWebsite] = useState('');
  const [companyName, setCompanyName] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const updatedUser = {
      ...user,
      name,
      email,
      phone,
      website,
      address: {
        ...user.address,
        street,
        suite,
        city,
        zipcode,
      },
      company: {
        ...user.company,
        name: companyName,
      },
    };
    onSubmit(updatedUser);
    setName('');
    setEmail('');
    setPhone('');
    setWebsite('');
    setAddress('');
    setCompanyName('');
    onCancel();
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Item label="Name">
        <Input value={name} onChange={e => setName(e.target.value)} />
      </Form.Item>
      <Form.Item label="Email">
        <Input value={email} onChange={e => setEmail(e.target.value)} />
      </Form.Item>
      <Form.Item label="Phone">
        <Input value={phone} onChange={e => setPhone(e.target.value)} />
      </Form.Item>
      <Form.Item label="Address">
        <Input value={address} onChange={e => setAddress(e.target.value)} />
      </Form.Item>
      <Form.Item label="Website">
        <Input value={website} onChange={e => setWebsite(e.target.value)} />
      </Form.Item>
      <Form.Item label="Company Name">
        <Input value={companyName} onChange={e => setCompanyName(e.target.value)} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserForm;