import React, {useState} from 'react';
import '../styles/LoginForm.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const API_URL = 'http://127.0.0.1:8181/v1/login/login';

  const loginUser = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(API_URL, {
        userId,
        userPw
      });

      // 로그인 성공 처리
      console.log('Login successful:', response.data);
      // 예: 토큰 저장, 리다이렉션 등
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
      setErrorMessage(error.response.data.errorMessage);
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={loginUser}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="user_id" name="user_id" onChange={(e) => setUserId(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="user_password" name="user_password" onChange={(e) => setUserPw(e.target.value)}/>
        </div>
        <button type="submit">Login</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
    </div>
  );
}

export default LoginForm;