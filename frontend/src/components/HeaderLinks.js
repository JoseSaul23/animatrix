import React, {Component} from 'react'
import {Link} from 'react-router-dom'
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
                    <Link className="nav-link text-white" to="/">Home</Link>
                </li>
                <li className="nav-item ml-4">
                    <Link className="nav-link text-white" to="/movies">Animated Shorts</Link>
                </li>
                <li className="nav-item ml-4">
                    <Link className="nav-link text-white" to="/genres">Genres</Link>
                </li>
                <li className="nav-item ml-4">
                    <Link className="nav-link text-white" to="/" onClick={this._toggleDice}>
                        {this.state.throw ? 
                            <GiPerspectiveDiceSixFacesThree size={24} />
                            : 
                            <GiPerspectiveDiceSixFacesSix size={24} />
                        }
                    </Link>
                </li>
            </ul>
        );
    }
}