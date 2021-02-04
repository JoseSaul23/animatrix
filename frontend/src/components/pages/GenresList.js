import React, {Component} from 'react'
import {Genre} from '../Genre'

export class GenresList extends Component {
    render() {
        return (
            <div className="text-white">
                <div className="container mt-4">
                    <h5 className="my-4">Genres</h5>
                    <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-4">
                        <div className="col pr-1">
                            <Genre 
                                id="1"
                                name="Fantasy"
                                thumbnail="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                            />
                        </div>
                        <div className="col pr-1">
                            <Genre 
                                id="1"
                                name="Fantasy"
                                thumbnail="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                            />
                        </div>
                        <div className="col pr-1">
                            <Genre 
                                id="1"
                                name="Fantasy"
                                thumbnail="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                            />
                        </div>
                        <div className="col pr-1">
                            <Genre 
                                id="1"
                                name="Fantasy"
                                thumbnail="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                            />
                        </div>
                        <div className="col pr-1">
                            <Genre 
                                id="1"
                                name="Fantasy"
                                thumbnail="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                            />
                        </div>
                        <div className="col pr-1">
                            <Genre 
                                id="1"
                                name="Fantasy"
                                thumbnail="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                            />
                        </div>
                        <div className="col pr-1">
                            <Genre 
                                id="1"
                                name="Fantasy"
                                thumbnail="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                            />
                        </div>
                        <div className="col pr-1">
                            <Genre 
                                id="1"
                                name="Fantasy"
                                thumbnail="http://i3.ytimg.com/vi/ldYJ916tqJY/hqdefault.jpg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}