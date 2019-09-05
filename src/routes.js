import React from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Main from './components/Main';

export default function Routes() {
    return (
      <BrowserRouter>
          <Route path='/login' exact component={Login}/>
          <Route path='/' exact component={Main}/>
          {/*<Main />*/}
      </BrowserRouter>
    );
}
