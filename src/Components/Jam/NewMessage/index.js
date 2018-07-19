import React, { Component } from 'react';
import './index.css';

class NewMessagee extends Component {
  constructor(props){
    super(props);

    this.state = {
      messageText: '',
      messageDate: new Date,
      messageComplete: false,
    }

    this.changeInputValue = this.changeInputValue.bind(this);
    this.addMessage = this.addMessage.bind(this);
  }

  changeInputValue(e){
    this.setState({messageText: e.target.value})
  }

  addMessage(e){
    e.preventDefault();
    this.props.onaddMessage(this.state.messageText);
  }

  render() {
    return (
      <div className="Form">
        <form onSubmit={this.addMessage}>
          <input 
            onChange={this.changeInputValue}
            value={this.state.messageText}
            />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default NewMessagee;
