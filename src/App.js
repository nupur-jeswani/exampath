import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from "./components/Navbar/nav";
import Signup from "./components/Auth/signup";
import ForgotPassword from "./components/Auth/forgotPassword";
import { AuthProvider } from "./components/Auth/AuthContext";
import Login from "./components/Auth/login";
import PrivateRoute from "./components/privateRoutes";
import { Gre } from "./components/Examinations/gre";
import About from "./components/About/about";
import Homepage from "./components/HomePage/homepage";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Nav />
          <Switch>

            <Route exact path="/">
              <Homepage />
            </Route>

            <Route exact path="/signup">
              <Signup />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/forgotpassword">
              <ForgotPassword />
            </Route>

            <PrivateRoute exact path="/examinations/gre" component={Gre} />
            <PrivateRoute exact path="/about" component={About} />

          </Switch>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
