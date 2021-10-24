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
          {/* <img src={doc} alt="doc" width="40%" /> */}
        </section>
        <section className="offering">
          <h2>What we offer</h2>
          <div className="aboutUs">
            <div>
              <li className="about">
                Maintain a safe distance from others, even if they don’t appear
                to be sick.
              </li>
              <li className="about">
                Wear a mask in public, especially indoors or when physical
                distancing is not possible.
              </li>
            </div>
            <div>
              <li className="about">
                Choose open, well-ventilated spaces over closed ones. Open a
                window if indoors.
              </li>
              <li className="about">
                Clean your hands often. Use soap and water, or an alcohol-based
                hand rub.
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
