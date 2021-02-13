import React, {Component} from 'react'
import {MoviesMiniCarousel} from '../MoviesMiniCarousel'
import InfiniteScroll from 'react-infinite-scroll-component';
import {connect} from 'react-redux'
import {getGenres, clearGenres} from '../../actions/genresActions'
import PropTypes from 'prop-types'

class MoviesList extends Component {

    static propTypes = {
        genres: PropTypes.object.isRequired,
        getGenres: PropTypes.func.isRequired,
        clearGenres: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getGenres()
    }

    componentWillUnmount() {
        this.props.clearGenres()
    }

    _getMoreGenresMovies = () => {
        if(this.props.genres.nextPage === null) {
            return;
        }
        this.props.getGenres(this.props.genres.page + 1)
    }

    _renderGenreMovies = () => {
        return this.props.genres.genres.map( genre => {
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
        const {count, nextPage} = this.props.genres
        const content = 
            <div className="text-white">
                <InfiniteScroll
                    dataLength={count}
                    next={this._getMoreGenresMovies}
                    hasMore={nextPage !== null ? true : false}
                    loader={
                        <div className="text-center">
                            <div className="spinner-border">
                                <span className="sr-only">Loading....</span>
                            </div>
                        </div>
                    }
                >
                    { this._renderGenreMovies() }
                </InfiniteScroll>
            </div>

        return ( this.props.genres.areLoading ? "" : content );
    }
}

const mapStateToProps = state => ({
    genres: state.genres,
});

export default connect(
    mapStateToProps,
    {getGenres, clearGenres}
)(MoviesList);