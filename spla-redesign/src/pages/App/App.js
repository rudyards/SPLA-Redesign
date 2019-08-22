import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
