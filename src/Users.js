import React from 'react';
import User from './User'

class Users extends React.Component{

users = () => {
    return this.props.users.map(user =>
     <User
       key={user.id}
       user={user}
       chatWithThisUser={this.props.chatWithThisUser}
       chatid={this.props.chatid}
     />
   )
}
logout = () => {
  fetch(`https://lets-chat-flatiron.herokuapp.com/users/${localStorage.id}`,{
    method: 'PATCH',
    headers: {
      'Content-Type': "application/json",
      'Accept': 'application/json'
    },
    body:JSON.stringify({
      online_status: false
    })
  })
    localStorage.name = null
    localStorage.id = null
  this.props.history.push('/')
}

render(){
    return (
      <div>
      <button onClick={this.logout}>Log Out</button>
      <p>Logged in as: {localStorage.name}</p>
        {this.users()}
      </div>
    )
  }


}

export default Users;
