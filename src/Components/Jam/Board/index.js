import React, { Component } from 'react';
import './index.css';

export default class Board extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      message: [],

    }
  }


  render() {
    console.log("render");
    console.log('props de Board', this.props)
    return (
      

      <div className="board">

        <div className="board-title">
          <h4>PUBLIC BOARD</h4>
        </div>

        <div className="board-content">


        </div>
      
      
        <div className="send-area">

          <input type="textarea" 
            placeholder="Message"
            value={this.state.messageText}
            onChange={this.onChangeMessage}
          />

          <button onClick={this.newMessage}>Send</button>
        </div>
      </div>
      

    );
  }
}






