import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import About from './About';
import AuthRoute from './AuthRoute';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import Menu from './Menu'
import ProtectedRoute from './ProtectedRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/menu' component={Menu} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route exact path='/about' component={About} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
