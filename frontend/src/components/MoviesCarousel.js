import React, {Component} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
        slidesToSlide: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

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
        
        // setInterval( () => { 
        //     let src = srcs[Math.floor(Math.random() * srcs.length)];
        //     this.setState({src}) 
        // }, 20000)
    }

    render() {
        return (
            <Carousel responsive={responsive}>
                <iframe 
                    width="100%"
                    height="480"
                    title="Home"
                    src="https://www.youtube.com/embed/ldYJ916tqJY?autoplay=1&mute=0&start=168&end=198"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </Carousel>
        );
    }
}