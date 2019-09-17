import React, {Component} from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Main from './components/Main';

import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    render() {
        return (
            <Routes />
        );
    }
}

export default App;
