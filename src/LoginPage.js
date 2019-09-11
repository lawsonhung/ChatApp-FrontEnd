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
      // Changed from filter to find due to undefined showing up if multiple instances with same username
      // Returns first instance found
      let currentUser = users.find(user => user.name === this.state.username)
      console.log(currentUser)
      console.log(!!currentUser)
      if (!!currentUser){
      if (currentUser.length === 0){
        console.log("it doesnt exit");
      }
      else{
        this.props.history.push('/users')

        if(Array.isArray(localStorage)){
          localStorage.name = currentUser[0].name
          localStorage.id = currentUser[0].id
        }
        else{
          localStorage.name = currentUser.name
          localStorage.id = currentUser.id
        }
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
    }
    else(
      this.props.history.push('/HomePage')
    )
    })

  }



  render() {
    return (
      <div>
        <h1 className="registration">Log in please!</h1>
        <form onSubmit={this.handleLoginSubmit} className="registrationForm" >
          <input onChange={this.handleChange} value={this.state.username} type="text" name="username"/>
          {"\n"}
          <input type="submit" value="Log in"/>
        </form>
      </div>
    );
  }
}

export default LoginPage;
