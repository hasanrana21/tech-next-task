import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Shared/Navbar/Navbar';
import Home from './Components/HomePage/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/about">
            
          </Route>
          <Route path="/users">
            
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
