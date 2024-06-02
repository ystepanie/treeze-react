import React from 'react';
import '../styles/LoginForm.css';
import axios from 'axios';

function LoginForm() {
    const handleSubmit = (e) => {

    }

    const validatePassword = (password) => {
      const regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";
      return regex.test(password);
    }

    return (
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="user_id" name="user_id" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="user_password" name="user_password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
}

export default LoginForm;