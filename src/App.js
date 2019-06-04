import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Register from './containers/Board/register';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Register} />
            

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
