import React from 'react';

class MessageForm extends React.Component{
state = {
  message: ""
}

handleMessageChange = (e) => {
  this.setState({ message: e.target.value })
}

handleMessageSubmit = () => {
  fetch('http://localhost:3000/chat_boxes',
  method: "POST",
  headers: {
    'Content-Type': "application/json",
    'Accept': "application/json"
  },
  body: JSON.stringify({
    user_id: localStorage.id,
    message: this.state.message,
    chat_id: 
  })
  )
}

render(){
    return (
      <div>
        <form onSubmit={this.handleMessageSubmit}>
          <input onChange={this.handleMessageChange} value={} type="text" name="new message"/>
          <input type="submit" value="Send"/>
        </form>
      </div>
    )
  }


}

export default MessageForm;
