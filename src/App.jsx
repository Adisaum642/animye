import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css';
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
          <UserList users={users} />

        )}

      </main>
    </div>
  );
}

export default App;