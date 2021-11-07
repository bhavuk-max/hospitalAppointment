import * as AiIcons from "react-icons/ai";
import React, { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
//import Sidebar from "react-sidebar";
import * as Riicons from "react-icons/ri";
import * as Mdicons from "react-icons/md";
import "./NavbarCommon.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

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
            {/* <FaBars onClick={showSidebar} /> */}
            <i className="fas fa-bars fa-2x ham" onClick={showSidebar}></i>
          </Link>
        ) : (
          <div className="ham"></div>
        )}

        <nav className={slidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="nav-toggle">
              <Link to="#" className="menu-bars">
                {/* <AiOutlineClose /> */}
                <i class="fas fa-times  sideCross" onClick={handleClose}></i>
              </Link>
            </li>
            <li className="nav-text">
              <AiIcons.AiFillHome />
              <Link to="/Patient_details">Dashboard</Link>
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
              {/* <Link to="/Pharmacy">Pharmacy</Link> */}
              <Link to="/Pharmacy">Pharmacy</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* <i className="fas fa-bars fa-2x ham" onClick={handleShow}></i>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup className="navbars-Common">
            <Link to="/Patient_details" className="side">
              <ListGroup.Item
                action
                
                 className="navbars-Common"
              >
                Dashboard
              </ListGroup.Item>
            </Link>
            <ListGroup.Item action variant="secondary" className="sideBar-item">
              View Previous Appointments
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas> */}
    </>
  );
}

export default Sidebar_Patient;

// export const Sidebar = [
//   {
//     title: "Dashboard",
//     path: "/Patient_details",
//     icon: <AiIcons.AiFillHome />,
//     cName: "nav-text",
//   },
//   {
//     title: "Book Appointment",
//     path: "/BookAppointment",
//      icon:<Riicons.RiHealthBookLine />,
//     cName: "nav-text",
//   },
//   {
//     title: "My Appointment",
//     path: "/PreviousAppointment",
//     icon:<Mdicons.MdLibraryBooks />,
//     cName: "nav-text",
//   },
//   {
//     title: "Pharmacy",
//     path: "/Pharmacy",
//     icon:<Mdicons.MdLocalPharmacy />,
//     cName: "nav-text",
//   },
//    {
//      title: "Contact Us",
//      path:"/mycomponent/ContactUs"
//   }
// ];
