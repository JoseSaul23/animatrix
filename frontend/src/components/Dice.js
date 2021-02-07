import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {GiPerspectiveDiceSixFacesThree, GiPerspectiveDiceSixFacesSix} from 'react-icons/gi'
import {connect} from 'react-redux'
import {getRandomMovie} from '../actions/moviesActions'
import PropTypes from 'prop-types'

class Dice extends Component {

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
        const {size} = this.props

        return (
            <div>
                <Link 
                    className="nav-link text-white"
                    to={`/movies/${this.props.random_movie}`}
                    onClick={this._toggleDice}
                >
                    {this.state.throw ? 
                        <GiPerspectiveDiceSixFacesThree size={size} />
                        : 
                        <GiPerspectiveDiceSixFacesSix size={size} />
                    }
                </Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    random_movie: state.movies.random_movie,
});

export default connect(
    mapStateToProps,
    {getRandomMovie,}
)(Dice);