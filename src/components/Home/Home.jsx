import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import "./Home.css";
import dental from "./icons/dental.jpg";
import cardiac from "./icons/cardiac.jpg";
import ent from "./icons/ent.jpg";
import dermatology from "./icons/dermatology.jpg";
import ortho from "./icons/ortho.jpg";
import gastro from "./icons/gastro.jpg";
import {
  NavLink,
  BrowserRouter as Router,
  Link,
  Route,
} from "react-router-dom";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* <button onClick={() => this.props.history.push("/login")}>
          Sign In/Sign Up
        </button>
        <button onClick={() => this.props.history.push("/PatientDetails")}>
          PatientDetails
        </button>
        <button onClick={() => this.props.history.push("/Doctor")}>
          Doctor
        </button>
        <button onClick={() => this.props.history.push("/Chat")}>Chat</button>
        <button onClick={() => this.props.history.push("/BookAppointment")}>
          BookApppointment
        </button> */}
        {/* <button onClick={() => this.props.history.push("/Payment")}>
          Pyament
        </button> */}

        <Carousel>
          <Carousel.Item className="carousel-item">
            {/* <img className="d-block w-100" src={first} alt="First slide" /> */}
            <div className="inner-card">
              <Card style={{ width: "18rem", margin: "10px" }}>
                <Card.Body>
                  <Card.Title>Cardiac</Card.Title>
                  <Card.Img variant="top" src={cardiac} className="image" />
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem", margin: "10px" }}>
                <Card.Body>
                  <Card.Title>Dental</Card.Title>
                  <Card.Img variant="top" src={dental} className="image" />
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem", margin: "10px" }}>
                <Card.Body>
                  <Card.Title>ENT</Card.Title>
                  <Card.Img variant="top" src={ent} className="image" />
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            {/* <img className="d-block w-100" src={first} alt="First slide" /> */}
            <div className="inner-card">
              <Card style={{ width: "18rem", margin: "10px" }}>
                <Card.Body>
                  <Card.Title>Dermatology</Card.Title>
                  <Card.Img variant="top" src={dermatology} className="image" />
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem", margin: "10px" }}>
                <Card.Body>
                  <Card.Title>Orthopedic</Card.Title>
                  <Card.Img variant="top" src={ortho} className="image" />
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem", margin: "10px" }}>
                <Card.Body>
                  <Card.Title>Gastroenterology</Card.Title>
                  <Card.Img variant="top" src={gastro} className="image" />
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
        </Carousel>
        <br />
        <div>
          <Card className="tips">
            <Card.Body>
              <p>
                Protect yourself and others around you by knowing the facts and
                taking appropriate precautions.{" "}
              </p>
              <h3>To prevent the spread of COVID-19:</h3>
              <div className="parent-tips">
                <Card className="tips">
                  <Card.Body>
                    <li className="covid">
                      Maintain a safe distance from others, even if they don’t
                      appear to be sick.
                    </li>
                    <li className="covid">
                      Wear a mask in public, especially indoors or when physical
                      distancing is not possible.
                    </li>
                    <li className="covid">
                      Choose open, well-ventilated spaces over closed ones. Open
                      a window if indoors.
                    </li>
                    <li className="covid">
                      Clean your hands often. Use soap and water, or an
                      alcohol-based hand rub.
                    </li>
                  </Card.Body>
                </Card>
                <Card className="tips">
                  <Card.Body>
                    <li className="covid">
                      Get vaccinated when it’s your turn. Follow local guidance
                      about vaccination.
                    </li>
                    <li className="covid">
                      Cover your nose and mouth with your bent elbow or a tissue
                      when you cough or sneeze.
                    </li>
                    <li className="covid">Stay home if you feel unwell.</li>
                  </Card.Body>
                </Card>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;
