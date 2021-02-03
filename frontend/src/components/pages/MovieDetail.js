import React, {Component} from 'react'
import {BiTimeFive} from 'react-icons/bi'
import {FaRegCalendarAlt} from 'react-icons/fa'

export class MovieDetail extends Component {
    render() {
        return (
            <div className="text-white mt-5">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-5 col-md-3 pr-0">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col ml-md-2">
                            <h5 className="mb-3">Warmachine</h5>
                            <p className="centered-label">
                                <span className="mr-4 centered-label">
                                    <BiTimeFive style={{color:"#1ED760"}}/>
                                    <span className="ml-2">15 min</span>
                                </span>
                                <FaRegCalendarAlt style={{color:"#1ED760"}} size={14}/>
                                <span className="ml-2">2017</span>
                            </p>
                            <p>Genres: steampunk, fantasy, anime, cartoon, another</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <div className="my-5">
                    <iframe 
                        width="100%"
                        height="480"
                        title="Home"
                        src="https://www.youtube.com/embed/ldYJ916tqJY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                <div className="container my-4">
                    <h5 className="mb-4">RELATED MOVIES</h5>
                    <div className="row">
                        <div className="col">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}