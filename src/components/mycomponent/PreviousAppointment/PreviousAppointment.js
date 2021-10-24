import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
class PreviousAppointment extends React.Component {
  state = { table: [], Patient_ID: localStorage.getItem("Patient_ID") };
  componentDidMount() {
    // http://hospitalappointment/getData.php
    const { Patient_ID } = this.state;
    const url = "http://hospitalappointment/Request_data.php";
    axios({
      method: "post",
      url: `${url}`,
      headers: { "content-type": "application/json" },
      data: { Patient_ID: Patient_ID },
    })
      .then((result) => {
        console.log(result.data);
        if (result) {
          this.setState({ table: result.data });
        }
      })
      .catch((error) => this.setState({ error: error.message }));
  }
  render() {
    return (
      <div>
        <h3>Upcoming Appointment</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Phone No</th>
              <th>Category</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {this.state.table.map((x, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{x.FullName}</td>
                <td>{x.PhoneNo}</td>
                <td>{x.Qualification}</td>
                <td>{x.Date}</td>
                <td>{x.Time}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default PreviousAppointment;
