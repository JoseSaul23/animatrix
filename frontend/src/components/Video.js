import React, {Component} from 'react'

export class Video extends Component {
    render() {
        const {src} = this.props

        return (
            <iframe 
                width="100%"
                height="480"
                title="video"
                src={src}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        );
    }
}