import React, {Component} from 'react'

export class Home extends Component {
    render() {
        return (
            <div className="text-white">
                {/* <MovieCarousel> */}
                <iframe 
                    width="100%"
                    height="480"
                    title="Home"
                    src="https://www.youtube.com/embed/ldYJ916tqJY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                {/* <LastAdded /> */}
                <div className="container my-4">
                    <h5 className="mb-4">Last Added</h5>
                    <div className="row">
                        <div className="col pr-0">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col pr-0">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col pr-0">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col pr-0">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col pr-0">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
                <div className="container my-4">
                    <h5 className="mb-4">Steampunk</h5>
                    <div className="row">
                        <div className="col pr-0">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col pr-0">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col pr-0">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col pr-0">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col pr-0">
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