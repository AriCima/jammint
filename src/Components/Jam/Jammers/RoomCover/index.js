import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './index.css';

export default class RoomCover extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

 

  render() {
    
    return (
      


        <div className="room-cover">

            <div className="room-cover-left">
                <div className="user-pic">
                    <Link to='userProfile${this.props.userId}'><img /></Link>
                </div>
            </div>

            <div className="room-cover-right">
                <div className="userName">
                    <p>Room {this.props.room} | </p><Link to='userProfile${this.props.userId}'><h4>{this.props.name}</h4></Link>
                </div>
            </div>

        </div>
    );
  }
}


