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
import EditProfile from "./components/EditProfile/EditProfile";
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
import Patient_details from "./components/mycomponent/DashBoard/Patient_details";
import CheckOut from "./components/mycomponent/Pharmacy/CheckOut";
import ArticleDetails from "./components/Articles/ArticleDetails";
import Check from "./components/mycomponent/Pharmacy/Pharmacy_main";
import Payment from "./components/mycomponent/Payment/Payment";

function App() {
  console.log(localStorage.getItem("UserId"));
  const userId = localStorage.getItem("UserId");

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

          <Route path="/ResetPassword" exact strict component={ResetPassword} />
          <Route path="/Chat" exact strict component={Chat} />
          <div>
            <Navbar />
            <Route path="/Payment" exact strict component={Payment} />
            <Route exact path="/Pharmacy" exact strict component={Check} />
            <Route path="/EditProfile" exact strict component={EditProfile} />
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
            <Route path="/Patient" exact strict component={Patient_details} />
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

            <Route path="/Dashboard" exact strict component={Patient_details} />
            <Route exact path="/CheckOut" exact strict component={CheckOut} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;