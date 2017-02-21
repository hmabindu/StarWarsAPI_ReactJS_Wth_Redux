import React from 'react';
import {Route, IndexRoute,browserHistory,Router } from 'react-router';

import App from './components/app';
import Films from './containers/films';
import FilmPage from './containers/filmPage';
import StarShips from './containers/starships';
import {Home} from "./components/home";

export default (
    <Router history={browserHistory}>
    <Route path={"/"} component={App}>
        <IndexRoute component={Home}/>
        <Route path={"films"} component={Films}/>
        <Route path={"/films/:id"} component={FilmPage}/>
        <Route path={"starships"} component={StarShips}/>
    </Route>
    </Router>
);
