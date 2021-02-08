import React, {Component} from 'react'
import {MoviesMiniCarousel} from '../MoviesMiniCarousel'
import {connect} from 'react-redux'
import {getGenres, clearGenres} from '../../actions/genresActions'
import PropTypes from 'prop-types'

class MoviesList extends Component {

    static propTypes = {
        genres: PropTypes.array.isRequired,
        getGenres: PropTypes.func.isRequired,
        clearGenres: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getGenres()
    }

    componentWillUnmount() {
        this.props.clearGenres()
    }

    _renderGenreMovies = () => {
        return this.props.genres.map( genre => {
            return (
                <MoviesMiniCarousel
                    key={genre.id}
                    id={genre.id} 
                    title={genre.name}
                    seeAllUrl={`/genres/${genre.id}`}
                />
            )
        })
    }

    render() {
        return (
            <div className="text-white">
                { this._renderGenreMovies() }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    genres: state.genres.genres,
});

export default connect(
    mapStateToProps,
    {getGenres, clearGenres}
)(MoviesList);