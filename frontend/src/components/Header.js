import React, {Component} from 'react'
import {Logo} from './Logo'
import {Link} from 'react-router-dom'
import {HeaderLinks} from './HeaderLinks'
import {SearchBox} from './SearchBox'

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg sticky-top" style={{backgroundColor:"black"}}>
                <Link className="navbar-brand ml-lg-4" to="/">
                    <Logo />
                </Link>
                <div className="collapse navbar-collapse">
                    <HeaderLinks />
                </div>
                <SearchBox />
            </nav>
        );
    }
}