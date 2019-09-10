import React from 'react';
import MessageForm from './MessageForm'
class Messages extends React.Component{


render(){
    return (
      <div>
        {this.props.chatPerson.name}
        <MessageForm chatid = {this.props.chatid}/>
      </div>
    )
  }


}

export default Messages;
