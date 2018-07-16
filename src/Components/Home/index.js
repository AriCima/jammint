import React, { Component } from 'react';
import Login from '../Accounts/Login';
import Register from '../Accounts/Register';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
     beers: []
    }
  }


  render() {
    
    return (
      <Register />
      <p>or</p>
      <Login />
    );
  }
}

export default Home;