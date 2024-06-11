import ImageSection from "./pages/ImageSection";
import LoginForm from "./pages/LoginForm";
import React from 'react';

function Login() {
    return (
        <div className="main-content">
          <ImageSection />
          <div className="login-form-container">
            <LoginForm />
          </div>
        </div>
    );
}

export default Login;