import React from 'react';
import User from './user'

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
      <div className="allUsers">
<<<<<<< HEAD
        <div className="user" >Logged in as: {localStorage.name}
          <button onClick={this.logout} className="logoutButton">Log Out</button>
        </div>
          {this.users()}
=======
      <button onClick={this.logout}>Log Out</button>
      <div className="user" >Logged in as: {localStorage.name}</div>
        {this.users()}
>>>>>>> dd2aac82e6702e94adbe97e3987939af715bcd6d
      </div>
    )
  }


}

export default Users;
