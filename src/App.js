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
  chatPerson: {}
}

componentDidMount() {
  fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(users => this.setState({ users }))
}

chatWithThisUser = (user) => {
  this.setState({chatPerson: user})
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
              <Users {...routerProps} users={this.state.users} chatWithThisUser={this.chatWithThisUser} />
              <Messages {...routerProps} chatPerson={this.state.chatPerson} />
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
