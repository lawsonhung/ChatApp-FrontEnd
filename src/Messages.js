import React from 'react';
import MessageForm from './MessageForm'

class Messages extends React.Component{

  render(){

    return (
      <div>
        <p>Start talking to {this.props.chatPerson.name}!</p>
        <MessageForm chatid={this.props.chatid} />
      </div>
    )
  }


}

export default Messages;
