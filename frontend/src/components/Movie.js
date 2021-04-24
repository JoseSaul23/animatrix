import React, {Component} from 'react'
import {Link} from 'react-router-dom' 

export class Movie extends Component {
    state = {
        imgSrc: this.props.thumbnail
    }

    render() {
        const {id, title} = this.props

        return (
            <Link to={`/movies/${id}`} className="">
                <div className="overflow">
                    <img 
                        src={this.state.imgSrc}
                        alt="thumbnail"
                        className="img-fluid movie-img"
                    />
                </div>
                <p className="mt-2">{title}</p>
            </Link>
        );
    }
}