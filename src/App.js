import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Home from './Components/Home';
import Play from './Components/Play';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/play" component={Play} />
        </Switch>
      </Router>
    );
  }
}

export default App;
