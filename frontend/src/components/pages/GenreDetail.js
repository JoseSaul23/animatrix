import React, {Component} from 'react'
import {Movie} from '../Movie'
import {Video} from '../Video'
import {connect} from 'react-redux'
import {getGenreDetails, clearGenre} from '../../actions/genresActions'
import {getGenreMovies, clearMovies} from '../../actions/moviesActions'
import PropTypes from 'prop-types'

class GenreDetail extends Component {

    static propTypes = {
        genre: PropTypes.object.isRequired,
        getGenreDetails: PropTypes.func.isRequired,
        clearGenre: PropTypes.func.isRequired,
        getGenreMovies: PropTypes.func.isRequired,
        clearMovies: PropTypes.func.isRequired,
    }

    componentDidMount() {
        const {id} = this.props.match.params
        this.props.getGenreDetails(id)
        this.props.getGenreMovies(id)
    }

    componentDidUpdate(prevProps) {
        const {id} = this.props.match.params
        if(prevProps.match.params.id !== id){
            this.props.getGenreDetails(id)
        }
    }

    componentWillUnmount() {
        this.props.clearGenre()
        this.props.clearMovies()
    }

    _renderMovies = () => {
        return this.props.movies.movies.map( movie => {
            return (
                <div key={movie.id} className="col">
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
        const {name, description} = this.props.genre
        const lastMovie = this.props.movies.movies[0]
        console.log(lastMovie)
        return (
            <div className="text-white">
                <Video 
                    src={lastMovie ? lastMovie.preview_url : ""}
                />
                <div className="container mt-4">
                    <h5 className="my-4">{name}</h5>
                    <div className="row">
                        <div className="col-lg-8">
                            <p className="mb-4">
                                {description}
                            </p>
                        </div>
                    </div>
                    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
                        {this._renderMovies()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    genre: state.genres.genre,
    isLoading: state.genres.isLoading,
    movies: state.movies
});

export default connect(
    mapStateToProps,
    {getGenreDetails, clearGenre, getGenreMovies, clearMovies}
)(GenreDetail);