import React, {Component} from 'react'

export class GenresList extends Component {
    render() {
        return (
            <div className="container mt-4 text-white">
                <h5 className="mb-4 pl-0">Genres</h5>
                <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-4">
                    <div className="col px-1">
                        <img 
                            src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                            alt="thumbnail"
                            className="img-fluid"
                        />
                        <p className="mt-2">Fantasy</p>
                    </div>
                    <div className="col px-1">
                        <img 
                            src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                            alt="thumbnail"
                            className="img-fluid"
                        />
                        <p className="mt-2">Steampunk</p>
                    </div>
                    <div className="col px-1">
                        <img 
                            src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                            alt="thumbnail"
                            className="img-fluid"
                        />
                        <p className="mt-2">Action</p>
                    </div>
                    <div className="col px-1">
                        <img 
                            src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                            alt="thumbnail"
                            className="img-fluid"
                        />
                        <p className="mt-2">Anime</p>
                    </div>
                    <div className="col px-1">
                        <img 
                            src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                            alt="thumbnail"
                            className="img-fluid"
                        />
                        <p className="mt-2">Fantasy</p>
                    </div>
                    <div className="col px-1">
                        <img 
                            src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                            alt="thumbnail"
                            className="img-fluid"
                        />
                        <p className="mt-2">Steampunk</p>
                    </div>
                    <div className="col px-1">
                        <img 
                            src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                            alt="thumbnail"
                            className="img-fluid"
                        />
                        <p className="mt-2">Action</p>
                    </div>
                    <div className="col px-1">
                        <img 
                            src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                            alt="thumbnail"
                            className="img-fluid"
                        />
                        <p className="mt-2">Anime</p>
                    </div>
                </div>
            </div>
        );
    }
}