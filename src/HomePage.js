import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HomePage extends Component {
  render () {
    return (
      <div className="registrationPages">
        <p className="registration" >Log in or sign up!</p>
        <ul className="linkUL">
        <li className="linkLI"><Link className="link" to="/login">Go to Login</Link></li>
        <li className="linkLI"><Link className="link" to="/signup">Go to Signup</Link></li>
        </ul>
      </div>
    );
  }
}

export default HomePage;
