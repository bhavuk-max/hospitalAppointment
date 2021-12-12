import * as AiIcons from "react-icons/ai";
import React, { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import * as Riicons from "react-icons/ri";
import * as Mdicons from "react-icons/md";
import "./NavbarCommon.css";
function Sidebar_Patient(props) {
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [slidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!slidebar);
  useEffect(() => {
    if (localStorage.getItem("UserType") == "2") {
      setDisplay(true);
    }
  }, []);

  return (
    <>
      <div className="navbars">
        {display ? (
          <Link to="#" className="web-icons-slidebar ">
            <i className="fas fa-bars fa-2x ham" onClick={showSidebar}></i>
          </Link>
        ) : (
          <div className="ham"></div>
        )}

        <nav className={slidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="nav-toggle">
              <Link to="#" className="menu-bars">
                <i class="fas fa-times  sideCross" onClick={handleClose}></i>
              </Link>
            </li>
            <li className="nav-text">
              <AiIcons.AiFillHome />
              <Link to="/Dashboard">Dashboard</Link>
            </li>
            <li className="nav-text">
              <Riicons.RiHealthBookLine />
              <Link to="/BookAppointment">BookAppointment</Link>
            </li>
            <li className="nav-text">
              <Mdicons.MdLibraryBooks />
              <Link to="/UpcomingPatientAppointment">My Appointments</Link>
            </li>
            <li className="nav-text">
              <Mdicons.MdLocalPharmacy />

              <Link to="/Pharmacy">Pharmacy</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar_Patient;
