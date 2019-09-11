import React from 'react';
import Users from './Users'
import HomePage from './HomePage';
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';
import Messages from './Messages';
import Chatroom from './Chatroom'

import { Switch, Route} from 'react-router-dom'


class App extends React.Component{

state = {
  users: [],
  chatPerson: {},
  chatid: null,
  allmessages: [],
  userMessages: []
}

componentDidMount() {
  setInterval(()=>{
    fetch("https://lets-chat-flatiron.herokuapp.com/users")
    .then(res => res.json())
    .then(users => this.setState({ users }))
  }, 1000)

   setInterval(()=>{
     fetch("https://lets-chat-flatiron.herokuapp.com/chat_boxes")
     .then(res=> res.json())
     .then(allmessages => {this.setState({ allmessages }) })
   }, 1000)
    }

chatWithThisUser = (user) => {
  this.setState({chatPerson: user})
  // this.setState({userMessages: []})
}

chatid = (id) => {
  this.setState({chatid: id})
  console.log(id);
  console.log(this.state.chatPerson.id)
  setInterval(()=>{
  this.setState({userMessages: []})
  this.state.allmessages.map(message => {
      if(
        (message.user_id === parseInt(localStorage.id) && id === message.chat_id)
        ||
        (message.user_id === this.state.chatPerson.id && id === message.chat_id)
      )
      {
        this.setState({ userMessages: [...this.state.userMessages , message]})
      }
    })
  } , 1000)
}

render(){

    return (
      <Switch>
        <Route path={'/signup'} component={SignUpPage} />
        <Route path={'/login'} component={LoginPage} />
        {localStorage.id ?
          <Route path={'/users'}
          render = {routerProps =>
            <div>
              <Users {...routerProps} users={this.state.users}
               chatWithThisUser={this.chatWithThisUser}
               chatid={this.chatid} />

              <Messages {...routerProps}
               chatPerson={this.state.chatPerson}
               chatid={this.state.chatid}
               messages={this.state.userMessages}/>
            </div>
            }
            />
          :
          <Route path={'/'} component={HomePage}/>
        }
        <Route path={'/'} component={HomePage}/>
      </Switch>
    )







  }
}

export default App;
