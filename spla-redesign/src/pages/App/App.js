import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className='app'>
        <div className="site-content">
        <Header />
        <h1>Hello World</h1>
        <Button />
      </div>
      <Footer />
      </div>
    );
  }
}

export default App;
