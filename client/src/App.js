import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavbarMenu from './components/navbar/navbar';
import About from './components/about/about';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarMenu />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
