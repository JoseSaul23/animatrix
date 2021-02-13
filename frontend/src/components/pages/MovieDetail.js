import React, {Component} from 'react'
import {BiTimeFive} from 'react-icons/bi'
import {FaRegCalendarAlt} from 'react-icons/fa'
import { Video } from '../Video'
import {MoviesMiniCarousel} from '../MoviesMiniCarousel'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getMovie, clearMovie} from '../../actions/moviesActions'
import PropTypes from 'prop-types'

class MovieDetail extends Component {

    static propTypes = {
        movies: PropTypes.object.isRequired,
        getMovie: PropTypes.func.isRequired,
        clearMovie: PropTypes.func.isRequired,
    }

    componentDidMount() {
        const {id} = this.props.match.params
        this.props.getMovie(id)
    }

    componentDidUpdate(prevProps) {
        const {id} = this.props.match.params
        if(prevProps.match.params.id !== id){
            this.props.getMovie(id)
        }
    }

    componentWillUnmount() {
        this.props.clearMovie()
    }

    _renderGenres = (movie) => {
        return movie.genres.map( genre => {
            return (
                <Link to={`/genres/${genre.id}`}>
                    {genre.name}
                    {(movie.genres.indexOf(genre) + 1) === movie.genres.length ? "." : ", "}
                </Link>
            )
        })
    }

    render() {
        const {movie, isLoading} = this.props.movies

        const content =
            <div className="text-white mt-5">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-5 col-md-3 pr-0">
                            { 
                            isLoading ?
                            null :
                            <img 
                                src={movie.thumbnail}
                                alt="thumbnail"
                                className="img-fluid"
                            />
                            }
                        </div>
                        <div className="col ml-md-2">
                            <h5 className="mb-3">{movie.title}</h5>
                            <p className="centered-label">
                                <span className="mr-4 centered-label">
                                    <BiTimeFive style={{color:"#1ED760"}}/>
                                    <span className="ml-2">{movie.length}</span>
                                </span>
                                <FaRegCalendarAlt style={{color:"#1ED760"}} size={14}/>
                                <span className="ml-2">{movie.year}</span>
                            </p>
                            <p>
                            {
                                movie.genres
                                ? <span>Genres: {this._renderGenres(movie)}</span>
                                : null
                            }
                            </p>
                            <p>{movie.synopsis}</p>
                        </div>
                    </div>
                </div>
                <div className="my-5">
                    <Video 
                        src={movie.url}
                    />
                </div>
                {
                movie.genres ?
                <MoviesMiniCarousel
                    id={movie.genres[0].id} 
                    title={ `More of ${movie.genres[0].name}` }
                    seeAllUrl={`/genres/${movie.genres[0].id}`}
                /> :
                null
                }
            </div>
        return ( content );
    }
}

const mapStateToProps = state => ({
    movies: state.movies,
});

export default connect(
    mapStateToProps,
    {getMovie, clearMovie}
)(MovieDetail);