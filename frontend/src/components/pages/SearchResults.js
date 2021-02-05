import React, {Component} from 'react'
import {Movie} from '../Movie'
import {connect} from 'react-redux'
import {getSearchResults, clearResults} from '../../actions/searchActions'
import PropTypes from 'prop-types'

class SearchResults extends Component {

    static propTypes = {
        search: PropTypes.object.isRequired,
        getSearchResults: PropTypes.func.isRequired,
        clearResults: PropTypes.func.isRequired,
    }

    componentDidMount() {
        const {query} = this.props.match.params
        this.props.getSearchResults(query)
    }

    componentDidUpdate (prevProps) {
        const {query} = this.props.match.params

        if (prevProps.match.params.query !== query) {
            this.props.clearResults()
            this.props.getSearchResults(query)
        }
    }

    componentWillUnmount() {
        this.props.clearResults()
    }

    _renderResults = () => {
        return this.props.search.results.map( result => {
            return (
                <div className="col">
                    <Movie 
                        id={result.id}
                        thumbnail={result.thumbnail}
                        gif={result.gif}
                        title={result.title}
                    />
                </div>
            )
        })
    }

    render() {
        const {count} = this.props.search

        return (
            <div className="text-white">
                <div className="container mt-4">
                    <h6 className="my-4">
                        {count} results in 0,2 seconds for {this.props.match.params.query}
                    </h6>
                    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
                        {this._renderResults()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    search: state.search,
});

export default connect(
    mapStateToProps,
    {getSearchResults, clearResults}
)(SearchResults);