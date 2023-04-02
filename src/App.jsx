import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './assets/spinkit.css';
import { fetchUsers } from './api/users';
import UserList from './components/UserList';

import './App.css';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;



function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then(users => {
        setUsers(users);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleUserUpdate = (updatedUser) => {
  setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  console.log(`User ${updatedUser.id} updated`, users);
};

  const handleDeleteUser = (deletedUser) => {
    setUsers(users.filter(user => user.id !== deletedUser.id));
  };




  return (
    <div className="App">
      <header className="App-header">
        <h1>User Profiles</h1>
      </header>
      <main className="App-main">
        {loading ? (
          <div className="App-loading">
            <Spin indicator={antIcon} />
          </div>
        ) : (
          <UserList users={users} onDelete={handleDeleteUser} />

        )}

      </main>
    </div>
  );
}

export default App;