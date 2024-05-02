import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import baseURL from '../api/url'; 

const styles = {
  container: {
    padding: '30px', /* Reduced padding for smaller screens */
    textAlign: 'center',
    maxWidth: '400px', /* Limiting container width */
    margin: '0 auto', /* Center aligning the container */
  },
  input: {
    marginBottom: '20px',
    padding: '10px',
    fontSize: '16px',
    width: '100%', /* Full width on smaller screens */
    boxSizing: 'border-box', /* Including padding in width calculation */
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    width: '100%', /* Full width on smaller screens */
    boxSizing: 'border-box', /* Including padding in width calculation */
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
      setIsLoggedIn(true); 
      navigate('/uploadBlogs');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div style={styles.container}>
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
        style={styles.input}
      />
      <br />
      <button onClick={handleLogin} style={styles.button}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
