import React, {Component} from 'react'
import {MoviesMiniCarousel} from '../MoviesMiniCarousel'
import {MoviesCarousel} from '../MoviesCarousel'

export class Home extends Component {
    render() {
        return (
            <div className="text-white">
                <MoviesCarousel />
                {/* <LastAddedMiniCarousel /> */}
                <MoviesMiniCarousel 
                    genre_id="1"
                    genre_name="Last Added"
                />
                <MoviesMiniCarousel
                    genre_id="1"
                    genre_name="Steampunk"
                />
                <MoviesMiniCarousel
                    genre_id="1"
                    genre_name="Action"
                />
            </div>
        );
    }
}