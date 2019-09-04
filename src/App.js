import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Menu from "./Layout/Menu";
import Content from "./Layout/Content/Content";
import 'bootstrap/dist/css/bootstrap.css';
import CreateForm from "./views/formularios/createForm";
import CreateQuestions from "./views/perguntas/CreateQuestions";

class App extends Component {
    render() {
        return (
            <Router>
              <Header/>
              <Menu/>
              <Content>


              </Content>
              <Footer/>
            </Router>
        );
    }
}

export default App;
