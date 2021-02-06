import React, {Component} from 'react'
import {BiTimeFive} from 'react-icons/bi'
import {FaRegCalendarAlt} from 'react-icons/fa'
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
        const {movie} = this.props.movies

        return (
            <div className="text-white mt-5">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-5 col-md-3 pr-0">
                            <img 
                                src={movie.thumbnail}
                                alt="thumbnail"
                                className="img-fluid"
                            />
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
                                Genres: {
                                    movie.genres
                                    ? this._renderGenres(movie)
                                    : null
                                }
                            </p>
                            <p>{movie.synopsis}</p>
                        </div>
                    </div>
                </div>
                <div className="my-5">
                    <iframe 
                        width="100%"
                        height="480"
                        title="movie"
                        src={movie.url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                <div className="container my-4">
                    <h5 className="mb-4">RELATED MOVIES</h5>
                    <div className="row">
                        <div className="col pr-0">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col pr-0">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col pr-0">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col pr-0">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col pr-0">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    movies: state.movies,
});

export default connect(
    mapStateToProps,
    {getMovie, clearMovie}
)(MovieDetail);