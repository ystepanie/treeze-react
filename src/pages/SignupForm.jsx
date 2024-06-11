import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SignupForm() {
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [userPwConfirm, setUserPwConfirm] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const API_URL = 'http://127.0.0.1:8181/v1/login/signup';
    
    const signupUser = async (event) => {
        event.preventDefault();
    
        try {
          const response = await axios.post(API_URL, {
            userId,
            userPw,
            userPwConfirm,
            phoneNumber
          });
    
          // 회원가입 성공 처리
          console.log('Signup successful:', response.data);
        } catch (error) {
          console.error('Signup failed:', error.response.data.errorMessage);
          setErrorMessage(error.response.data.errorMessage);
        }
      };

    return (
        <div className="signup-form">
          <h2>Signup</h2>
          <form onSubmit={signupUser}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="user_id" name="user_id" onChange={(e) => setUserId(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="user_password" name="user_password" onChange={(e) => setUserPw(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="password_confirm">Password Confirm:</label>
              <input type="password" id="password_confirm" name="password_confirm" onChange={(e) => setUserPwConfirm(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="phone_number">Phone Number:</label>
              <input type="text" id="phone_number" name="phone_number" onChange={(e) => setPhoneNumber(e.target.value)}/>
            </div>
            <button type="submit">Signup</button>
            {errorMessage && <p className="error">{errorMessage}</p>}
          </form>
          <p><Link to="/">Go to Login page</Link></p>
        </div>
      );
}

export default SignupForm;