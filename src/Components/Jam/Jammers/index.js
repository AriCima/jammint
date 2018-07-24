import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './index.css';

export default class Jammers extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        users : this.props,
    }

    console.log("State en Jammers", this.state.users)

  }

  _renderJammers(){
      
    return this.state.users.map((user,i) => {
        return (
  
          <div className="room-cover" key={i}>
  
            <div className="user-pic">
                <Link to={`/user/${user.id}`} > 
                    <img src={user.image_url}/>
                </Link>
            </div>

            <div className="user-info">

                <div className="user-info-name">

                    <p>{this.props.roomNr}</p>

                    <Link to={`/user/${user.id}`}> 
                        <h4>{this.props.user.name}</h4>
                    </Link>

                </div>

                <div className="user-info-studies">
                
                    <h4>{this.props.user.country}</h4>
                    <p>{this.props.user.studies}</p>
                
                </div>



  
            </div>
  
            
  
          </div>
        )
    })
    } 

    render() {
        console.log("render");
        console.log('props de Jammers', this.props)
        
        return (
            
            <div className="jammers">

                {this._renderJammers}

            </div>

            
        )
        

    };
  
}


