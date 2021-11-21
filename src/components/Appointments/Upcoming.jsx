import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Badge, OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import "./Upcoming.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
class Upcoming extends React.Component {
  state = {
    table: [],
    Doctor_ID: localStorage.getItem("Doctor_ID"),
    Status: "",
    show: false,
    Appointment_ID: null,
  };
  componentDidMount() {
    this.getData();
  }
  getData() {
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
          localStorage.setItem("Appointment_ID", result.data[0].Appointment_ID);
          this.setState({ table: result.data });
        }
      })
      .catch((error) => this.setState({ error: error.message }));
  }
  MarkComplete() {
    const url = "http://hospitalappointment/MarkComplete.php";
    axios({
      method: "post",
      url: `${url}`,
      headers: { "content-type": "application/json" },
      data: { Status: "Completed", Appointment_ID: this.state.Appointment_ID },
    })
      .then((result) => {
        if (result) {
          this.setState({ show: false }, () => this.getData());
        }
      })
      .catch((error) => this.setState({ error: error.message }));
  }
  getStatus(status) {
    if (status === "Pending") {
      return (
        <Badge pill bg="warning" text="dark">
          {status}
        </Badge>
      );
    } else if (status === "Completed") {
      return (
        <Badge pill bg="success">
          {status}
        </Badge>
      );
    } else {
      return (
        <Badge pill bg="danger">
          {status}
        </Badge>
      );
    }
  }
  handleShow(Appointment_ID) {
    this.setState({ show: true, Appointment_ID });
  }
  handleClose() {
    this.setState({ show: false });
  }
  render() {
    const { show } = this.state;
    return (
      <div>
        <Modal show={show} onHide={() => this.handleClose()}>
          <Modal.Body>
            Are you sure you want to mark appointment completed?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleClose()}>
              No
            </Button>
            <Button variant="primary" onClick={() => this.MarkComplete()}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
        <h3>Appointments</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Action</th>
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
                <td>{this.getStatus(x.Status)}</td>
                {x.Status === "Pending" ? (
                  <td>
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip id="button-tooltip-2">Mark completed</Tooltip>
                      }
                    >
                      <i
                        className="fas fa-check-circle complete"
                        // onClick={() => this.cancelAppointment(x.Appointment_ID)}
                        onClick={() => this.handleShow(x.Appointment_ID)}
                      ></i>
                    </OverlayTrigger>
                  </td>
                ) : (
                  <div style={{ padding: 20 }}></div>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Upcoming;
