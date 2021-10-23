import React, { Component } from "react";
import health from "./health.jpg";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import "./Article.css";
class Article extends React.Component {
  render() {
    return (
      <div>
        <h1>Articles</h1>

        <Carousel>
          <Carousel.Item className="carousel-item header">
            {/* <img className="d-block w-100" src={first} alt="First slide" /> */}
            <div className="inner-card">
              <Card style={{ width: "18rem", margin: "10px" }}>
                <Card.Body>
                  <Card.Title>Cardiac</Card.Title>
                  <Card.Img variant="top" src={health} className="image" />
                  <Card.Text>
                    "Healthy living" to most people means both physical and
                    mental health are in balance or functioning well together in
                    a person. In many instances, physical and mental health are
                    closely linked, so that a change (good or bad) in one
                    directly affects the other. Consequently, some of the tips
                    will include suggestions for emotional and mental "healthy
                    living."
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem", margin: "10px" }}>
                <Card.Body>
                  <Card.Title>Dental</Card.Title>
                  <Card.Img variant="top" src={health} className="image" />
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem", margin: "10px" }}>
                <Card.Body>
                  <Card.Title>ENT</Card.Title>
                  <Card.Img variant="top" src={health} className="image" />
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
          <Carousel.Item className="carousel-item header">
            {/* <img className="d-block w-100" src={first} alt="First slide" /> */}
            <div className="inner-card">
              <Card style={{ width: "18rem", margin: "10px" }}>
                <Card.Body>
                  <Card.Title>Dermatology</Card.Title>
                  <Card.Img variant="top" src={health} className="image" />
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem", margin: "10px" }}>
                <Card.Body>
                  <Card.Title>Orthopedic</Card.Title>
                  <Card.Img variant="top" src={health} className="image" />
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem", margin: "10px" }}>
                <Card.Body>
                  <Card.Title>Gastroenterology</Card.Title>
                  <Card.Img variant="top" src={health} className="image" />
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Article;
