import React, { Component } from "react";
import "./About.css";
import doc from "./doc.jpg";
class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About Max Care</h1>

        <h1 className="quote">Enhancing life Excelling in care</h1>

        <section className="aimSection">
          <h2>Our Aim</h2>
          <div className="aim">
            Max Care is on a mission to make quality healthcare affordable and
            accessible virtually. We believe in empowering our users with the
            most accurate, comprehensive, and curated information and care,
            enabling them to make better healthcare decisions. Our users safety
            is our top priority
          </div>
        </section>
        <section className="docImage">
          <h1>Content</h1>
        </section>
        <section className="offering">
          <h2>What we offer</h2>
          <div className="aboutUs">
            <div>
              <li className="about">
                Comprehensive medical directory with detailed, verified
                information about doctors
              </li>
              <li className="about">Online appointment booking</li>
            </div>
            <div>
              <li className="about">
                Online consultation with trusted doctors
              </li>
              <li className="about">
                Medicine delivery at doorstep by a network of verified
                pharmacies across the country
              </li>
            </div>
          </div>
        </section>
        <footer className="footer">
          <h5>Copyright © 2021, Max Care All rights reserved.</h5>
        </footer>
      </div>
    );
  }
}

export default About;
