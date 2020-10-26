import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

/* 
TODO - route the paths to the corresponding "pages" (main route calls all of the employees from the json file, )

TODO - Sort the table by at least one category (Have a form that listens and calls a component to Sort the array of objects based on category given)

TODO - In the form listen for the filter (maybe a select option of a given property, such as work, department)

TODO - hello I am a todo :)
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </header>
    </div>
  );
}

export default App;
