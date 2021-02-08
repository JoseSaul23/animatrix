import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {HiOutlineSearch} from 'react-icons/hi'

export class SearchBox extends Component {
    state = {
        query: ""
    }

    _handleChange = (e) => {
        this.setState({ query: e.target.value })
    }

    render() {
        return (
            <form className="form-inline my-2 my-lg-0">
                <div className="input-group">
                    <input 
                        className="form-control rounded-0 text-white border-right-0 d-none d-sm-block"
                        type="search"
                        placeholder="Search by title, description or genre... "
                        onChange={this._handleChange}
                        style={{backgroundColor:"black", width:340}}
                    />
                    {/* MOBILE SEARCH BOX INPUT */}
                    <input 
                        className="form-control rounded-0 text-white border-right-0 d-block d-sm-none"
                        type="search"
                        placeholder="Search... "
                        onChange={this._handleChange}
                        style={{backgroundColor:"black", width:120}}
                    />
                    {/* <span className="input-group-append border-left-0" style={{backgroundColor:"black"}}>
                        <Link 
                            className="input-group-text bg-transparent text-white rounded-0"
                            to={`/search/${this.state.query}`}
                        >
                            <HiOutlineSearch size={20} />
                        </Link>
                    </span> */}
                    <div class="input-group-append">
                        <Link to={`/search/${this.state.query}`}>
                            <button 
                                class="btn text-white border-left-0 rounded-0"
                                style={{borderColor:"#ced4da"}}
                            >
                                <HiOutlineSearch size={20} />
                            </button>
                        </Link>
                    </div>
                </div>
            </form>
        );
    }
}