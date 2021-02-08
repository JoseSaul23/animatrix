import React, {Component} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './components/Header'
import {MenuMobile} from './components/MenuMobile'
import {Content} from './components/Content'
import {Route} from 'react-router-dom'
// import {Footer} from './components/Footer'

class App extends Component {

  render () {
    return (
      <div>
        <Route component={Header} />
        <Content />
        <Route component={MenuMobile} />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
