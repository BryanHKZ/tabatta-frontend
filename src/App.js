import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //Redirect,

import "./index.css";

import ExerciseState from "./context/ejercicios/exerciseState";
import AuthState from "./context/autenticacion/authState";
import TabattaState from "./context/tabatta/tabattaState";
import AlertaState from "./context/alertas/alertaState";
import UserState from "./context/user/userState";

import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import Tabatta from "./views/tabatta/Tabatta";
import RutaPrivada from "./views/rutas/RutaPrivada";
import EditPassword from "./views/password/EditPassword";
import ValidateEmail from "./views/password/ValidateEmail";
import User from "./views/user/User";

const App = () => {
  console.log(UserState)
  return (
    <AlertaState>
      <AuthState>
        <TabattaState>
          <ExerciseState>
            <UserState>
              <Router>
                <Switch>
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/editPassword" component={EditPassword} />
                  <Route
                    exact
                    path="/validateEmail"
                    component={ValidateEmail}
                  />
                  <RutaPrivada exact path="/tabatta" component={Tabatta} />
                  <RutaPrivada exact path="/tabatta/user" component={User} />
                </Switch>
              </Router>
            </UserState>
          </ExerciseState>
        </TabattaState>
      </AuthState>
    </AlertaState>
  );
};

export default App;
