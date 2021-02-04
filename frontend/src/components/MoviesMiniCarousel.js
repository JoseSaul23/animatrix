import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Movie} from './Movie'
import {MdNavigateNext} from 'react-icons/md'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        slidesToSlide: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
        slidesToSlide: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 2
    }
};


export class MoviesMiniCarousel extends Component {
    render() {
        const {genre_id, genre_name} = this.props

        return (
            <div className="container my-4">
                <Link to={`/genres/${genre_id}`}>
                    <h5 className="mb-3 hiden-label-container">
                        {genre_name}
                        <small className="ml-4 hiden-label">
                            See all <MdNavigateNext />
                        </small>
                    </h5>
                </Link>
                <Carousel className="row" responsive={responsive} showDots>
                    <div className="col pr-0">
                        <Movie 
                            id="1"
                            thumbnail="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                            title="Warmachine"
                        />
                    </div>
                    <div className="col pr-0">
                        <Movie 
                            id="1"
                            thumbnail="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                            title="Warmachine"
                        />
                    </div>
                    <div className="col pr-0">
                        <Movie 
                            id="1"
                            thumbnail="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                            title="Warmachine"
                        />
                    </div>
                    <div className="col pr-0">
                        <Movie 
                            id="1"
                            thumbnail="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                            title="Warmachine"
                        />
                    </div>
                    <div className="col pr-0">
                        <Movie 
                            id="1"
                            thumbnail="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                            title="Warmachine"
                        />
                    </div>
                    <div className="col pr-0">
                        <Movie 
                            id="1"
                            thumbnail="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                            title="Warmachine"
                        />
                    </div>
                    <div className="col pr-0">
                        <Movie 
                            id="1"
                            thumbnail="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                            title="Warmachine"
                        />
                    </div>
                    <div className="col pr-0">
                        <Movie 
                            id="1"
                            thumbnail="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                            title="Warmachine"
                        />
                    </div>
                    <div className="col pr-0">
                        <Movie 
                            id="1"
                            thumbnail="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                            title="Warmachine"
                        />
                    </div>
                    <div className="col pr-0">
                        <Movie 
                            id="1"
                            thumbnail="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                            title="Warmachine"
                        />
                    </div>
                </Carousel>
            </div>
        );
    }
}