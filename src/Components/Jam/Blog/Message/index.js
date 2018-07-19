import React, { Component } from 'react';
//import './index.css';

class Message extends Component {
  

  
  componentWillUnmount(){
    console.log('TODO componentWillUnmount');
  }

  render() {
    const { messageText, messageDate, userID } = this.props;

    return (
      <li className="Message">
        <div className="messageInfo">
            <p>{userID} on {messageDate}</p> 
        </div>
        <p>{messageText}</p>       
      </li>
    );
  }
}

export default Message;
