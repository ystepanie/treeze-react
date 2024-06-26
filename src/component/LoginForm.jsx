import React, {useState} from 'react';
import '../styles/LoginForm.css';
import { Link , useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = 'http://127.0.0.1:8181/v1/login/login';

  // 토큰을 저장하는 함수
  const saveTokenToLocalStorage = (accessToken) => {
    localStorage.setItem('x-token', accessToken); // 로컬 스토리지에 토큰 저장
  };

  const loginUser = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {   
      const response = await axios.post(API_URL, {
        userId,
        userPw
      });

      // login success
      console.log('Login successful:', response.data);

      const data = response.data.data.tokenVo;
      const accessToken = data.accessToken;
      
      // save token to local storage
      saveTokenToLocalStorage(accessToken);

      if(response.data.status == 'success') {
        console.log("move Page");
        // move to main page
        navigate('/chanbot');
      }

    } catch (error) {
      console.error('Signup failed:', error);
      setErrorMessage(error.errorMessage);
    }

    setIsLoading(false);
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
        <button type="submit" disabled={isLoading}>Login</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
    </div>
  );
}

export default LoginForm;