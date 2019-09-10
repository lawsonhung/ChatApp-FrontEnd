import React from 'react';

class Chatroom extends React.Component{



render(){

    return (
      <div>
        <p>Chatroom created!</p>
        <p>Logged in as: {localStorage.name}</p>
      </div>
    )
  }


}

export default Chatroom;
