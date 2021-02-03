import React, {Component} from 'react'

export class GenreDetail extends Component {
    render() {
        return (
            <div className="text-white">
                <iframe 
                    width="100%"
                    height="480"
                    title="Home"
                    src="https://www.youtube.com/embed/ldYJ916tqJY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                <div className="container mt-4">
                    <h5 className="my-4">Steampunk</h5>
                    <div className="row">
                        <div className="col-lg-8">
                            <p className="mb-4">Steampunk is a retrofuturistic subgenre of science fiction that incorporates technology and aesthetic designs inspired by 19th-century industrial steam-powered machinery.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col pr-0">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                            <p className="mt-2">Movie</p>
                        </div>
                        <div className="col pr-0">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                            <p className="mt-2">Movie</p>
                        </div>
                        <div className="col pr-0">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                            <p className="mt-2">Movie</p>
                        </div>
                        <div className="col pr-0">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                            <p className="mt-2">Movie</p>
                        </div>
                        <div className="col pr-0">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                            <p className="mt-2">Movie</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}