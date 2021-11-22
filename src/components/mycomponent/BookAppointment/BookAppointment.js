import React, { useState } from "react";
import { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
// import "./NavbarCommon.css";
import "./Com.css";
import how from "./how.png";
import Sidebar from "../Sidebar/Sidebar";
import GooglePayButton from "@google-pay/button-react";
import Payment from "./Payment";
class BookAppointment extends Component {
  constructor(props) {
    super(props);
    this.AfterBook = this.AfterBook.bind(this);

    this.submitHandler = this.submitHandler.bind(this);
  }

  state = {
    category: "",
    send_doc: "",
    send_date: "",
    send_time: "",
    paymentSuccess: true,
    doctors: [],
    Patient_ID: localStorage.getItem("Patient_ID"),
    doctorFees: null,
    booked: false,
  };

  doctorList() {
    const { category } = this.state;
    const url2 = "http://hospitalappointment/Doctors.php";
    axios({
      method: "post",
      url: `${url2}`,
      headers: { "content-type": "application/json" },
      data: { category: category },
    })
      .then((result) => {
        if (result) {
          this.setState({ doctors: result.data, send_doc: "" });
        }
      })
      .catch((error) => this.setState({ error: error.message }));
  }
  submitHandler(e) {
    const { category, send_doc, send_date, send_time, Patient_ID, doctorFees } =
      this.state;
    this.setState({ booked: true });
    const url = "http://hospitalappointment/BookAppointDta.php";

    if (
      category &&
      send_doc &&
      send_date &&
      send_time &&
      Patient_ID &&
      doctorFees
    ) {
      axios({
        method: "post",
        url: `${url}`,
        headers: { "content-type": "application/json" },
        data: this.state,
      })
        .then((response) => {
          console.log(response);

          this.setState({ category: "", send_doc: "" });
        })
        .catch((error) => this.setState({ error: error.message }));
    }
  }

  AfterBook() {
    alert("You are about to book your appointment");
  }
  handleClose() {
    this.setState({ booked: false });
  }

  render() {
    const { doctors, category, send_doc, paymentSuccess, doctorFees, booked } =
      this.state;
    console.log(doctorFees);
    return (
      <div>
        {booked ? (
          <div>
            <div className="alert alert-success bookAlert" role="alert">
              <strong>Appointment Successfully Booked!!</strong>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() => this.handleClose()}
              ></button>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="PreviousAppointment">
          <h6>BOOK YOUR APPOINTMENT</h6>
        </div>

        <div className="BookAppointment">
          <div className="category">
            <h5> Category:-</h5>
          </div>

          {/* <div>TELL US ABOUT YOUR HEALTH:-</div> */}
          <select
            className="form-select form-select-sm w-25 p-3 mh-25"
            id="select-one-problem"
            aria-label=".form-select-sm example"
            // value={category}
            // onChange={(event) => this.handleEvent(event)}
            onChange={(event) =>
              this.setState({ category: event.target.value, doctors: [] }, () =>
                this.doctorList()
              )
            }
          >
            <option value="start" selected>
              Select Problem Here
            </option>
            <option value="Heart">Heart</option>
            <option value="Bone">Bone</option>
            <option value="Acne">Acne</option>
            <option value="Skin">Skin</option>
            <option value="Back Pain">Back Pain</option>
            <option value="Leg Pain">Leg Pain</option>
          </select>

          <div className="Available Doctors">
            <h5 className="doctors-list">Doctors list:-</h5>
            <select
              className="form-select form-select-sm w-25 p-3 mh-25"
              value={send_doc}
              id="select-one-doctor"
              aria-label=".form-select-sm example"
              onChange={(event) =>
                this.setState({ send_doc: event.target.value }, () =>
                  this.setState({
                    doctorFees: doctors.find(
                      (x) => x.Doctor_ID === this.state.send_doc
                    ).Doctor_Fee,
                  })
                )
              }
            >
              {" "}
              <option value="" disabled selected>
                Select Doctors
              </option>
              {doctors.map((x) => (
                <option value={x.Doctor_ID} key={x.Doctor_ID}>
                  {x.FullName}
                </option>
              ))}
            </select>
          </div>
          <div className="data-picker ">
            <h5 className="h3-select-date">Select date:-</h5>

            <input
              type="date"
              selected={this.state.send_date}
              onChange={(event) =>
                this.setState({ send_date: event.target.value })
              }
              className="Datepicker"
            ></input>
          </div>
          <div>
            <h5 className="select-time">Select time:-</h5>
          </div>
          <div className="time-pickme">
            <input
              type="time"
              selected={this.state.send_time}
              onChange={(event) =>
                this.setState({ send_time: event.target.value })
              }
              className="Timepicker"
            ></input>
          </div>

          <div >
            <button
              disabled={paymentSuccess}
              className="btn btn-primary"
              id="button-book-appointment"
              onClick={(e) => this.submitHandler(e)}
            >
              Book Appointment
            </button>
            <div id="google-pay">
            <Payment
            id="google-pay"
              doctorFees={doctorFees}
              paymentSuccess={(event) => {
                if (event.paymentMethodData.tokenizationData.token)
                  this.setState({ paymentSuccess: false });
              }}
            />
            </div>
          </div>
        </div>
        <div className="column-how">
          <img src={how} alt="how it works" style={{ width: "100%" }}></img>
        </div>
        <div className="how-text">
          <p>Choose the category</p>
          <p>Choose the doctor</p>
          <p> Select Date and Time</p>
          <p>Then Book your Appointment</p>
        </div>
      </div>
    );
  }
}

export default BookAppointment;
