import React, { Component } from 'react';
import firebase from 'firebase';


import './index.css';
import AuthService from '../../../services/AuthService';
import DataService from '../../../services/DataService';

export default class Register extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      passwordConfirm:'',
      passwordError: false,
      emailError: false,
      jamCode:'',
      jamCodeError: false,
    }

    this.db = firebase.auth();
    this.database = firebase.database();

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

    if(this.state.jamCode == ''){
      this.setState({jamCodeError: true});
      error = true;
    }    

    if(!error){


      DataService.getJamByCode(this.state.jamCode)
        .then((jam)=>{   // si firebase devuelve un OK, se ejecuta resolve del Promise (función result)
          console.log('El ID del Jam es: ', jam)
          
          AuthService.register(this.state.email, this.state.password)
            .then((result)=>{
              alert("Welcome to Ample 53");

              let userToRegister = {
                email   :this.state.email, 
                jams    :[jam.id]
              }

              DataService.saveUserContactInfo(result.user.uid, userToRegister) //jams = array de todos las jams del usuario

          },(error)=>{
              this.setState({registerError: error});
          });

      },(error)=>{
          this.setState({registerError: error});
      });
     
    }

    console.log('El error es:', error)
  }

  render(){
    const {emailError, passwordError} = this.state;

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
            
                {passwordError && <span className="form-error">Los passwords son distintos</span>}

              <input 
                type="textd" 
                placeholder="Jam Code"
                value={this.state.jamCode} 
                onChange={ (event) => { this.setState({jamCode: event.target.value}) } }
              />
            
                {passwordError && <span className="form-error">Los passwords son distintos</span>}

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