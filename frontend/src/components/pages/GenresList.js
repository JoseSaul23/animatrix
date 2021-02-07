import React, {Component} from 'react'
import {Genre} from '../Genre'
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
        return (
            <div className="text-white">
                <div className="container mt-4">
                    <h5 className="my-4">Genres</h5>
                    <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-4">
                        {this._renderGenres()}
                    </div>
                </div>
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
)(GenresList);