import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
import logo from '../logo.png'

export class Logo extends Component {
  render() {
    return (
    //   <Link to="/">
        <img src={logo} alt="logo" width="140" height="30" className="d-inline-block align-top"/>
    //   </Link>
    );
  }
}