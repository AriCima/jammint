import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Blog from "../Blog";

import './index.css';

class Board extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      messageId: '',
      userId: '',
      messageDate:'',
      messageText: '',
      messageError: false,
    }
  }

  onChangeMessage(e){
    e.preventDefault()
    let error = false;

    if(this.state.messageText === ''){
      this.setState({messageError: true});
      error = true;
    }

    this.setState({messageText: e.target.value})
  }

  onSend(e){
    e.preventDefault();
    this.props.onSendMessage(this.state.messageText)
 
  }

  render() {
    
    return (
      
      <div className="board">

        <div className="blog">
          <Blog />
        </div>

        <div className="jammers">
          
          <div className="admin-caht">
            <p>THIS IS THE ADMIN CHAT</p>
            <button>send</button>
          </div>
          </div>
        

      </div>
    );
  }
}




export default Board;





