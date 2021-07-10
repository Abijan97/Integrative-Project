
import React from "react";

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from "./components/Dashboard/Dashboard";


import SignIn from "./components/SignUp/login.component";
import Signup from "./components/SignUp/signup.component";
import CreateSensor from "./components/Dashboard/addSensor.component";
import { Home } from "./components/Dash/home.component";

function App() {
  return (

    <Router>
      
      <Route path="/" exact component={SignIn}/>
      <Route path="/signup" exact component={Signup}/>
      <Route path="/home" exact component={Home}/>
     
    </Router>
  );
}

export default App;
