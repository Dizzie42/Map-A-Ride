import React from "react";
import { AuthProvider } from "../../context/AuthContext";
import { UserProvider } from "../../context/UserContext";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Notifications from "react-notify-toast";
//components
import SignIn from "../Signin/index";
import SignUp from "../Signup/index";
import Dashboard from "../Dashboard/index";
import PrivateRoute from "../shared/PrivateRoute";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Notifications />
        <UserProvider>
          <Router>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/login" />} />
              <Route exact path="/login" component={SignIn} />
              <Route exact path="/sign-up" component={SignUp} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route render={() => <Redirect to="/dashboard" />} />
            </Switch>
          </Router>
        </UserProvider>
      </div>
    </AuthProvider>
  );
}

export default App;
