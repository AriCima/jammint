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

          <form onSubmit={this.onSend}>
            <h1>THIS IS A BLOG</h1>
            <ul>
              <li>Message</li>
              <li>Message</li>
              <li>Message</li>
              <li>Message</li>
              <li>Message</li>
              <li>Message</li>
              <li>Message</li>
              <li>Message</li>
            </ul>
            

            {/* <Blog messageId={this.state.messageId} userId={this.state.userId} date={this.state.messageDate} messageText={this.state.messageText}/> */}
            
            <input type="textarea" 
              placeholder="Message"
              value={this.state.messageText}
              onChange={this.onChangeMessage}/>

            <button onClick={this.newMessage}>New Message</button>
            
          </form>
        </div>


        <div className="board-right-side">
          <div className="private-area">
          
            <h1>PRIVATE AREA</h1>
          
          </div>


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





