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
import { Gate } from "./components/Examinations/gate";
import { Cat } from "./components/Examinations/cat";
import { Ielts } from "./components/Examinations/ielts";
import About from "./components/About/about";
import Homepage from "./components/HomePage/homepage";
import { useAuth } from "./components/Auth/AuthContext";
import LandingPage from "./components/LandingPage/landing";
import Universities from "./components/Universities/universities";
import { Toefl } from "./components/Examinations/toefl";
import Footer from "./components/Footer/footer";

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
            <PrivateRoute exact path="/examinations/gate" component={Gate} />
            <PrivateRoute exact path="/examinations/cat" component={Cat} />
            <PrivateRoute exact path="/examinations/ielts" component={Ielts} />
            <PrivateRoute exact path="/examinations/toefl" component={Toefl} />
            <PrivateRoute exact path="/about" component={About} />
            <PrivateRoute exact path="/universities" component={Universities} />

          </Switch>
        <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
