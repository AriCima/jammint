import React, { Component } from 'react';
import CustomDropZone from '../../../CustomDropZone';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import DataService from '../../../../services/DataService';

import './index.css';

export default class ContractInfo extends Component {
  constructor(props){
    super(props);

    this.state = {
      usderId      : this.props.userId,
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
      jam          : this.props.jamCode,
      datesError   : false,
      contentError : false,
    }

    this.updateFormInputElegant = this.updateFormInputElegant.bind(this);
    this.saveUserDatainFireStore =  this.saveUserDatainFireStore.bind(this);



  }


  updateFormInputElegant(field, value){
    this.setState({[field]: value})
  };
  


  saveUserDatainFireStore(e){
    e.preventDefault();
    let error = false;

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

    if(!error){
     const { userId, userPicture, name, surnames, passport, passportPic, street, houseNr,
        floorNr, doorNr, zipCode, city, country, tel, mobile, email, checkInDate ,checkOutDate,
        studies, school, roomNr, jam
        } = this.state;

      DataService.saveUserContactInfo(userId, userPicture, name, surnames, passport, passportPic, street, houseNr,
        floorNr, doorNr, zipCode, city, country, tel, mobile, email, checkInDate ,checkOutDate,
        studies, school, roomNr, jam)

      .then((result)=>{   // si firebase devuelve un OK, se ejecuta resolve del Promise (función result)
        console.log('Los ID y nombre del usuario son: ', result.userId, result.name);


      },(error)=>{
        this.setState({registerError: error});
      });
    }
  }

  render(){
    
    return (

      <div class="form-style">
        <form>
            <fieldset>
                <legend><span class="number">1</span> Personal Info</legend>
                
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
                    onChange={(e)=>{this.updateFormInputElegant('htel', e.target.value)}}
                />

                <input 
                    type="text" 
                    name="field1" 
                    placeholder="Your Mobile *"
                    value={this.state.mobile} 
                    onChange={(e)=>{this.updateFormInputElegant('mbile', e.target.value)}}
                />

            </fieldset>

            <fieldset>
                <legend><span class="number">2</span>Home Address</legend>
                
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
                <legend><span class="number">3</span> Booking Info</legend>
                
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

                <button type="submit"><Link to='/jamrequest/contracts/es/:studentInfo'>Save</Link></button>
        </form>
    </div>

   )

  }
}


      // <div className="jam-request-form">

      //   <form onSubmit={this.saveUserDatainFireStore}>

      //     <div className="form-item">

      //       <div className="jam-info">

      //         <div className="jam-img">
      //           <img src={require('../../images/logoAmple.jpg')}/>
      //         </div>

      //         <div className="invite-text">
      //           <h5>You've been invited to <span>jam</span> to <span>Ample 53 </span> "Student's Home in Barcelona"</h5><br/>
      //           <p>If you want to jam, please fill the following form</p>
      //         </div>

      //       </div>
      //     </div>

      //     <div className="form-item">

      //       <div className="form-item-title">
      //         <h2>Personal Info</h2>
      //       </div>

      //       <CustomDropZone 
      //         onFileUpload={(fileUrl)=>{this.updateFormInputElegant('userPicture', fileUrl)}}
      //         acceptedFiles="image/jpeg, image/png"
      //         uploadFolder="userProfile"
      //       />  

      //       <div className="form-item-info">
      //         <div>
      //           <p>Name:</p>
      //         </div>
      //         <input 
      //           type="text" 
      //           size="50"
      //           value={this.state.names} 
      //           onChange={(e)=>{this.updateFormInputElegant('names', e.target.value)}}

      //         />
      //       </div>
      
      //       <div className="form-item-info">
      //         <div>
      //           <p>Surnames:</p>
      //         </div>
      //         <input 
      //           type="text" 
      //           size="50"
      //           value={this.state.surnames} 
      //           onChange={(e)=>{this.updateFormInputElegant('surnames', e.target.value)}}
      //         />
      //       </div>

      //       <div className="form-item-info">
      //         <p>Passport:</p>
      //         <input 
      //           type="text" 
      //           value={this.state.passport} 
      //           onChange={(e)=>{this.updateFormInputElegant('passport', e.target.value)}}
      //         />
      //       </div>

      //       <CustomDropZone 
      //         onFileUpload={(fileUrl)=>{this.updateFormInputElegant('passportPic', fileUrl)}}
      //         acceptedFiles="image/jpeg, image/png"
      //         uploadFolder="userProfile"
      //       />  

      //       <div className="form-item-info">
      //         <p>Email:</p>
      //         <input 
      //           type="email" 
      //           size="50"
      //           value={this.state.email} 
      //           onChange={(e)=>{this.updateFormInputElegant('email', e.target.value)}}
      //         />
      //       </div>

      //       <div className="form-item-info">
      //         <p>Phone:</p>
      //         <input 
      //           type="text" 
      //           size="25"
      //           value={this.state.tel} 
      //           onChange={(e)=>{this.updateFormInputElegant('htel', e.target.value)}}
      //         />
      //       </div>

          
      //       <div className="form-item-info">
      //         <p>Mobile:</p>
      //         <input 
      //           type="text" 
      //           size="25"
      //           value={this.state.mobile} 
      //           onChange={(e)=>{this.updateFormInputElegant('mbile', e.target.value)}}
      //         />
      //       </div>
      //     </div>

      //     <div className="form-item">

      //       <div className="form-item-title">
      //         <h2>Home Address</h2>
      //       </div>

      //       <div className="form-item-info">
      //         <p>Street:</p>
      //         <input 
      //           type="text" 
      //           size="50"
      //           value={this.state.street} 
      //           onChange={(e)=>{this.updateFormInputElegant('street', e.target.value)}}
      //         />
      //       </div>

      //       <div className="form-item-info">
      //         <p>House Nr:</p>
      //         <input 
      //           type="text" 
      //           size="6"
      //           value={this.state.houseNr} 
      //           onChange={(e)=>{this.updateFormInputElegant('houseNr', e.target.value)}}
      //         />
      //       </div>


      //       <div className="form-item-info">
      //         <p>Floor:</p>
      //         <input 
      //           type="text" 
      //           size="3"
      //           value={this.state.floorNr} 
      //           onChange={(e)=>{this.updateFormInputElegant('floorNr', e.target.value)}}
      //         />
      //       </div>

      //       <div className="form-item-info">
      //         <p>Door Nr:</p>
      //         <input 
      //           type="text" 
      //           size="5"
      //           value={this.state.doorNr} 
      //           onChange={(e)=>{this.updateFormInputElegant('doorNr', e.target.value)}}
      //         />
      //       </div>

      //       <div className="form-item-info">
      //         <p>Zip Code:</p>
      //         <input 
      //           type="text" 
      //           size="15"
      //           value={this.state.zipCode} 
      //           onChange={(e)=>{this.updateFormInputElegant('zipCode', e.target.value)}}
      //         />
      //       </div>

      //       <div className="form-item-info">
      //         <p>City:</p>
      //         <input 
      //           type="text" 
      //           size="50"
      //           value={this.state.city} 
      //           onChange={(e)=>{this.updateFormInputElegant('city', e.target.value)}}
      //         />
      //       </div>

          
      //       <div className="form-item-info">
      //         <p>Country:</p>
      //         <input 
      //           type="text" 
      //           size="50"
      //           value={this.state.country} 
      //           onChange={(e)=>{this.updateFormInputElegant('country', e.target.value)}}
      //         />
      //       </div>

      //     </div>

      //     <div className="form-item">

      //       <div className="form-item-title">
      //         <h2>Booking Info</h2>
      //       </div>

      //       <div className="form-item-info">
      //         <p>Check-In Date:</p>
      //         <input 
      //           type="date" 
      //           value={this.state.checkInDate} 
      //           onChange={(e)=>{this.updateFormInputElegant('checkInDate', e.target.value)}}
      //         />
      //       </div>

      //       <div className="form-item-info">
      //         <p>Check-Out Date:</p>
      //         <input 
      //           type="date" 
      //           value={this.state.checkOutDate} 
      //           onChange={(e)=>{this.updateFormInputElegant('checkOutDate', e.target.value)}}
      //         />
      //       </div>

      //       <div className="form-item-info">
      //         <p>Studies:</p>
      //         <input 
      //           type="textarea" 
      //           value={this.state.studies} 
      //           onChange={(e)=>{this.updateFormInputElegant('studies', e.target.value)}}
      //         />
      //       </div>

      //       <div className="form-item-info">
      //         <p>School:</p>
      //         <input 
      //           type="text" 
      //           value={this.state.school} 
      //           onChange={(e)=>{this.updateFormInputElegant('school', e.target.value)}}
      //         />
      //       </div>

      //       <CustomDropZone 
      //         onFileUpload={(fileUrl)=>{this.updateFormInputElegant('schoolCert', fileUrl)}}
      //         acceptedFiles="image/jpeg, image/png"
      //         uploadFolder="userProfile"
      //       />  

      //       <div className="form-item-info">
      //         <p>Room Nr:</p>
      //         <input 
      //           type="text" 
      //           size="2"
      //           value={this.state.roomNr} 
      //           onChange={(e)=>{this.updateFormInputElegant('roomNr', e.target.value)}}
      //         />
      //       </div>

      //     </div>

      //   <div className="submit">
      //     <button type="submit"><Link to='/jamrequest/contracts/es/:studentInfo'>JAM !</Link></button>
      //   </div>

      //   </form>
      // </div>
    // );

