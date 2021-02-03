import React, {Component} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './components/Header'
import {MenuMobile} from './components/MenuMobile'
import {Content} from './components/Content'

class App extends Component {

  render () {
    return (
      <div className="App">
        <Header />
        <Content />
        <MenuMobile />
      </div>
    );
  }
}

export default App;
