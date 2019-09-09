import React from 'react';

class User extends React.Component{

  sendUserInfo = () => {
    this.props.chatWithThisUser(this.props.user)
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
