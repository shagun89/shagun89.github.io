import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dp from './containers/Dp';
import abc from './containers/Dp/abc'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Dp} />
            <Route exact path='/shagun:email' component={abc} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
