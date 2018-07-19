import React, { Component } from 'react';
import firebase from 'firebase';

import './index.css';

export default class Register extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      passwordConfirm:'',
      emailError: false
    }

    this.db = firebase.auth();

    this.register = this.register.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePasswordConfirm = this.onChangePasswordConfirm.bind(this);
  }

  onChangeEmail(event){
    this.setState({email: event.target.value})
  }

  onChangePassword(event){
    this.setState({password: event.target.value})
  }
  onChangePasswordConfirm(event){
    this.setState({passwordConfirm: event.target.value})
  }

  register(e){
    e.preventDefault();
    let error = false;

    if(this.state.email == ''){
      this.setState({emailError: true});
      error = true;
    }

    if(this.state.password == ''){
      this.setState({passwordError: true});
      error = true;
    }

    if(this.state.password !== this.state.passwordConfirm){
      this.setState({passwordError: true});
      error = true;
    }

    if(!error){
      this.db.createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
        // var errorCode = error.code;
        // var errorMessage = error.message;
      });
    }

    console.log('El error es:', error.code)
  }

  render(){
    const {emailError} = this.state;
    return (

      <div className="background-register">
      
        <div className="inner-container">
        
          <form onSubmit={this.register}> 

            <div className="box">
        
              <input 
                type="email" 
                placeholder="Email"
                value={this.state.email} 
                onChange={this.onChangeEmail}
              />
              {emailError && <span className="form-error">This is mandatory</span>}

              <input 
                type="password" 
                placeholder="Password"
                value={this.state.password} 
                onChange={this.onChangePassword}
              />

              <input 
                type="password" 
                placeholder="Confirm Password"
                value={this.state.passwordConfirm} 
                onChange={this.onChangePasswordConfirm}
              />
            

              <div className="form-item">
                <button type="submit">Register</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    );
  }

}


{/* <div class="inner-container">
    <div class="box">
      <h1>Login</h1>
      <input type="text" placeholder="Username"/>
      <input type="text" placeholder="Password"/>
      <button>Login</button>
      <p>Not a member? <span>Sign Up</span></p>
    </div>
  </div> */}