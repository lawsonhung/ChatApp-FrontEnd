import React, { Component } from 'react';

class LoginPage extends Component {
  state = {
    username: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleLoginSubmit = (e) => {
    e.preventDefault()

    fetch('https://lets-chat-flatiron.herokuapp.com/users')
    .then(res=>res.json())
    .then(users=> {
      let currentUser = users.filter(user => user.name === this.state.username)
      if (currentUser.length === 0){
        console.log("it doesnt exit");
      }
      else{
        this.props.history.push('/users')
        console.log(currentUser[0].name)
        localStorage.name = currentUser[0].name
        localStorage.id = currentUser[0].id
        fetch(`https://lets-chat-flatiron.herokuapp.com/users/${localStorage.id}`,{
          method: 'PATCH',
          headers: {
            'Content-Type': "application/json",
            'Accept': 'application/json'
          },
            body:JSON.stringify({
            online_status: true
            })
          })
      }
    })

  }



  render() {
    return (
      <div>
        <h1>Log in please!</h1>
        <form onSubmit={this.handleLoginSubmit}>
          <input onChange={this.handleChange} value={this.state.username} type="text" name="username"/>
          <input type="submit" value="Log in"/>
        </form>
      </div>
    );
  }
}

export default LoginPage;
