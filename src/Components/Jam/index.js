import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Board from "./Board";
import Jammers from './Jammers';
import PrivateArea from './PrivateArea';

import './index.css';

export default class Jam extends React.Component {
  constructor(props){
    super(props);


  }

  

  render() {
    console.log('props de Jam: ', this.props)
    return (
      
      <div className="jam">

        <div className="jam-board">
          <Board user={this.props.user}/>
        </div>

        <div className="jam-right">

          <div className="jam-privateArea">
            <PrivateArea user={this.props.user}/> 
          </div>

          <div className="jam-jammers">
            <Jammers user={this.props.user}/> 
          </div>
          
        </div>



      </div>
    );
  }
}






