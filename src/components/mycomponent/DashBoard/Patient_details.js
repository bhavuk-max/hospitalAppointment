import React, { Component } from "react";
import cough from "../DashBoard/cough.jpg";
import skin from "../DashBoard/skin.jpg";
import heart from "../DashBoard/heart.jpg";
import lose from "../DashBoard/lose.jpg";
import back from "../DashBoard/back.jpg";
import Banner from "../DashBoard/Banner.png";
import Covid from "../DashBoard/Covid.jpg";
 import Healthy from "../DashBoard/Healthy.jpg";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "../DashBoard/patient_css.css";
class Patient_details extends Component {
  render() {
    return (
      <>
      <div className="Dashboard">
      <div className="column-02">
          <img src={Healthy} alt="DocPat" style={{ width: "100%" }}></img>
        </div>
     <div className="column-01">
          <img src={Covid} alt="Covid Rules" style={{ width: "100%" }}></img>
        </div>
        <div className="column-0">
          <img src={Banner} alt="Banner" style={{ width: "100%" }}></img>
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
        </div>
        </div>
      </>
    );
  }
}

export default Patient_details;