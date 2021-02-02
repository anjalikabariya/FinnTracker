import React, { Component } from 'react'
import {Navigation, Register, Login} from './components'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import {HomePage, NewsPage, TrackerPage} from './Pages';
// import firebase from './firebase';
// firebase.firestore().collection('transactions').delete({
//   id:1,
//   type:"Sale",
//   amount:100,
//   stockName: "APPLE",
//   date:new Date("20 Jan 2021")
// })

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