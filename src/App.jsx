import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Chanbot from './pages/Chanbot';



class App extends Component {
  render() {
    return ( 
      <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chanbot" element={<Chanbot />} />
        </Routes>
      </div>
    </Router>
    );
  };  
}

export default App;
