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
      this.props.chatid?
      <div className="chatroom" >
        <div className="chattingWithUserMsg">You are chatting with: {this.props.chatPerson.name}</div>
        {this.renderMessage()}
        <MessageForm chatid = {this.props.chatid}/>
      </div>:
      null
    )
  }

}

export default Messages;
