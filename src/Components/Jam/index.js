import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Board from "./Board";
import Jammers from './Jammers';

import './index.css';

class Jam extends React.Component {
  constructor(props){
    super(props);


  }

  

  render() {
    
    return (
      
      <div className="jam">

        <div className="jam-board">
          <Board user={this.props.user}/>
        </div>
        
        <div className="jam-jammers">
          <Jammers user={this.props.user}/> 
        </div>

      </div>
    );
  }
}




export default Jam;





