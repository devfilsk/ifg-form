import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Main from './components/Main';
import ProtectedRoute from './services/ProtectedRoute';

export default function Routes() {
    return (
      <Router>
          <Switch>
            <Route path='/login' exact component={Login}/>
            <ProtectedRoute path="/" name="Home" component={Main}/>
            {/*<Main />*/}
          </Switch>
      </Router>
    );
}
