import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import signUp from "./components/Signup/signUp";
import Login from "./components/login/login";
import Home from "./components/Home/Home";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ForgotPassword/ResetPassword";
import PatientDetails from "./components/PatientDetails/PatientDetails";
import Doctor from "./components/Doctor/Doctor";
import Navbar from "./components/Navbar/Navbar";
import Patient from "./components/Patient/Patient";
import Chat from "./components/Chat/Chat";
import Upcoming from "./components/Appointments/Upcoming";
import BookAppointment from "./components/mycomponent/BookAppointment/BookAppointment";
import Article from "./components/Articles/Article";
import Contact from "./components/ContactUs/ContactUs";
import About from "./components/About/About";
import UpcomingPatientAppointment from "./components/mycomponent/UpcomingPatientAppointment/UpcomingPatientAppointment";
import Pharmacy from "./components/mycomponent/Pharmacy/Pharmacy";
import Patient_details from "./components/mycomponent/DashBoard/Patient_details";
import CheckOut from "./components/mycomponent/Pharmacy/CheckOut";
import Check from "./components/mycomponent/Pharmacy/check";
import Grid from "./components/mycomponent/Pharmacy/grid";
import Stopka from "./components/mycomponent/Pharmacy/stopka";
import ArticleDetails from "./components/Articles/ArticleDetails";
// import Navbar from "./components/mycomponent/Navbar";
// import { Patient_details } from "./components/mycomponent/Patient_details";

function App() {
  console.log(localStorage.getItem("UserId"));
  const userId = localStorage.getItem("UserId");
  // const loginForm = <Redirect to="/login" />;
  // const home = <Redirect exact to="/Home" />;

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" exact strict component={Login} />
          <Route path="/signUp" exact strict component={signUp} />

          <Route
            path="/ForgotPassword"
            exact
            strict
            component={ForgotPassword}
          />
          <Route
            path="/PatientDetails"
            exact
            strict
            component={PatientDetails}
          />
          <Route path="/ResetPassword" exact strict component={ResetPassword} />
          <Route path="/Chat" exact strict component={Chat} />
          <div>
            <Navbar />

            <Route
              path="/articleDetails"
              exact
              strict
              component={ArticleDetails}
            />
            <Route path="/Upcoming" exact strict component={Upcoming} />
            <Route path="/Article" exact strict component={Article} />
            <Route path="/About" exact strict component={About} />
            <Route path="/Contact" exact strict component={Contact} />
            <Route path="/" exact strict component={Home} />
            <Route path="/Doctor" exact strict component={Home} />
            <Route path="/Patient" exact strict component={Home} />
            <Route
              path="/BookAppointment"
              exact
              strict
              component={BookAppointment}
            />
            <Route
              path="/UpcomingPatientAppointment"
              exact
              strict
              component={UpcomingPatientAppointment}
            />

            <Route path="/Pharmacy" exact strict component={Pharmacy} />
            <Route
              path="/Patient_details"
              exact
              strict
              component={Patient_details}
            />
            <Route exact path="/CheckOut" exact strict component={CheckOut} />
            <Route exact path="/Check" exact strict component={Check} />
            <Route exact path="/Stopka" exact strict component={Stopka} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
