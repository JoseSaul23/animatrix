import React, {Component} from 'react'
import {Video} from '../Video'
import {MoviesMiniCarousel} from '../MoviesMiniCarousel'
import {connect} from 'react-redux'
import {getGenres, clearGenres} from '../../actions/genresActions'
import PropTypes from 'prop-types'

class Home extends Component {

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
                <Video 
                    src={"https://www.youtube.com/embed/ldYJ916tqJY?autoplay=1&mute=0&start=168&end=198"}
                />
                <MoviesMiniCarousel
                    id={null} 
                    title="Last Added"
                    seeAllUrl="/movies"
                />
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
)(Home);