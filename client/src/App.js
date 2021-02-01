import React, { Component } from 'react'
import {Navigation, Register, Login} from './components'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import {HomePage, NewsPage, TrackerPage} from './Pages';


export class App extends Component {
  
  render() {
    return (
      <div>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" render={() => {
              return (
                <Redirect to="/home" />)}}
            />
            <Route
              path="/login"
              render={(props) => <Login />}
            />
            <Route
              path="/register"
              render={(props) => <Register />}
            />
            <Route
              path="/home"
              render={(props) => <HomePage {...props} />}
            />
            <Route
              path="/news"
              render={(props) => <NewsPage {...props} />}
            />
            <Route
              path="/tracker"
              render={(props) => <TrackerPage {...props} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;