import React, { Component } from "react";
import ViewAppointment from "../Appointments/ViewAppointments";
import Example from "../Appointments/Accordian";
class Doctor extends React.Component {
  render() {
    return (
      <div>
        <h1> Doctor Ui</h1>

        <Example />
      </div>
    );
  }
}

export default Doctor;
