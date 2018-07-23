import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './index.css';

export default class PrivateArea extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

 

  render() {
    
    return (
      
      <div className="private-area">

        <div className="section">

          <div className="section-title">
            <h4>Basic Info</h4>
          </div>
          <p>{this.props.name}</p> 
          <p>Check-In: {this.props.checkInDate}</p>
          <p>Check-Out: {this.props.checkOutDate}</p>
          <p>Room Nr: {this.props.roomNr}</p>
          <p>Rent: {this.props.rent}</p>
          <p>Deposit: {this.props.deposit}</p>
        </div>

        <div className="section">

          <div className="section-title">
            <h4>Additional charges</h4>
          </div>
          
          <ul>
            <li>Cleaning Fee (as per contract): 20 €</li>
          </ul>

        </div>

        <div className="section">

          <div className="section-title">
            <h4>Your contract</h4>
          </div>

          <div className="contract-info-pic">
            <Link to="user/contract-info"><img src={require('../../../icons/contract.png')}> </img></Link>
          </div>

          <div className="contract-info-view">
            <Link to="user/contract"><p>View you contract</p></Link>
          </div>

        </div>

      </div>
    );
  }
}







