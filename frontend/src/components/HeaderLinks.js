import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {GiPerspectiveDiceSixFacesThree, GiPerspectiveDiceSixFacesSix} from 'react-icons/gi'
import {connect} from 'react-redux'
import {getRandomMovie} from '../actions/moviesActions'
import PropTypes from 'prop-types'

export class HeaderLinks extends Component {

    static propTypes = {
        random_movie: PropTypes.number.isRequired,
        getRandomMovie: PropTypes.func.isRequired,
    }

    state = {
        throw: true
    }

    _toggleDice = () => {
        this.setState({ throw: !this.state.throw })
        this.props.getRandomMovie()
    }

    componentDidMount() {
        this.props.getRandomMovie()
    }

    // componentDidUpdate(prevProps) {

    // }

    render() {
        return(
            <ul className="navbar-nav">
                <li className="nav-item font-weight-bold ml-4">
                    <Link className="nav-link text-white" to="/">Home</Link>
                </li>
                <li className="nav-item ml-4">
                    <Link className="nav-link text-white" to="/movies">Animated Shorts</Link>
                </li>
                <li className="nav-item ml-4">
                    <Link className="nav-link text-white" to="/genres">Genres</Link>
                </li>
                <li className="nav-item ml-4">
                    <Link className="nav-link text-white" to={`/movies/${this.props.random_movie}`} onClick={this._toggleDice}>
                        {this.state.throw ? 
                            <GiPerspectiveDiceSixFacesThree size={24} />
                            : 
                            <GiPerspectiveDiceSixFacesSix size={24} />
                        }
                    </Link>
                </li>
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    random_movie: state.movies.random_movie,
});

export default connect(
    mapStateToProps,
    {getRandomMovie,}
)(HeaderLinks);