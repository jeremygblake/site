import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from "./components/HomePage.component";


function App() {
  return (
    <Router>
      <Navbar/>
      <Route path="/" exact component = {HomePage}/>
    </Router>
  );
}

export default App;
