import React, { Component } from 'react';
import Contract from './Contract/'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

//import firebase from 'firebase';

import './index.css';
import { request } from 'http';

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
      studies: '',
      school: '',
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

    this.onChangeStudies = this.onChangeStudies.bind(this);
    this.onChangeSchool = this.onChangeSchool.bind(this);
    this.onChangeCheckInDate =  this.onChangeCheckInDate.bind(this);
    this.onChangehCheckOutDate = this.onChangehCheckOutDate.bind(this);
    this.onChangeRoomNr = this.onChangeRoomNr.bind(this);
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

  onChangeStudies(event){
    this.setState({studies: event.target.value})
  }

  onChangeSchool(event){
    this.setState({school: event.target.value})
  }
  register(e){
    e.preventDefault();
    let error = false;

    if(this.state.email === ''){
      this.setState({emailError: true});
      error = true;
    }

    if(this.state.password === ''){
      this.setState({passwordError: true});
      error = true;
    }

    if(this.state.checkOutDate < this.state.checkIntDate){
      this.setState({datesError: true});
      error = true;
    }

    if(!error){
      // this.db.createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
      //   var errorCode = error.code;
      //   var errorMessage = error.message;
      //});
      <Contract 
        name = {this.props.name} 
        surname = {this.props.surname} 
        passport = {this.props.passport} 
        email = {this.props.email} 
        phone = {this.props.phone} 
        mobile = {this.props.mobile} 
      
        street = {this.props.homeStreet} 
        houseNr = {this.props.hHouseNr} 
        floorNr = {this.props.hFloorNr} 
        doorNr = {this.props.hDoorNr} 
        zip = {this.props.hZipCode}
        city = {this.props.hCity} 
        country = {this.props.hCountry} 

        checkIn = {this.props.checkInDate} 
        checkOut = {this.props.checkOutDate}
        studies = {this.props.studies}
        school = {this.props.school}
        roomNr = {this.props.roomNr}
      />

    }
  }

  render(){
    const {nameError} = this.state; 
    
    return (

      <div className="jam-request-form">



        <form onSubmit={this.register}> 

          <div className="form-item">

            <div className="jam-info">

              <div className="jam-img">
                <img src={require('../../images/logoAmple.jpg')}/>
              </div>

              <div className="invite-text">
                <h5>You've been invited to <span>jam</span> to <span>Ample 53 </span> "Student's Home in Barcelona"</h5><br/>
                <p>If you want to jam, please fill the following form</p>
              </div>

            </div>
          </div>

          <div className="form-item">

            <div className="form-item-title">
              <h2>Personal Info</h2>
            </div>

            <div className="form-item-info">
              <div>
                <p>Name:</p>
              </div>
              <input 
                type="text" 
                size="50"
                value={this.state.names} 
                onChange={this.onChangeName}
              />
            </div>
      
            <div className="form-item-info">
              <div>
                <p>Surnames:</p>
              </div>
              <input 
                type="text" 
                size="50"
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
                size="50"
                value={this.state.email} 
                onChange={this.onChangeEmail}
              />
            </div>

            <div className="form-item-info">
              <p>Phone:</p>
              <input 
                type="text" 
                size="25"
                value={this.state.hTel} 
                onChange={this.onChangehTel}
              />
            </div>

          
            <div className="form-item-info">
              <p>Mobile:</p>
              <input 
                type="text" 
                size="25"
                value={this.state.hMobile} 
                onChange={this.onChangehMobile}
              />
            </div>
          </div>

          <div className="form-item">

            <div className="form-item-title">
              <h2>Home Address</h2>
            </div>

            <div className="form-item-info">
              <p>Street:</p>
              <input 
                type="text" 
                size="50"
                value={this.state.homeStreet} 
                onChange={this.onChangeHomeStreet}
              />
            </div>

            <div className="form-item-info">
              <p>House Nr:</p>
              <input 
                type="text" 
                size="6"
                value={this.state.hHouseNr} 
                onChange={this.onChangehHouseNr}
              />
            </div>


            <div className="form-item-info">
              <p>Floor:</p>
              <input 
                type="text" 
                size="3"
                value={this.state.hFloorNr} 
                onChange={this.onChangehFloorNr}
              />
            </div>

            <div className="form-item-info">
              <p>Door Nr:</p>
              <input 
                type="text" 
                size="5"
                value={this.state.hDoorNr} 
                onChange={this.onChangehDoorNr}
              />
            </div>

            <div className="form-item-info">
              <p>Zip Code:</p>
              <input 
                type="text" 
                size="15"
                value={this.state.hZipCode} 
                onChange={this.onChangehZipCode}
              />
            </div>

            <div className="form-item-info">
              <p>City:</p>
              <input 
                type="text" 
                size="50"
                value={this.state.hCity} 
                onChange={this.onChangehCity}
              />
            </div>

          
            <div className="form-item-info">
              <p>Country:</p>
              <input 
                type="text" 
                size="50"
                value={this.state.hCountry} 
                onChange={this.onChangehCountry}
              />
            </div>

          </div>

          <div className="form-item">

            <div className="form-item-title">
              <h2>Booking Info</h2>
            </div>

            <div className="form-item-info">
              <p>Check-In Date:</p>
              <input 
                type="date" 
                value={this.state.checkInDate} 
                onChange={this.onChange}
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
              <p>Studies:</p>
              <input 
                type="textarea" 
                value={this.state.studies} 
                onChange={this.onChangeStudies}
              />
            </div>

            <div className="form-item-info">
              <p>School:</p>
              <input 
                type="text" 
                value={this.state.school} 
                onChange={this.onChangeSchool}
              />
            </div>

            <div className="form-item-info">
              <p>Room Nr:</p>
              <input 
                type="text" 
                size="2"
                value={this.state.roomNr} 
                onChange={this.onChangeRoomNr}
              />
            </div>
          </div>

        <div className="submit">
          <button type="submit" ><Link to='/jamrequest/contracts'>JAM !</Link></button>
        </div>

        </form>
      </div>
    );
  }

}
