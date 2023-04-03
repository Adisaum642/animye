import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Alert } from 'antd';

const UserForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [website, setWebsite] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !phone || !address || !website || !companyName) {
      const errors = {};
      if (!name) errors.name = true;
      if (!email) errors.email = true;
      if (!phone) errors.phone = true;
      if (!address) errors.address = true;
      if (!website) errors.website = true;
      if (!companyName) errors.companyName = true;
      setFormErrors(errors);
      return;
    }
    const updatedUser = {
      name,
      email,
      phone,
      website,
      address,
      company: {
        name: companyName,
      },
    };
    onSubmit(updatedUser);
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setWebsite('');
    setCompanyName('');
    setFormErrors({});
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Item label="Name" required>
        <Input value={name} onChange={e => setName(e.target.value)} className={formErrors.name ? 'error' : ''} />
        {formErrors.name && <Alert message="Name is required" type="error" showIcon />}
      </Form.Item>
      <Form.Item label="Email" required>
        <Input value={email} onChange={e => setEmail(e.target.value)} className={formErrors.email ? 'error' : ''} />
        {formErrors.email && <Alert message="Email is required" type="error" showIcon />}
      </Form.Item>
      <Form.Item label="Phone" required>
        <Input value={phone} onChange={e => setPhone(e.target.value)} className={formErrors.phone ? 'error' : ''} />
        {formErrors.phone && <Alert message="Phone is required" type="error" showIcon />}
      </Form.Item>
      <Form.Item label="Address" required>
        <Input value={address} onChange={e => setAddress(e.target.value)} className={formErrors.address ? 'error' : ''} />
        {formErrors.address && <Alert message="Address is required" type="error" showIcon />}
      </Form.Item>
      <Form.Item label="Website" required>
        <Input value={website} onChange={e => setWebsite(e.target.value)} className={formErrors.website ? 'error' : ''} />
        {formErrors.website && <Alert message="Website is required" type="error" showIcon />}
      </Form.Item>
      <Form.Item label="Company Name" required>
        <Input value={companyName} onChange={e => setCompanyName(e.target.value)} className={formErrors.companyName ? 'error' : ''} />
        {formErrors.companyName && <Alert message="Company Name is required" type="error" showIcon />}
      </Form.Item>
      <Form.Item>
        <
          Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserForm;