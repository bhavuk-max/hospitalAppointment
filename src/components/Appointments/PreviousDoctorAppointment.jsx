import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
class PreviousDoctorAppointment extends React.Component {
  state = {
    table: [],
    Patient_ID: localStorage.getItem("Patient_ID"),
    Status: "",
    show: false,
    Appointment_ID: null,
  };
  render() {
    return <div></div>;
  }
}

export default PreviousDoctorAppointment;
