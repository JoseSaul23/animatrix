import React, {Component} from 'react'
import {GiPerspectiveDiceSixFacesThree, GiPerspectiveDiceSixFacesSix} from 'react-icons/gi'

export class HeaderLinks extends Component {

    state = {
        throw: true
    }

    _toggleDice = () => {
        this.setState({ throw: !this.state.throw })
    }

    render() {
        return(
            <ul className="navbar-nav">
                <li className="nav-item font-weight-bold ml-4">
                    <a className="nav-link text-white" href="/">Home</a>
                </li>
                <li className="nav-item ml-4">
                    <a className="nav-link text-white" href="/">Animated Shorts</a>
                </li>
                <li className="nav-item ml-4">
                    <a className="nav-link text-white" href="/">Genres</a>
                </li>
                <li className="nav-item ml-4">
                    <a className="nav-link text-white" href="/" onClick={this._toggleDice}>
                        {this.state.throw ? 
                            <GiPerspectiveDiceSixFacesThree size={24} />
                            : 
                            <GiPerspectiveDiceSixFacesSix size={24} />
                        }
                    </a>
                </li>
            </ul>
        );
    }
}