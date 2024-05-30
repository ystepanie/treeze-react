import React, { Component } from 'react';
import ImageSection from './pages/ImageSection';
import LoginForm from './pages/LoginForm';
import './styles/App.css';

class App extends Component {
  render() {
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
  };  
}

export default App;
