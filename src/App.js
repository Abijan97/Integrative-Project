
import React from "react";

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from "./components/Dashboard/Dashboard";


import SignIn from "./components/SignUp/login.component";
import Signup from "./components/SignUp/signup.component";
import Chart from "./components/Dashboard/chart";

function App() {
  return (

    <Router>
      
      <Route path="/signin" exact component={SignIn}/>
      <Route path="/signup" exact component={Signup}/>
      <Route path="/dashboard" exact component={Dashboard}/>
      <Route path="/chart" exact component={Chart}/>
    </Router>
  );
}

export default App;
