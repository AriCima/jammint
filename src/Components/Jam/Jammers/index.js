import React, { Component } from 'react';
import DataService from "../../../services/DataService";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './index.css';

export default class Jammers extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        jammers: [],
    }

    console.log("Props del jammers", this.props)

  }

  componentDidMount(){
  DataService.getJammers(this.props.jamId).then(
      (jamsData)=>{
       console.log("Jams Data: ", jamsData[0])
       let jammersArr = jamsData.map((j) =>{
        return Object.assign({id: j.id}, j.data())
       }
        
    )
       this.setState({ jammers: jammersArr})

    }
  )
}


  _renderJammers(){
      
    return this.state.jammers.map((user,i) => {
        return (

        <div className="room-cover" key={i}>

            <div className="user-pic">
                <Link to={`/user/${user.id}`} > 
                    <img src={user.image_url}/>
                </Link>
            </div>

            <div className="user-info">

                <div className="user-info-name">

                    <p>{user.roomNr}</p>

                    <Link to={`/user/${user.id}`}> 
                        <h4>{user.name}</h4>
                    </Link>

                </div>

                <div className="user-info-studies">
                
                    <h4>{user.country}</h4>
                    <p>{user.studies}</p>
                
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

                {this._renderJammers()}

            </div>

            
        )
        

    };
  
}


