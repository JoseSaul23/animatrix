import React, {Component} from 'react'
import {HiOutlineSearch} from 'react-icons/hi'

export class SearchBox extends Component {
    render() {
        return (
            <form className="form-inline my-2 my-lg-0">
                <div className="input-group">
                    <input 
                        className="form-control rounded-0 text-white border-right-0 d-none d-sm-block"
                        type="search"
                        placeholder="Search by title, description or genre... "
                        style={{backgroundColor:"black", width:340}}
                    />
                    {/* MOBILE SEARCH BOX INPUT */}
                    <input 
                        className="form-control rounded-0 text-white border-right-0 d-block d-sm-none"
                        type="search"
                        placeholder="Search... "
                        style={{backgroundColor:"black", width:120}}
                    />
                    <span className="input-group-append border-left-0" style={{backgroundColor:"black"}}>
                        <a className="input-group-text bg-transparent text-white rounded-0" href="/">
                            <HiOutlineSearch size={20}/>
                        </a>
                    </span>
                </div>
            </form>
        );
    }
}