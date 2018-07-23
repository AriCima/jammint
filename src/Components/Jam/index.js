import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Blog from "./Blog";
import Jammers from './Jammers';

import './index.css';

class JAm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      userPicture  : this.props.userPicture,
      name         : this.props.name,
      surnames     : this.props.surnames,
      passport     : this.props.passport,
      passportPic  : this.props.passportPic,
      street       : this.props.street,
      houseNr      : this.props.houseNr,
      floorNr      : this.props.floorNr,
      doorNr       : this.props.doorNr,
      zipCode      : this.props.zipCode,
      city         : this.props.city,
      country      : this.props.country,
      tel          : this.props.tel,
      mobile       : this.props.mobile,
      email        : this.props.email,
      checkInDate  : this.props.checkInDate,
      checkOutDate : this.props.checkOutDate,
      studies      : this.props.studies,     
      school       : this.props.school,      
      roomNr       : this.props.roomNr,
      rent         : this.props.rent,
    }
  }

  

  render() {
    
    return (
      
      <div className="jam">

        <div className="board">
          <Blog props={this.props}/>
        </div>
        
        <div className="jammers">
          <Jammers props={this.props}/> 
        </div>

      </div>
    );
  }
}




export default Jam;





