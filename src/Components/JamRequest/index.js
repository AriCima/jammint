import React, { Component } from 'react';
//import firebase from 'firebase';

import './index.css';

export default class JamRequest extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      surnames: '',
      passport: '',
      homeStreet: '',
      hHouseNr: '',
      hFloorNr: '',
      hDoorNr: '',
      hZipCode:'',
      hCity: '',
      hCountry: '',
      hTel:'',
      hMobile: '',
      email: '',
      checkInDate: '',
      checkOutDate: '',
      roomNr: '',
      datesError: false,
    }

   // this.db = firebase.auth();

    this.register = this.register.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeSurnames = this.onChangeSurnames.bind(this);
    this.onChangePassport = this.onChangePassport.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);

    this.onChangeHomeStreet = this.onChangeHomeStreet.bind(this);
    this.onChangehHouseNr = this.onChangehHouseNr.bind(this);
    this.onChangehFloorNr = this.onChangehFloorNr.bind(this);
    this.onChangehDoorNr = this.onChangehDoorNr.bind(this);
    this.onChangehZipCode = this.onChangehZipCode.bind(this);
    this.onChangehCity = this.onChangehCity.bind(this);
    this.onChangehCountry = this.onChangehCountry.bind(this);
    this.onChangehTel = this.onChangehTel.bind(this);
    this.onChangehMobile =  this.onChangehMobile.bind(this);

    this.onChangeCheckInDate =  this.onChangeCheckInDate.bind(this);
    this.onChangehCheckOutDate = this.onChangehCheckOutDate.bind(this);
  }

  onChangeName(event){
    this.setState({names: event.target.value})
  }
  onChangeSurnames(event){
    this.setState({surnames: event.target.value})
  }
  onChangePassport(event){
    this.setState({passport: event.target.value})
  }
  onChangeHomeStreet(event){
    this.setState({homeStreet: event.target.value})
  }
  onChangehHouseNr(event){
    this.setState({hHouseNr: event.target.value})
  }
  onChangehFloorNr(event){
    this.setState({hFloorNr: event.target.value})
  }
  onChangehDoorNr(event){
    this.setState({hDoorNr: event.target.value})
  }
  onChangehZipCode(event){
    this.setState({hZipCode: event.target.value})
  }
  onChangehCity(event){
    this.setState({hCity: event.target.value})
  }
  onChangehCountry(event){
    this.setState({hCountry: event.target.value})
  }
  onChangehTel(event){
    this.setState({hTel: event.target.value})
  }
  onChangehMobile(event){
    this.setState({hMobile: event.target.value})
  }
  onChangeEmail(event){
    this.setState({email: event.target.value})
  }
  onChangeCheckInDate(event){
    this.setState({checkInDate: event.target.value})
  }
  onChangehCheckOutDate(event){
    this.setState({CheckOutDate: event.target.value})
  }
  onChangeRoomNr(event){
    this.setState({roomNr: event.target.value})
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

    if(this.state.checkOutDate < this.state.checkInDate){
      this.setState({datesError: true});
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
    const {nameError} = this.state; 
    return (

      <div className="jam-request-form">

        <form onSubmit={this.register}> 

          <div className="form-item">

            <div className="form-item-title">
              <h2>Personal Info</h2>
            </div>

            <div className="form-item-info">
              <p>Name:</p>
              <input 
                type="text" 
                value={this.state.names} 
                onChange={this.onChangeName}
              />
            </div>
      
            <div className="form-item-info">
              <p>Surnames:</p>
              <input 
                type="text" 
                value={this.state.surnames} 
                onChange={this.onChangeSurnames}
              />
            </div>

            <div className="form-item-info">
              <p>Passport:</p>
              <input 
                type="text" 
                value={this.state.passport} 
                onChange={this.onChangePassport}
              />
            </div>

            <div className="form-item-info">
              <p>Email:</p>
              <input 
                type="email" 
                value={this.state.email} 
                onChange={this.onChangeEmail}
              />
            </div>
          </div>

          <div className="form-item">

            <div className="form-item-title">
              <p>Home Address</p>
            </div>

            <div className="form-item-info">
              <p>Street:</p>
              <input 
                type="text" 
                value={this.state.homeStreet} 
                onChange={this.onChangeHomeStreet}
              />
            </div>

            <div className="form-item-info">
              <p>Hause Nr:</p>
              <input 
                type="text" 
                value={this.state.hHouseNr} 
                onChange={this.onChangehHouseNr}
              />
            </div>


            <div className="form-item-info">
              <p>Floor:</p>
              <input 
                type="text" 
                value={this.state.hFloorNr} 
                onChange={this.onChangehHouseNr}
              />
            </div>

            <div className="form-item-info">
              <p>Door Nr:</p>
              <input 
                type="text" 
                value={this.state.hDoorNr} 
                onChange={this.onChangehDoorNr}
              />
            </div>

            <div className="form-item-info">
              <p>Zip Code:</p>
              <input 
                type="text" 
                value={this.state.hZipCode} 
                onChange={this.onChangehZipCode}
              />
            </div>

            <div className="form-item-info">
              <p>City:</p>
              <input 
                type="text" 
                value={this.state.hCity} 
                onChange={this.onChangehCity}
              />
            </div>

          
            <div className="form-item-info">
              <p>Country:</p>
              <input 
                type="text" 
                value={this.state.hCountry} 
                onChange={this.onChangehCountry}
              />
            </div>

            <div className="form-item-info">
              <p>Home Telephone:</p>
              <input 
                type="text" 
                value={this.state.hTel} 
                onChange={this.onChangehTel}
              />
            </div>

          
            <div className="form-item-info">
              <p>Mobile:</p>
              <input 
                type="text" 
                value={this.state.hMobile} 
                onChange={this.onChangehMobile}
              />
            </div>
          </div>

          <div className="form-item">

            <div className="form-item-title">
              <p>Booking Info</p>
            </div>

            <div className="form-item-info">
              <p>Check-In Date:</p>
              <input 
                type="date" 
                value={this.state.checkInDate} 
                onChange={this.onChangeCheckInDate}
              />
            </div>

            <div className="form-item-info">
              <p>Check-Out Date:</p>
              <input 
                type="date" 
                value={this.state.checkOutDate} 
                onChange={this.onChangeCheckOutDate}
              />
            </div>

            <div className="form-item-info">
              <p>Room Nr:</p>
              <input 
                type="text" 
                value={this.state.roomNr} 
                onChange={this.onChangeRoomNr}
              />
            </div>
          </div>

        <div className="form-item">
          <button type="submit">SEND REQUEST</button>
        </div>

        </form>
      </div>
    );
  }

}
