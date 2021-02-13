import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {ImYoutube} from 'react-icons/im'

export class Footer extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-bottom" style={{backgroundColor:"black"}}>
                <div className="collapse navbar-collapse text-white">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link" to="/">About us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Terms of use</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Privacy policy</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/">
                                <ImYoutube size={21}/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}