import React from 'react';
import MessageForm from './MessageForm'
import EachMessage from './EachMessage'

class Messages extends React.Component{

renderMessage = () => {
  return this.props.messages.map(mes => <EachMessage
    message={mes}
    key= {mes.id}
    />)
}

  render(){
    return (
      <div className="chatroom" >
        <div className="chattingWithUserMsg">You are chatting with: {this.props.chatPerson.name}</div>
        {this.renderMessage()}
        <MessageForm chatid = {this.props.chatid}/>
      </div>
    )
  }

}

export default Messages;
