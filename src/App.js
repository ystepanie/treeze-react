import React from 'react';
import ImageSection from './pages/ImageSection';
import LoginForm from './pages/LoginForm';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <ImageSection />
        <div className="login-form-container">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default App;
