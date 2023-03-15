import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Header from "./Header"
import Home from "./Home";
import Journal from "./Journal";
import Chakras from "./Chakras";
import ChakraDetail from './ChakraDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/journal">
          <Journal />
        </Route>
        <Route exact path="/chakras/:id">
          <ChakraDetail />
        </Route>
        <Route exact path="/chakras">
          <Chakras />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
