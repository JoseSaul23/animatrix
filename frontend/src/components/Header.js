import React, {Component} from 'react'
import {Logo} from './Logo'
import {HeaderLinks} from './HeaderLinks'
import {SearchBox} from './SearchBox'

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg" style={{backgroundColor:"black"}}>
                <a className="navbar-brand ml-lg-4" href="/">
                    <Logo />
                </a>
                <div className="collapse navbar-collapse">
                    <HeaderLinks />
                </div>
                <SearchBox />
            </nav>
        );
    }
}