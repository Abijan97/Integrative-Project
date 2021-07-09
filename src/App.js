
import React from "react";

import {BrowserRouter as Router, Route} from 'react-router-dom';

import SignIn from "./components/SignUp/login.component";

function App() {
  return (

    <Router>
      <Route path="" exact component={SignIn}/>
    </Router>
  );
}

export default App;
