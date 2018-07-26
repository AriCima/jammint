import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
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
            <Jammers user={this.props.user} jamId={this.props.jamId}/> 
          </div>
          
        </div>



      </div>
    );
  }
}






