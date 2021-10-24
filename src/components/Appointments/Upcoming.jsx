import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
class Upcoming extends React.Component {
  state = { table: [], Doctor_ID: localStorage.getItem("Doctor_ID") };
  componentDidMount() {
    const { Doctor_ID } = this.state;
    // http://hospitalappointment/getData.php
    const url = "http://hospitalappointment/Upcoming.php";
    axios({
      method: "post",
      url: `${url}`,
      headers: { "content-type": "application/json" },
      data: { Doctor_ID: Doctor_ID },
    })
      .then((result) => {
        console.log(result);
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
              <th>Phone Number</th>
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

export default Upcoming;
