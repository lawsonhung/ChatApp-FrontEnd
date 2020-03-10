import React, { Component } from 'react';

class SignUpPage extends Component {
  state = {
    username: '',
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSignupSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.username)

    fetch('https://lets-chat-flatiron.herokuapp.com/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "name": this.state.username,
        "online_status": true
      })
    })
      .then(res => res.json())
      .then(user => {
        console.log(user)
        this.props.history.push('/users')
        localStorage.name = user.name
        localStorage.id = user.id
      })

  }


  render() {
    return (
      <div>
        <h1 className="registration" >Make an account!</h1>
        <h1 className="registration">Just type in your name or make up a username. No password needed.</h1>
        <form onSubmit={this.handleSignupSubmit}>
          <input onChange={this.handleChange} value={this.state.username} type="text" name="username"/>
          <input type="submit" value="Sign up!"/>
        </form>
      </div>
    );
  }
}

export default SignUpPage;
