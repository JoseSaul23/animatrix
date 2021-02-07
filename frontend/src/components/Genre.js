import React, {Component} from 'react'
import ReactTooltip from 'react-tooltip';
import {Link} from 'react-router-dom' 

export class Genre extends Component {
    render() {
        const {id, thumbnail, name, description} = this.props

        return (
            <Link to={`/genres/${id}`} data-tip={description} data-for='genre-description'>
                <img 
                    src={thumbnail}
                    alt="thumbnail"
                    className="img-fluid"
                />
                <p className="mt-2">
                    {name}
                </p>
                <ReactTooltip
                    id='genre-description' 
                    place="bottom"
                    getContent={ dataTip => (
                        <div 
                            style={{maxWidth:"220px",maxHeight:"100px"}}
                            className="truncate-multiline"
                        >
                            {dataTip}
                        </div>
                    )}
                />
            </Link>
        );
    }
}