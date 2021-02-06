import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getGenreDetails, clearGenre} from '../../actions/genresActions'
import PropTypes from 'prop-types'

class GenreDetail extends Component {

    static propTypes = {
        genre: PropTypes.object.isRequired,
        getGenreDetails: PropTypes.func.isRequired,
        clearGenre: PropTypes.func.isRequired,
    }

    componentDidMount() {
        const {id} = this.props.match.params
        this.props.getGenreDetails(id)
    }

    componentDidUpdate(prevProps) {
        const {id} = this.props.match.params
        if(prevProps.match.params.id !== id){
            this.props.getGenreDetails(id)
        }
    }

    componentWillUnmount() {
        this.props.clearGenre()
    }

    render() {

        const {name, description} = this.props.genre

        return (
            <div className="text-white">
                <iframe 
                    width="100%"
                    height="480"
                    title="Home"
                    src="https://www.youtube.com/embed/ldYJ916tqJY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
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
                    <div className="row">
                        <div className="col pr-0">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                            <p className="mt-2">Movie</p>
                        </div>
                        <div className="col pr-0">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                            <p className="mt-2">Movie</p>
                        </div>
                        <div className="col pr-0">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                            <p className="mt-2">Movie</p>
                        </div>
                        <div className="col pr-0">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                            <p className="mt-2">Movie</p>
                        </div>
                        <div className="col pr-0">
                            <img 
                                src="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                                alt="thumbnail"
                                className="img-fluid"
                            />
                            <p className="mt-2">Movie</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    genre: state.genres.genre,
    isLoading: state.genres.isLoading
});

export default connect(
    mapStateToProps,
    {getGenreDetails, clearGenre}
)(GenreDetail);