import React, {Component} from 'react'
import {Genre} from '../Genre'
import InfiniteScroll from 'react-infinite-scroll-component';
import {connect} from 'react-redux'
import {getGenres, clearGenres} from '../../actions/genresActions'
import PropTypes from 'prop-types'

class GenresList extends Component {

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

    _getMoreGenres = () => {
        if(this.props.genres.nextPage === null) {
            return;
        }
        this.props.getGenres(this.props.genres.page + 1)
    }

    _renderGenres = () => {
        return this.props.genres.genres.map( genre => {
            return (
                <div key={genre.id} className="col pr-1">
                    <Genre 
                        id={genre.id}
                        name={genre.name}
                        thumbnail={genre.thumbnail}
                        description={genre.description}
                    />
                </div>
            )
        })
    }

    render() {
        const {count, nextPage} = this.props.genres
        const content = 
            <div className="text-white">
                <div className="container mt-4">
                    <h5 className="my-4">Genres</h5>
                    <InfiniteScroll
                        className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-4"
                        dataLength={count}
                        next={this._getMoreGenres}
                        hasMore={nextPage !== null ? true : false}
                        loader={<h4>Loading...</h4>}
                    >
                        {this._renderGenres()}
                    </InfiniteScroll>
                </div>
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
)(GenresList);