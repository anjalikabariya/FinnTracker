import React, {useState, useEffect } from 'react'
import {Navigation, Register, Login} from './components'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import {HomePage, NewsPage, TrackerPage} from './Pages';
import {CircularProgress} from '@material-ui/core';
import firebase from './firebase'


const App = (props) => {
  
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val)
    })
  }, [])
    return firebaseInitialized !== false ? (
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
              render={<Login />}
            />
            <Route
              path="/register"
              render={<Register />}
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
    ) : <CircularProgress />
}

export default App;