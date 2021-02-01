import React, {Component} from 'react'
import {HiOutlineSearch} from 'react-icons/hi'

export class SearchBox extends Component {
    render() {
        return (
            <form className="form-inline my-2 my-lg-0">
                <div className="input-group">
                    <input 
                        className="form-control rounded-0 text-white border-right-0"
                        type="search"
                        placeholder="Search by title, description or genre... "
                        style={{backgroundColor:"black", width:340}}
                    />
                    <span className="input-group-append border-left-0" style={{backgroundColor:"black"}}>
                        <a className="input-group-text bg-transparent text-white" href="/">
                            <HiOutlineSearch size={22}/>
                        </a>
                    </span>
                </div>
            </form>
        );
    }
}