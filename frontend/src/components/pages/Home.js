import React, {Component} from 'react'
import {Video} from '../Video'
import {MoviesMiniCarousel} from '../MoviesMiniCarousel'
import InfiniteScroll from 'react-infinite-scroll-component';
import {connect} from 'react-redux'
import {getGenres, clearGenres} from '../../actions/genresActions'
import PropTypes from 'prop-types'

class Home extends Component {

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

        return (
            <div className="text-white">
                {/* Falta forma de obtener ultimo video */}
                <Video 
                    src={"https://www.youtube.com/embed/ldYJ916tqJY?autoplay=1&mute=0&start=168&end=198"}
                />
                <MoviesMiniCarousel
                    id={null} 
                    title="Last Added"
                    seeAllUrl="/movies"
                />
                {/* Aqui no iria infinite scrolling al ser la prinicipal
                solo seria la primera pagina de 12 */}
                <InfiniteScroll
                    dataLength={count}
                    next={this._getMoreGenresMovies}
                    hasMore={nextPage !== null ? true : false}
                    loader={""}
                >
                    { this._renderGenreMovies() }
                </InfiniteScroll> 
            </div>
        );
    }
}

const mapStateToProps = state => ({
    genres: state.genres,
});

export default connect(
    mapStateToProps,
    {getGenres, clearGenres}
)(Home);