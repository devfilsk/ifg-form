import React, {Component} from 'react';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Menu from "./Layout/Menu";
import Content from "./Layout/Content";
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    render() {
        return (
            <div>
              <Header/>
              <Menu/>
              <Content>
                TEste
              </Content>
              <Footer/>
            </div>
        );
    }
}

export default App;
