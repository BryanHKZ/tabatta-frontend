import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //Redirect,

import "./index.css";

// import ExerciseState from "./context/ejercicios/exerciseState";
// import AuthState from "./context/autenticacion/authState";
// import TabattaState from "./context/tabatta/tabattaState";

import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import Tabatta from "./views/tabatta/Tabatta";

// const token = localStorage.getItem("token");

const App = () => {
  return (
    // <AuthState>
    //   <TabattaState>
    //     <ExerciseState>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/tabatta" component={Tabatta} />
      </Switch>
    </Router>
    //     </ExerciseState>
    //   </TabattaState>
    // </AuthState>
  );
};

export default App;
