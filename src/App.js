import React from 'react';
import Users from './Users'
import HomePage from './HomePage';
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';
import Messages from './Messages';

import { Switch, Route} from 'react-router-dom'


class App extends React.Component{

state = {
  users: [],
  chatPerson: {},
  chatid: null
}

componentDidMount() {
  fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(users => this.setState({ users }))
}

chatWithThisUser = (user) => {
  this.setState({chatPerson: user})
}
chatid = (id) => {
  this.setState({chatid: id})
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
               chatid={this.state.chatid}/>
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
