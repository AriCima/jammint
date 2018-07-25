import React, { Component } from 'react';
import CustomDropZone from '../../../CustomDropZone';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import DataService from '../../../../services/DataService';

import './index.css';

export default class ContractInfo extends Component {
  constructor(props){
    super(props);

    this.state = {
      datesError   : false,
      contentError : false,
    }

    this.updateFormInputElegant = this.updateFormInputElegant.bind(this);
    this.saveUserDatainFireStore =  this.saveUserDatainFireStore.bind(this);
  }

 
  componentDidUpdate(prevProps, prevState, snapshot){
      if((this.props.user !== null && prevProps.user !== null && prevProps.user.id !== this.props.user.id)||
    prevProps.user === null && this.props.user !== null){
        // TRAERME LAS VARIABLES DEL getUserContactInfo para que el formulario quede relleno
        DataService.getUserContactInfo(this.props.user.id).then(
            (userData)=>{
                //console.log('userData en App: ', userData);
                userData.id = this.props.user.id;

                this.setState({user : userData});
            }, 
            
            (errorMessage)=>{
                console.log(errorMessage)
            }
        )
    }
  }



  updateFormInputElegant(field, value){
      let user = this.state.user;
      user[field] = value;
      this.setState({user})
  };
  


  saveUserDatainFireStore(e){
    e.preventDefault();
    // let error = false;

    // if (name === '' || surnames ==='' || passport ==='' || street === ''|| houseNr ===''|| zipCode ===''||
    // city ===''|| country ===''||tel ===''||mobile ===''||email ===''||checkInDate ===''|| checkOutDate ===''|| 
    // studies ===''|| school ===''|| roomNr ==='') {

    //   this.setState({contentError: true});
    //   console.log('Complete all mandatory fields');
    //   error = true;
    // }

    // if(this.state.checkInDate >= this.state.checkOutDate){
    //   this.setState({datesError: true});
    //   error = true;
    // }

    // if(!error){

        let userToSave = Object.assign({},this.state.user)
        delete userToSave.id; // para no guardar ID dentro del usuario

      DataService.saveUserContactInfo(this.state.user.id, userToSave)
    //}
  }

  render(){
    console.log("props del user", this.props.user)
    if(!this.state.user){
        return <p>LOADING!</p>
    }
    return (

        <div className="form-background">

            <div className="form-style">
                <form onSubmit={this.saveUserDatainFireStore} >
                    <fieldset>
                        <legend><span className="number">1</span> Personal Info</legend>

                        <CustomDropZone 
                            onFileUpload={(fileUrl)=>{this.updateFormInputElegant('userPicture', fileUrl)}}
                            acceptedFiles="image/jpeg, image/png"
                            uploadFolder="userProfile"
                            name="Profile Picture"
                            text="DROP YOUR PROFILE PICTURE HERE"
                        />  

                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="Your Name *"
                            value={this.state.user.name} 
                            onChange={(e)=>{this.updateFormInputElegant('name', e.target.value)}}
                        />
                        
                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="Your Surnames *"
                            value={this.state.user.surnames} 
                            onChange={(e)=>{this.updateFormInputElegant('surnames', e.target.value)}}
                        />

                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="Your Passport *"
                            value={this.state.user.passport} 
                            onChange={(e)=>{this.updateFormInputElegant('passport', e.target.value)}}
                        />

                        <CustomDropZone 
                            onFileUpload={(fileUrl)=>{this.updateFormInputElegant('passportPic', fileUrl)}}
                            acceptedFiles="image/jpeg, image/png"
                            uploadFolder="userProfile"
                            name="Passport Scan"
                            text="DROP YOUR PASSPORT SCAN HERE"
                        />  

                        <input 
                            type="text" 
                            name="field2" 
                            placeholder="Your Email *"
                            value={this.state.user.email} 
                            onChange={(e)=>{this.updateFormInputElegant('email', e.target.value)}}
                        />

                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="Your Phone *"
                            value={this.state.user.tel} 
                            onChange={(e)=>{this.updateFormInputElegant('tel', e.target.value)}}
                        />

                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="Your Mobile *"
                            value={this.state.user.mobile} 
                            onChange={(e)=>{this.updateFormInputElegant('mobile', e.target.value)}}
                        />

                    </fieldset>

                    <fieldset>
                        <legend><span className="number">2</span>Home Address</legend>
                        
                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="Street *"
                            value={this.state.user.street} 
                            onChange={(e)=>{this.updateFormInputElegant('street', e.target.value)}}
                        />

                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="House Nr *"
                            value={this.state.user.houseNr} 
                            onChange={(e)=>{this.updateFormInputElegant('houseNr', e.target.value)}}
                        />

                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="Floor *"
                            value={this.state.user.floorNr} 
                            onChange={(e)=>{this.updateFormInputElegant('floorNr', e.target.value)}}
                        />
                        
                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="Door Nr *"
                            value={this.state.user.doorNr} 
                            onChange={(e)=>{this.updateFormInputElegant('doorNr', e.target.value)}}
                        />

                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="Zip Code *"
                            value={this.state.user.zipCode} 
                            onChange={(e)=>{this.updateFormInputElegant('zipCode', e.target.value)}}
                        />

                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="City *"
                            value={this.state.user.city} 
                            onChange={(e)=>{this.updateFormInputElegant('city', e.target.value)}}
                        />

                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="Country *"
                            value={this.state.user.country} 
                            onChange={(e)=>{this.updateFormInputElegant('country', e.target.value)}}
                        />
                    </fieldset>

                    <fieldset>
                        <legend><span className="number">3</span> Booking Info</legend>
                        
                        <input 
                            type="date" 
                            name="field1" 
                            placeholder="Check-In Date *"
                            value={this.state.user.checkInDate} 
                            onChange={(e)=>{this.updateFormInputElegant('checkInDate', e.target.value)}}
                        />

                        <input 
                            type="date" 
                            name="field1" 
                            placeholder="Check-Out Date *"
                            value={this.state.user.checkOutDate} 
                            onChange={(e)=>{this.updateFormInputElegant('checkOutDate', e.target.value)}}
                        />

                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="Studies / Internship in Barcelona *"
                            value={this.state.user.studies} 
                            onChange={(e)=>{this.updateFormInputElegant('studies', e.target.value)}}
                        />

                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="School / Company in Barcelona *"
                            value={this.state.user.school} 
                            onChange={(e)=>{this.updateFormInputElegant('school', e.target.value)}}
                        />

                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="Room Nr *"
                            value={this.state.user.roomNr} 
                            onChange={(e)=>{this.updateFormInputElegant('roomNr', e.target.value)}}
                        />
                    
                        </fieldset>

                        <button type="submit">Save</button>
                </form>
            </div>
        </div>

   )

  }
}