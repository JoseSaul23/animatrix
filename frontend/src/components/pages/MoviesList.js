import React, {Component} from 'react'
import {MoviesMiniCarousel} from '../MoviesMiniCarousel'

export class MoviesList extends Component {
    render() {
        return (
            <div className="text-white">
                <MoviesMiniCarousel 
                    genre_id="1"
                    genre_name="Fantasy"
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