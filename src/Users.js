import React from 'react';
import User from './user'

class Users extends React.Component{

users = () => {
    return this.props.users.map(user =>
     <User
     key={user.id}
     user={user}
     chatWithThisUser={this.props.chatWithThisUser}
     />
   )
}

render(){
    return (
      <div>
        {this.users()}
      </div>
    )
  }


}

export default Users;
