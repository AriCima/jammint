import React, { Component } from 'react';
import CustomDropZone from '../../../CustomDropZone';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import DataService from '../../../../services/DataService';

import './index.css';

export default class ContractInfo extends Component {
  constructor(props){
    super(props);

    this.state = {
      userId       : this.props.user.id,
      userPicture  : '',
      name         : '',
      surnames     : '',
      passport     : '',
      passportPic  : '',
      street       : '',
      houseNr      : '',
      floorNr      : '',
      doorNr       : '',
      zipCode      : '',
      city         : '',
      country      : '',
      tel          : '',
      mobile       : '',
      email        : '',
      checkInDate  : '',
      checkOutDate : '',
      studies      : '',
      school       : '',
      roomNr       : '',
      datesError   : false,
      contentError : false,
    }

    this.updateFormInputElegant = this.updateFormInputElegant.bind(this);
    this.saveUserDatainFireStore =  this.saveUserDatainFireStore.bind(this);

    console.log('Props del Contract Info: ', props)
  }

 
  componentDidMount(){
      // TRAERME LAS VARIABLES DEL getUserContactInfo para que el formulario quede relleno
    DataService.getUserContactInfo(this.props.user.id)

  }



  updateFormInputElegant(field, value){
    this.setState({[field]: value})
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

        let userToSave = Object.assign({},this.state)
        delete userToSave.userId,

        delete userToSave.roomNr,

        console.log('Room Number: ', this.state.roomNr)

      DataService.saveUserContactInfo(this.state.userId, userToSave)
    //}
  }

  render(){
    
    return (

        <div className="form-background">

            <div class="form-style">
                <form onSubmit={this.saveUserDatainFireStore} >
                    <fieldset>
                        <legend><span className="number">1</span> Personal Info</legend>
                        
                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="Your Name *"
                            value={this.state.names} 
                            onChange={(e)=>{this.updateFormInputElegant('names', e.target.value)}}

                        />
                        
                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="Your Surnames *"
                            value={this.state.surnames} 
                            onChange={(e)=>{this.updateFormInputElegant('surnames', e.target.value)}}
                        />

                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="Your Passport *"
                            value={this.state.passport} 
                            onChange={(e)=>{this.updateFormInputElegant('passport', e.target.value)}}
                        />

                        <CustomDropZone 
                            onFileUpload={(fileUrl)=>{this.updateFormInputElegant('passportPic', fileUrl)}}
                            acceptedFiles="image/jpeg, image/png"
                            uploadFolder="userProfile"
                            name="Passport Scan"
                        />  

                        <input 
                            type="text" 
                            name="field2" 
                            placeholder="Your Email *"
                            value={this.state.email} 
                            onChange={(e)=>{this.updateFormInputElegant('email', e.target.value)}}
                        />

                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="Your Phone *"
                            value={this.state.tel} 
                            onChange={(e)=>{this.updateFormInputElegant('tel', e.target.value)}}
                        />

                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="Your Mobile *"
                            value={this.state.mobile} 
                            onChange={(e)=>{this.updateFormInputElegant('mobile', e.target.value)}}
                        />

                    </fieldset>

                    <fieldset>
                        <legend><span className="number">2</span>Home Address</legend>
                        
                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="Street *"
                            value={this.state.street} 
                            onChange={(e)=>{this.updateFormInputElegant('street', e.target.value)}}
                        />

                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="House Nr *"
                            value={this.state.houseNr} 
                            onChange={(e)=>{this.updateFormInputElegant('houseNr', e.target.value)}}
                        />

                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="Floor *"
                            value={this.state.floorNr} 
                            onChange={(e)=>{this.updateFormInputElegant('floorNr', e.target.value)}}
                        />
                        
                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="Door Nr *"
                            value={this.state.doorNr} 
                            onChange={(e)=>{this.updateFormInputElegant('doorNr', e.target.value)}}
                        />

                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="Zip Code *"
                            value={this.state.zipCode} 
                            onChange={(e)=>{this.updateFormInputElegant('zipCode', e.target.value)}}
                        />

                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="City *"
                            value={this.state.city} 
                            onChange={(e)=>{this.updateFormInputElegant('city', e.target.value)}}
                        />

                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="Country *"
                            value={this.state.country} 
                            onChange={(e)=>{this.updateFormInputElegant('country', e.target.value)}}
                        />
                    </fieldset>

                    <fieldset>
                        <legend><span className="number">3</span> Booking Info</legend>
                        
                        <input 
                            type="date" 
                            name="field1" 
                            placeholder="Check-In Date *"
                            value={this.state.checkInDate} 
                            onChange={(e)=>{this.updateFormInputElegant('checkInDate', e.target.value)}}
                        />

                        <input 
                            type="date" 
                            name="field1" 
                            placeholder="Check-Out Date *"
                            value={this.state.checkOutDate} 
                            onChange={(e)=>{this.updateFormInputElegant('checkOutDate', e.target.value)}}
                        />

                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="Studies / Internship in Barcelona *"
                            value={this.state.studies} 
                            onChange={(e)=>{this.updateFormInputElegant('studies', e.target.value)}}
                        />

                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="School / Company in Barcelona *"
                            value={this.state.school} 
                            onChange={(e)=>{this.updateFormInputElegant('school', e.target.value)}}
                        />

                        <input 
                            type="text" 
                            name="field1" 
                            placeholder="Room Nr *"
                            value={this.state.roomNr} 
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