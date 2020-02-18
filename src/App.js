import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import HomePage from "./components/homepage.component";

function App() {
  return (
    <Router>

      <Route path="/site/" exact component = {HomePage}/>
    </Router>

  );
}

export default App;
