import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

/* 
TODO - Sort the table by at least one category (Have a form that listens and calls a component to Sort the array of objects based on category given)

TODO - In the form listen for the filter (maybe a select option of a given property, such as work, department)
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Employee Directory</h1>
        <br />
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </header>
    </div>
  );
}

export default App;
