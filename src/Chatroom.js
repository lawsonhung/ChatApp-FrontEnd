import React from 'react';

class Chatroom extends React.Component{



render(){
    console.log("Chatroom has been created");
    console.log("Logged in as: ", localStorage.name)
    // console.log("Chatting with: ", this.props.chatWithUser)

    return (
      <div>
        <p>Logged in as: {localStorage.name}</p>
        <p>Chatting with: {this.props.chatWithUser}</p>
      </div>
    )
  }


}

export default Chatroom;
