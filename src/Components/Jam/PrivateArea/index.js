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
        <label for="menu"><span>PRIVATE ZONE</span></label>
        
        <div className="menu-content">

            <div className="gral-info-title">
              <h4>General Info</h4>
            </div>

            <div className="info-block">
              <p>Check-In: 24/Jul/2018</p>
              <p>Check-Out: 30/12/2018</p>
            </div>

            <div className="info-block">
              <p>Room Nr: 8</p>
              <p>Rent: 390 €/mo</p>
              <p>Deposit: 780 €</p>
            </div>

            <div className="gral-info-title">
              <h4>Additional charges</h4>
            </div>

              <ul>
                <li>Cleaning Fee (as per contract): 20 €</li>
              </ul>
           

            <div className="gral-info-title">
              <h4>Access your contract</h4>
            </div>

            <div className="contract-info-pic">
              <Link to="/contract"><img src={require('../../../assets/icons/contract.png')}></img></Link>
            </div>

          </div>
        
      </div>
    );
  }
}







