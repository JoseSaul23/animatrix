import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Movie} from './Movie'
import {MdNavigateNext} from 'react-icons/md'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from 'axios'

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        slidesToSlide: 5,
        partialVisibilityGutter: 10 
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 5,
        partialVisibilityGutter: 10 
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
        slidesToSlide: 4,
        partialVisibilityGutter: 12 
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 2,
        partialVisibilityGutter: 15
    }
};


export class MoviesMiniCarousel extends Component {

    state = {
        movies: [],
        loading: true
    }

    componentDidMount() {
        this._getMovies(this.props.id)
    }

    // DECOPLAR LOGICA DE PETICION 
    _getMovies = (id) => {
        if(id !== null) {
            axios.get(`${process.env.REACT_APP_API_URL}/api/genres/${id}/movies`)
            .then(res => {
                this.setState({ movies: res.data.results })
                this.setState({ loading: false })
            })
            .catch(e => {
                
            }) 
        } else {
            axios.get(`${process.env.REACT_APP_API_URL}/api/movies/last_movies`)
            .then(res => {
                this.setState({ movies: res.data })
                this.setState({ loading: false })
            })
            .catch(e => {
                
            }) 
        }
    }

    _renderMovies = () => {
        return this.state.movies.map( movie => {
            return (
                <div key={movie.id} className="col pr-0">
                    <Movie 
                        id={movie.id}
                        thumbnail={movie.thumbnail}
                        gif={movie.gif}
                        title={movie.title}
                    />
                </div>
            )
        })
    }

    render() {
        const {title, seeAllUrl} = this.props
        const content =
            <div className="mb-2">
                <Link to={seeAllUrl}>
                    <h5 className="mb-3 hiden-label-container">
                        {title}
                        <small className="ml-4 hiden-label">
                            See all <MdNavigateNext />
                        </small>
                    </h5>
                </Link>
                <Carousel
                    className="row"
                    responsive={responsive}
                    partialVisible={true}
                    showDots
                >
                    {this._renderMovies()}
                </Carousel>
            </div>

        return(this.state.loading ? "" : content);
    }
}