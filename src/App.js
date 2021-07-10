
import React from "react";

import {BrowserRouter as Router, Route} from 'react-router-dom';


import SignIn from "./components/SignUp/login.component";
import Signup from "./components/SignUp/signup.component";
import CreateSensor from "./components/Dashboard/addSensor.component";
import { Home } from "./components/Dash/home.component";
import { Navbar } from "./components/Navbar/navbar.component";
import Footer from "./components/Dashboard/footercomponent";

function App() {
  return (

    

    <Router>
      <Navbar/>
      
      <Route path="/" exact component={SignIn}/>
      <Route path="/signup" exact component={Signup}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/home/sensor" exact component={CreateSensor}/>
    
    
     <Footer/>
    </Router>
  );
}

export default App;
