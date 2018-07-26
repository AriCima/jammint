import React, { Component } from 'react';
import AuthService from '../../../services/AuthService'
import DataService from '../../../services/DataService'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

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

            AuthService.login(this.state.email, this.state.password)
                .then((result)=>{
                    console.log('Result de Login', result)
                
                DataService.getUserContactInfo(result.user.uid).then(
                    (userData)=>{
                    console.log('userData en App: ', userData);
                    this.props.history.push(`/jam/${userData.jams[0]}`)
                    }, 
                    (errorMessage)=>{
                    console.log(errorMessage)
                    }
                )
            },(error)=>{
                this.setState({loginError: error});
            });
        }
    }

    render(){
      const {emailError, loginError} = this.state;
      return (

        <div className="background-login">

          <div className="inner-container">

              <form onSubmit={this.login}> 
              
                <div className="box">
                      
                      <input 
                          type="email" 
                          placeholder="Email"
                          value={this.state.email} 
                          onChange={this.onChangeEmail}
                      />
                      {emailError && <span className="form-error">Campo obligatorio</span>}
                  
                      <input 
                          type="password" 
                          placeholder="Password"
                          value={this.state.password} 
                          onChange={this.onChangePassword}
                      />
                  

                  <div>
                      {loginError && <span>{loginError}</span>}
                  </div>


                    <button>Sign-In</button>
                    <p>Not a member?</p><Link to="/register">Register</Link>
                </div>
              </form>
            </div>
        </div>
      );
  }
}

export default Login;

{/* <div class="inner-container">
   
    <div class="box">

      <h1>Login</h1>
      <input type="text" placeholder="Username"/>
      <input type="text" placeholder="Password"/>
      <button>Login</button>
      <p>Not a member? <span>Sign Up</span></p>

    </div>
  </div> */}
