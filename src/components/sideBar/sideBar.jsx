import React, { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import "./sideBar.css";
import Sidebar_Patient from "../mycomponent/Sidebar/Sidebar";
import zoom from "./zoom.jpg";
function Sidebar(props) {
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (localStorage.getItem("UserType") == "1") {
      setDisplay(true);
    }
  }, []);

  return (
    <>
      {display ? (
        <i className="fas fa-bars fa-2x ham" onClick={handleShow}></i>
      ) : (
        <div className="ham"></div>
      )}

      <Offcanvas show={show} className="doc-side">
        <Offcanvas.Header>
          <Offcanvas.Title></Offcanvas.Title>

          <i class="fas fa-times fa-2x cross" onClick={handleClose}></i>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            <Link to="/Upcoming" className="side">
              <ListGroup.Item
                action
                variant="secondary"
                className="sideBar-item "
              >
                <i class="fas fa-calendar-check fa-2x appointmentIcon"></i> View
                Appointments
              </ListGroup.Item>
            </Link>

            <ListGroup.Item
              action
              variant="secondary"
              className="sideBar-item zoom"
              onClick={() =>
                window.open(`${localStorage.getItem("Meeting_Link")}`, "_blank")
              }
            >
              <img src={zoom} /> Open Zoom
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
