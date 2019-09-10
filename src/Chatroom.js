import React from 'react';
import User from './user'

class Chatroom extends React.Component{



render(){
    return (
      <div>
      <p>Logged in as: {localStorage.name}</p>
      </div>
    )
  }


}

export default Chatroom;
