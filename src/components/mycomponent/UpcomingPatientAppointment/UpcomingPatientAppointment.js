import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "./Appointment.css";
import { Badge, OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
class UpcomingPatientAppointment extends React.Component {
  state = {
    table: [],
    Patient_ID: localStorage.getItem("Patient_ID"),
    Status: "",
    show: false,
    Appointment_ID: null,
  };
  componentDidMount() {
    this.getData();
  }

  getData() {
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
          localStorage.setItem("Appointment_ID", result.data[0].Appointment_ID);
          this.setState({ table: result.data });
        }
      })
      .catch((error) => this.setState({ error: error.message }));
  }
  cancelAppointment() {
    const url = "http://hospitalappointment/CancelAppointment.php";
    axios({
      method: "post",
      url: `${url}`,
      headers: { "content-type": "application/json" },
      data: { Status: "Canceled", Appointment_ID: this.state.Appointment_ID },
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
            Are you sure you want to cancel your appointment?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleClose()}>
              No
            </Button>
            <Button variant="primary" onClick={() => this.cancelAppointment()}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
        <h3>Appointments</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Doctor Name</th>
              <th>Phone No</th>
              <th>Category</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.table.map((x, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{x.FullName}</td>
                <td>{x.PhoneNo}</td>
                <td>{x.Speciality}</td>
                <td>{x.Date}</td>
                <td>{x.Time}</td>
                <td>{this.getStatus(x.Status)}</td>
                {x.Status === "Pending" ? (
                  <td>
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip id="button-tooltip-2">
                          Connect To Zoom Call
                        </Tooltip>
                      }
                    >
                      <i
                        className="fas fa-headset fa-1x call"
                        onClick={() =>
                          window.open(`${x.Meeting_Link}`, "_blank")
                        }
                      />
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip id="button-tooltip-2">
                          Cancel Appointment
                        </Tooltip>
                      }
                    >
                      <i
                        className="fas fa-trash-alt cancel"
  
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

export default UpcomingPatientAppointment;
