import React from 'react';

class Chatroom extends React.Component{



render(){
    console.log("Logged in as: ", localStorage.name)
    // console.log("Chatting with: ", this.props.chatWithUser)

    return (
      <div>
        <p>Chatroom created!</p>
        <p>Logged in as: {localStorage.name}</p>
        <p>Chatting with: {this.props.chatWithUser}</p>
      </div>
    )
  }


}

export default Chatroom;
