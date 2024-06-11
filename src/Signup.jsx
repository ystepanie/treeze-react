import React, { Component } from 'react';
import SignupForm from './pages/SignupForm';

class Signup extends Component {
  render() {
    return ( 
      <div className="Signup">
        <div className="main-content">
          <SignupForm />
        </div>
      </div>
    );
  };  
}

export default Signup;
