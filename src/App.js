import React from 'react';
import './App.css';
import './Infromation.css'
// import './Contactus.css'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbarn from './Navbarn';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from "./Home"
import About from "./About"
import Contactus from './Contactus';
import Information from './Information';
// import Menu from './Menu';
function App() {
  return (
    <div className="App">
      {/* <Menu/> */}
      <Router>
        <Navbarn/>
        <Switch>
         <Route exact path='/' component={Home}/>
         <Route path='/about' component={About}/>
         <Route path='/contactus' component={Contactus}/>
         <Route path='/infromation' component={Information}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
