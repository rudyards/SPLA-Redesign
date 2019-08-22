import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <h1>Hello World</h1>
        <img src="//static1.squarespace.com/static/582dc9ea6a4963e5091cd8cd/t/58eeee60414fb57371fdf24d/1561049620762/?format=1500w" alt="Safe Parking LA" class="Header-branding-logo"></img>
      </div>
    )
  }
}

export default App;
