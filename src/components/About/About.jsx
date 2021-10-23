import React, { Component } from "react";
import "./About.css";
import doc from "./doc.jpg";
class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About Max Care</h1>
        {/* <div className="quote">
          <img src={quote} height="" />
        </div> */}
        <h1 className="quote">Enhancing life Excelling in care</h1>
        <h2>Our Aim</h2>
        <span className="aim">
          Max Care is on a mission to make quality healthcare affordable and
          accessible virtually. We believe in empowering our users with the most
          accurate, comprehensive, and curated information and care, enabling
          them to make better healthcare decisions. Our users safety is our top
          priority
        </span>
        <img src={doc} width="40%" />
      </div>
    );
  }
}

export default About;
