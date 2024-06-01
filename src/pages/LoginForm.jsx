import React from 'react';
import '../styles/LoginForm.css';
import axios from 'axios';

function LoginForm() {
    const handleSubmit = (e) => {

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