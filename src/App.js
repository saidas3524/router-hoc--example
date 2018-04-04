import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Home, Route2, Route1,Route3,Header } from './Components';
import { Redirect, Switch, Route } from 'react-router-dom';
import HOC from './HOC';

class App extends Component {
  render() {

    var HOC2 = HOC(Header);
    return (
      <div className="App">
      <HOC2 />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/route1' component={Route1} />
          <Route path='/route1/:number' component={Route3} />

          <Route path='/route2' component={Route2} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
