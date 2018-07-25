import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './index.css';

export default class PrivateArea extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }

    console.log('Priv Area props: ', this.props)
  }

 

  render() {
    
    return (
      
      <div className="collapsible-menu">

        <input type="checkbox" id="menu"/>
        <label for="menu"><span>Click here</span> to acces you private info</label>

        <div className="menu-content">

            <div className="gral-info-title">
              <h4>General Info</h4>
            </div>

            <p>Check-In: ""</p>
            <p>Check-Out: ""</p>
            <p>Room Nr: ""</p>
            <p>Rent: ""</p>
            <p>Deposit: ""</p>

            <div className="gral-info-title">
              <h4>Additional charges</h4>
            </div>

              <ul>
                <li>Cleaning Fee (as per contract): 20 €</li>
              </ul>
           

            <div className="gral-info-title">
              <h4>Your contract</h4>
            </div>

            <div className="contract-info-pic">
              <img src={require('../../../assets/icons/contract.png')}></img>
            </div>

          </div>
        
      </div>
    );
  }
}







