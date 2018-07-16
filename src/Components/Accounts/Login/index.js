import React, { Component } from 'react';
import AuthService from '../../../services/AuthService'

import './index.css';

class Login extends Component {

    constructor(props){
      super(props);

      this.state = {
        email: '',
        password: '',
        emailError: false,
        loginError: ''
      }

      this.login = this.login.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
  }

  onChangeEmail(event){
      this.setState({email: event.target.value})
  }

  onChangePassword(event){
      this.setState({password: event.target.value})
  }

  login(e){
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

      if(!error){
          this.setState({loginError: ''});

          AuthService.login(this.state.email, this.state.password).then((result)=>{
              this.props.history.push('/board')
          },(error)=>{
              this.setState({loginError: error});
          });
      }
  }

  render(){
      const {emailError, loginError} = this.state;
      return (
          <div className="register-form">

              <form onSubmit={this.login}> 
              
                  <div className="form-item">
                      <div className="form-item-label">Email: </div>
                      <input 
                          type="email" 
                          value={this.state.email} 
                          onChange={this.onChangeEmail}
                      />
                      {emailError && <span className="form-error">Campo obligatorio</span>}
                  </div>

                  <div className="form-item">
                      <div className="form-item-label">Password: </div>
                      <input 
                          type="password" 
                          value={this.state.password} 
                          onChange={this.onChangePassword}
                      />
                  </div>

                  <div>
                      {loginError && <span>{loginError}</span>}
                  </div>
                  <div className="form-item">
                      <button type="submit">Login</button>
                  </div>

              </form>

          </div>
      );
  }
}

export default Login;
