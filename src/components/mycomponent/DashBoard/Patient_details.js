import React, { Component } from "react";
import cough from "../DashBoard/cough.jpg";
import skin from "../DashBoard/skin.jpg";
import heart from "../DashBoard/heart.jpg";
import lose from "../DashBoard/lose.jpg";
import back from "../DashBoard/back.jpg";
import doctor from "../DashBoard/doctor.jpg";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "../DashBoard/patient_css.css";
//import Sidebar from "./Sidebar/";
class Patient_details extends Component {
  render() {
    return (
      <>
        {/* <Sidebar /> */}
        {/* <div className="pat_details">
          {/* <ul>
            <li>Name:-</li>
            <li>Age:-</li>
            <li>Weight:-</li>
            <li>Problem:-</li>
            <li>Address:-</li>
            <li>Contact</li>
          </ul> 
        </div> */}
        <div className="column-0">
          <img src={doctor} alt="cough" style={{ width: "100%" }}></img>
        </div>
        <div className="rows">
          <p id="problem-front">
            Having Problem..? Consult your Problem with our Top Doctors
          </p>
          <div className="column" id="front-images-1">
            <Link to="/BookAppointment" className="front-links">
              <img src={cough} alt="cough" style={{ width: "100%" }}></img>
              <h6>
                <b>Cough and Cold</b>
              </h6>
              Consult Now
            </Link>
          </div>
          <div className="column" id="front-images-2">
            <Link to="/BookAppointment" className="front-links">
              <img
                src={skin}
                alt="skin problem"
                style={{ width: "100%" }}
              ></img>
              <h6>
                <b>Skin Problem</b>
              </h6>
              Consult Now
            </Link>
          </div>
          <div className="column">
            <Link to="/BookAppointment" className="front-links">
              <img
                src={heart}
                alt="heart problem"
                style={{ width: "100%" }}
              ></img>
              <h6>
                <b>Heart Problem</b>
              </h6>
              Consult Now
            </Link>
          </div>
          <div className="column">
            <Link to="/BookAppointment" className="front-links">
              <img src={lose} alt="lose weight" style={{ width: "100%" }}></img>
              <h6>
                <b>Lose Weight</b>
              </h6>
              Consult Now
            </Link>
          </div>
          <div className="column">
            <Link to="/BookAppointment" className="front-links">
              <img src={back} alt="back pain" style={{ width: "100%" }}></img>
              <h6>
                <b>Back Pain</b>
              </h6>
              Consult Now
            </Link>
          </div>

          {/* <img src={skin} alt="skin problems" id="front-images-2" className="front-images"></img>  */}
          {/* <img src={photo3}></img>  */}
          {/* </div>
        <div className="Front_links">
          <Link
            to="/mycomponent/BookAppointment"
            className="btn btn-primary link1"
          >
            Book Appointment
          </Link>
        </div>
        <div className="Front_links">
          {" "}
          <Link
            to="/mycomponent/PreviousAppointment"
            className="btn btn-primary link2"
          >
            My Appointment
          </Link>
        </div>
        <div className="Front_links">
          {" "}
          <Link to="/mycomponent/Pharmacy" className="btn btn-primary link3">
            Pharmacy
          </Link> */}
          {/* <Link to="/mycomponent/BookAppointment" className="btn btn-primary">Book Appointment</Link> */}
        </div>
      </>
    );
  }
}

export default Patient_details;
