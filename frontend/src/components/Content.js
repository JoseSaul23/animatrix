import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {MoviesList} from './pages/MoviesList'
import {GenresList} from './pages/GenresList'

export class Content extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/movies" component={MoviesList} />
                    <Route exact path="/genres" component={GenresList} />
                </Switch>
            </div>
        );
    }
}