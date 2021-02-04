import React, {Component} from 'react'

export class MoviesCarousel extends Component {

    state = {
        src: ""
    }

    componentDidMount() {
        let srcs = [
            "https://www.youtube.com/embed/ldYJ916tqJY?autoplay=1&mute=0&start=168",
            "https://www.youtube.com/embed/IjJmTeBSEzU?autoplay=1&mute=0&start=168",
            "https://www.youtube.com/embed/gNVqRC4mcSI?autoplay=1&mute=0&start=168",
            "https://www.youtube.com/embed/acnWy-tl3ng?autoplay=1&mute=0&start=168",
            "https://www.youtube.com/embed/MSoImbo8Yr8?autoplay=1&mute=0&start=168",
        ]
        this.setState({src: srcs[0]})
        
        setInterval( () => { 
            let src = srcs[Math.floor(Math.random() * srcs.length)];
            this.setState({src}) 
        }, 20000)
    }

    render() {
        return (
            <iframe 
                width="100%"
                height="480"
                title="Home"
                src={this.state.src}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        );
    }
}