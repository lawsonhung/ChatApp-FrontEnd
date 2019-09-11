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

render(){
    return (
      <div className="allUsers">
      <div className="user" >Logged in as: {localStorage.name}</div>
        {this.users()}
      </div>
    )
  }


}

export default Users;
