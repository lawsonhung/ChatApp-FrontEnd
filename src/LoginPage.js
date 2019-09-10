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

    fetch('http://localhost:3000/users')
    .then(res=>res.json())
    .then(users=> {
      let currentUser = users.filter(user => user.name === this.state.username)
      if (currentUser.length === 0){
        console.log("it doesnt exit");
      }
      else{
        this.props.history.push('/users')
        localStorage.name = currentUser.name
        localStorage.id = currentUser.id
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
