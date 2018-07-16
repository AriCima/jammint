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
      this.db.createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    }
  }

  render(){
    const {emailError} = this.state;
    return (
      <div className="register-form">
        <form onSubmit={this.register}> 

          <div className="form-item">
            <div className="form-item-label">Email: </div>
            <input 
              type="email" 
              value={this.state.email} 
              onChange={this.onChangeEmail}
            />
            {emailError && <span className="form-error">This is mandatory</span>}
          </div>

          <div className="form-item">
            <div className="form-item-label">Password: </div>
            <input 
              type="password" 
              value={this.state.password} 
              onChange={this.onChangePassword}
            />
          </div>

          <div className="form-item">
            <div className="form-item-label">Confirm password: </div>
            <input 
              type="password" 
              value={this.state.passwordConfirm} 
              onChange={this.onChangePasswordConfirm}
            />
          </div>

          <div className="form-item">
            <button type="submit">Signup!!</button>
          </div>

        </form>
      </div>
    );
  }

}
