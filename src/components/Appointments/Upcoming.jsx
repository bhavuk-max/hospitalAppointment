import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
class Upcoming extends React.Component {
  state = { table: [] };
  componentDidMount() {
    // http://hospitalappointment/getData.php
    const url = "http://hospitalappointment/Upcoming.php";
    axios({
      method: "get",
      url: `${url}`,
      headers: { "content-type": "application/json" },
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
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.table.map((x, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{x.FullName}</td>
                <td>{x.PhoneNo}</td>
                <td>{x.Address}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Upcoming;
