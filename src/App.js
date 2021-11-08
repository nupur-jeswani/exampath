import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from "./components/Navbar/nav";
import Signup from "./components/Auth/signup";
import ForgotPassword from "./components/Auth/forgotPassword";
import { AuthProvider } from "./components/Auth/AuthContext";
import Login from "./components/Auth/login";
import PrivateRoute from "./components/privateRoutes";
import { Gre } from "./components/Examinations/gre";
import { Gmat } from "./components/Examinations/gmat";
import About from "./components/About/about";
import Homepage from "./components/HomePage/homepage";
import { useAuth } from "./components/Auth/AuthContext";
import LandingPage from "./components/LandingPage/landing";

function App() {
  const { currentUser } = useAuth();

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <NavBar />
          <Switch>

            <Route exact path="/">
              { currentUser ? <Homepage /> : <LandingPage/> }
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
            <PrivateRoute exact path="/examinations/gmat" component={Gmat} />
            <PrivateRoute exact path="/about" component={About} />

          </Switch>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
