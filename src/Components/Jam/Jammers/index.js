import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './index.css';

export default class Jammers extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        room : [],
    }
  }

    render() {
        
        return (
            this.state.roomCover.map((userId,i) => {
            

                <div className="room-cover">

                    <div className="room-cover-left">
                        <div className="user-pic">
                        
                        </div>
                    </div>

                    <div className="room-cover-right">

                        <div className="userName">
                            <p>Room {this.props.room} | </p> <h4>{this.props.name}</h4>
                        </div>

                    </div>

                </div>
            
            })
        )

    };
  
}


