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
            <p>Check-In Date:  </p>
              <div className="info-box">
                <p>25/07/2018</p>
              </div>
              <p>Check-Out:  </p>
              <div className="info-box">
                <p>25/07/2018</p>
              </div>
            </div>

            <div className="info-block">
              <p>Room Nr:</p>
              <div className="info-box">
                <p>06</p>
              </div>

              <p>Rent:</p>
              <div className="info-box">
                <p>390 €/mo</p>
              </div>
              <p>Deposit:</p>
              <div className="info-box">
                <p>780 €</p>
              </div>
            </div>

            <div className="gral-info-title">
              <h4>Additional charges</h4>
            </div>
            <div className="info-block">
              <ul>
                <li>Cleaning Fee (as per contract): 20 €</li>
              </ul>
            </div>

            <div className="gral-info-title">
              <h4>Access your contract</h4>
            </div>

            <div className="info-block ">

              <div className="contract-info-pic">
                <Link to="/contract"><img src={require('../../../assets/icons/contract.png')}></img></Link>
              </div>

              <div className="contract-form-link">
                <Link to="/contract-info"><p>Contract Info</p></Link>
              </div>

            </div>

          </div>
        
      </div>
    );
  }
}







