import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import baseURL from '../api/url'; 

const styles = {
  Lcontainer: {
    padding: '60px',
    textAlign: 'center',
  },
  Linput: {
    marginBottom: '20px',
    padding: '10px',
    fontSize: '16px',
    width: '300px',
  },
  Lbutton: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
};

const LoginPage = ({ setIsLoggedIn }) => { 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post(`${baseURL}/auth/login`, { username, password });
      console.log('Login successful:', response.data);
      const isLoggedIn = true; 
    if (isLoggedIn) {
      setIsLoggedIn(true); 
    }
      navigate('/uploadBlogs');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div style={styles.Lcontainer}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.Linput}
      />
      <br />
      <button onClick={handleLogin} style={styles.Lbutton}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
