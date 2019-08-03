import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/navbar';
import AboutUs from  './components/about-us';
import ContactUs from './components/contact-us';
import Home from './components/home-page';

import './css/style.css';

class App extends Component {
  render() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />

        <Switch>
          <Route exact path="/" render ={Home} />
          <Route exact path="/about-us" render={AboutUs} />
          <Route exact path="/contact-us" render={ContactUs} />
        </Switch>
      </div>
      </BrowserRouter>
  );
  }
}

export default App;
