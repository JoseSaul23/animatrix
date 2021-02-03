import React, {Component} from 'react'
import {GiPerspectiveDiceSixFacesThree, GiPerspectiveDiceSixFacesSix} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsCollectionPlayFill} from 'react-icons/bs'
import {FaTheaterMasks} from 'react-icons/fa'

export class MenuMobile extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm fixed-bottom d-lg-none text-white row" style={{backgroundColor:"black"}}>
                <div className="col">
                    <AiFillHome size={24} />
                </div>
                <div className="col">
                    <BsCollectionPlayFill size={24} />
                </div>
                <div className="col">
                    <FaTheaterMasks size={25} />
                </div>
                <div className="col">
                    <GiPerspectiveDiceSixFacesThree size={25} />
                </div>
            </nav>
        );
    }
}