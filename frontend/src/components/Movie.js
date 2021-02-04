import React, {Component} from 'react'
import {Link} from 'react-router-dom' 

export class Movie extends Component {
    render() {
        const {id, thumbnail, title} = this.props

        return (
            <Link to={`/movies/${id}`}>
                <img 
                    src={thumbnail}
                    alt="thumbnail"
                    className="img-fluid"
                />
                <p className="mt-2">{title}</p>
            </Link>
        );
    }
}