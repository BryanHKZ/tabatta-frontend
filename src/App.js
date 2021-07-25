import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// import ExerciseState from "./context/ejercicios/exerciseState";
// import AuthState from "./context/autenticacion/authState";
// import TabattaState from "./context/tabatta/tabattaState";

import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Register from "./views/register/Register";

// const token = localStorage.getItem("token");

const App = () => {
  return (
    // <AuthState>
    //   <TabattaState>
    //     <ExerciseState>
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          exact
          path="/login"
          component={Login}
        />
        <Route
          exact
          path="/register"
          component={Register}
        />
      </Switch>
    </Router>
    //     </ExerciseState>
    //   </TabattaState>
    // </AuthState>
  );
};

export default App;
