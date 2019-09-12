import React from 'react';

class MessageForm extends React.Component{
state = {
  message: ""
}

handleMessageChange = (e) => {
  this.setState({ message: e.target.value })
}

handleMessageSubmit = (e) => {
  e.preventDefault()
  e.target.reset()
  console.log("localStorage.id: ", localStorage.id);
  console.log("this.state.message: ", this.state.message);
  console.log("this.props.chatID: ", this.props.chatid);

  fetch('https://lets-chat-flatiron.herokuapp.com/chat_boxes', {
    method: "POST",
    headers: {
      'Content-Type': "application/json",
      'Accept': "application/json"
    },
    body: JSON.stringify({
      user_id: localStorage.id,
      message: this.state.message,
      chat_id: this.props.chatid
    })
  })
}

render(){
    return (
      <div className="message-form-div">
        <form onSubmit={this.handleMessageSubmit}>
          <input onChange={this.handleMessageChange} type="text" name="new message"/>
          <span><input type="submit" value="Send" className="submit"/></span>
        </form>
      </div>
    )
  }


}

export default MessageForm;
