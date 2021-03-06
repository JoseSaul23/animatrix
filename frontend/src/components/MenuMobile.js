import React, {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {BsCollectionPlayFill} from 'react-icons/bs'
import {FaTheaterMasks} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Dice from './Dice'
 
export class MenuMobile extends Component {
    render() {
        let {pathname} = this.props.location

        return (
            <nav 
                className="navbar navbar-expand-sm fixed-bottom d-lg-none text-white row text-center"
                style={{backgroundColor:"black"}}
            >
                <div className={`col ${pathname === "/" ? "text-success" : ""}`}>
                    <Link to="/">
                        <AiFillHome size={24} />
                    </Link>
                </div>
                <div className={`col ${pathname === "/movies" ? "text-success" : ""}`}>
                    <Link to="/movies">
                        <BsCollectionPlayFill size={24} />
                    </Link>
                </div>
                <div className={`col ${pathname === "/genres" ? "text-success" : ""}`}>
                    <Link to="/genres">
                        <FaTheaterMasks size={25} />
                    </Link>
                </div>
                <div className="col">
                    <Dice size={25}/>
                </div>
            </nav>
        );
    }
}