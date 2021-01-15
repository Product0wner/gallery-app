import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

//React compontent are loaded
import RouteHandling from './components/Routing';
import PageNotFound from './components/PageNotFound';
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';


export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>  
          <SearchForm/>
          <Nav/>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/search/diversity"/>} />
            <Route exact path="/search/" render={() => <Redirect to="/search/diversity"/>} />
            <Route exact path="/search/:query" component={RouteHandling}/>
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}
