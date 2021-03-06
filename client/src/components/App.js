import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import About from './About';
import Menu from './Menu'
import Register from './Register';
import Flash from './Flash';
import Order from './Order';
import Home from './Home';
import RealMenu from './RealMenu'
import Order from './Order'
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
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
            <Route exact path='/realmenu' component={RealMenu} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route exact path='/about' component={About} />
            <Route component={NoMatch} />
            <Route exact path='/order' component={Order} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
