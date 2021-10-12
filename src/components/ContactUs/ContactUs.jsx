import React, { Component } from "react";
import "./contactUs.css";
import Card from "react-bootstrap/Card";
class Contact extends React.Component {
  render() {
    return (
      <div>
        <div className="contactUs">
          <h1>Contact-Us</h1>
          <h2>
            Have questions about our products, support services, or anything
            else? Let us know and we’ll get back to you.
          </h2>
        </div>
        <div className="info-main">
          <Card
            className="info-card"
            border="primary"
            style={{ width: "18rem" }}
          >
            <Card.Header className="info-content">Contact Info</Card.Header>
            <Card.Body>
              <span className="info-content">
                Email: hospitalappointment01@gmail.com
              </span>
            </Card.Body>
          </Card>
          <Card
            className="info-card"
            border="primary"
            style={{ width: "18rem" }}
          >
            <Card.Header className="info-content">Contact Info</Card.Header>
            <Card.Body>
              <span className="info-content">Phone Number: 1945211237</span>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Contact;
