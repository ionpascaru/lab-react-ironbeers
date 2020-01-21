import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BeerService from "./services/BeerService.js";
import Home from "./components/Home.js";
import Header from "./components/Header.js";
import List from "./components/List.js";
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/list" component={List}/>
        {/* <Route exact path="/random" component={Random}/>
        <Route exact path="/detail" component={Detail}/> */}
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
