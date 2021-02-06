import React, {Component} from 'react'
import {GiPerspectiveDiceSixFacesThree} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsCollectionPlayFill} from 'react-icons/bs'
import {FaTheaterMasks} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export class MenuMobile extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm fixed-bottom d-lg-none text-white row text-center" style={{backgroundColor:"black"}}>
                <div className="col text-success">
                    <Link to="/">
                        <AiFillHome size={24} />
                    </Link>
                </div>
                <div className="col">
                    <Link to="/movies">
                        <BsCollectionPlayFill size={24} />
                    </Link>
                </div>
                <div className="col">
                    <Link to="/genres">
                        <FaTheaterMasks size={25} />
                    </Link>
                </div>
                <div className="col">
                    <Link to="/">
                        <GiPerspectiveDiceSixFacesThree size={25} />
                    </Link>
                </div>
            </nav>
        );
    }
}