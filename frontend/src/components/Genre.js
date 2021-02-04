import React, {Component} from 'react'
import {Link} from 'react-router-dom' 

export class Genre extends Component {
    render() {
        const {id, thumbnail, name} = this.props

        return (
            <Link to={`/genres/${id}`}>
                <img 
                    src={thumbnail}
                    alt="thumbnail"
                    className="img-fluid"
                />
                <p className="mt-2">{name}</p>
            </Link>
        );
    }
}