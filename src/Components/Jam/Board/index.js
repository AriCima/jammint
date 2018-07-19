import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Blog from "../Blog";

//import './index.css';

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
      <div>

        <div className="form">
          <form onSubmit={this.onSend}>
            <p>THIS IS A BLOG</p>

            <Blog messageId={this.state.messageId} userId={this.state.userId} date={this.state.messageDate} messageText={this.state.messageText}/>
            
            <input type="textarea" 
              placeholder="Message"
              value={this.state.messageText}
              onChange={this.onChangeMessage}/>

            <button onClick={this.newMessage}>New Message</button>
            
          </form>
        </div>

        <div className="admin-caht">
          <p>THIS IS THE ADMIN CHAT</p>
          <button>send</button>
        </div>
        

      </div>
    );
  }
  }




export default Board;





