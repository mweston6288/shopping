import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./pages/Home"
import ShoppingCart from "./pages/ShoppingCart"
import Nav from "./components/nav"
function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shoppingCart" component={ShoppingCart}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
