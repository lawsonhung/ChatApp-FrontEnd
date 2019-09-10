import React from 'react';
import Chatroom from './Chatroom'

class User extends React.Component{

  sendUserInfo = () => {
    // console.log("User.js: Now chatting with: ", this.props.user);
    this.props.chatWithThisUser(this.props.user)
    // return(
    //   <div>
    //     <Chatroom chatWithUser={this.props.user} />
    //   </div>
    // )
  }


render(){
  const {name , online_status} = this.props.user
    return (
      <div onClick={this.sendUserInfo}>
        <p>Name: {name}</p>
        <p>Online?: {online_status ? "online" : "offline"}</p>
      </div>
    )
  }


}

export default User;
