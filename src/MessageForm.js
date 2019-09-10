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

  console.log("localStorage.id: ", localStorage.id);
  console.log("this.state.message: ", this.state.message);
  console.log("this.props.chatID: ", this.props.chatid);

  fetch('http://localhost:3000/chat_boxes', {
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
      <div>
        <form onSubmit={this.handleMessageSubmit}>
          <input onChange={this.handleMessageChange} type="text" name="new message"/>
          <input type="submit" value="Send"/>
        </form>
      </div>
    )
  }


}

export default MessageForm;
