import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Dice from './Dice'

export class HeaderLinks extends Component {

    render() {
        return(
            <ul className="navbar-nav">
                <li className="nav-item font-weight-bold ml-4">
                    <Link className="nav-link text-white" to="/">Home</Link>
                </li>
                <li className="nav-item ml-4">
                    <Link className="nav-link text-white" to="/movies">Animated Shorts</Link>
                </li>
                <li className="nav-item ml-4">
                    <Link className="nav-link text-white" to="/genres">Genres</Link>
                </li>
                <li className="nav-item ml-4">
                    <Dice size={24} />
                </li>
            </ul>
        );
    }
}
