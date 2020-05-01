import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Pages
import Error404 from '../pages/error404';
import Home from '../pages/home';
import Movie from '../pages/movie';
import NewMovies from '../pages/new-movies';
import Popular from '../pages/popular';
import Search from '../pages/search';


export default function Routing(){
    return(
        <Router>
          <Switch>
            <Route path="/" exact={true}>
              <Home></Home>
            </Route>
            
            <Route path="/new-movies" exact={true}>
              <NewMovies></NewMovies>
            </Route>

            <Route path="/popular" exact={true}>
              <Popular></Popular>
            </Route>

            <Route path="/search" exact={true}>
              <Search></Search>
            </Route>

            <Route path="/movie/:id" exact={true} >
              <Movie></Movie>
            </Route>

            <Route path="*">
              <Error404></Error404>
            </Route>
          </Switch>        
      </Router>
    );
}