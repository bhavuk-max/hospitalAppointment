import React, { Component } from "react";
import {
  NavLink,
  BrowserRouter as Router,
  Link,
  Route,
} from "react-router-dom";
import "./Navbar.css";
import Login from "../login/login";
import Sidebar from "../sideBar/sideBar";
import Sidebar_Patient from "../mycomponent/Sidebar/Sidebar";
// import Sidebar_Doctor from "../sideBar/sideBar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import MaxCare from "./MaxCare.jpg";
class Navbar extends React.Component {
  state = {
    Profile: false,
    hamType: "",
  };
  componentDidMount() {
    const userType = localStorage.getItem("UserType");
    if (userType) {
      this.setState({ Profile: true, hamType: userType });
    }
  }
  render() {
    const { Profile, hamType } = this.state;
    return (
      <nav className="Nav">
        {/* <Sidebar /> */}
        {hamType === "1" ? <Sidebar /> : <Sidebar_Patient />}

        <img src={MaxCare} className="Logo" />

        <div className="NavMenu">
          <Link to="/" className="NavLink">
            Home
          </Link>
          <Link to="/About" className="NavLink">
            About Us
          </Link>
          <Link to="/Contact" className="NavLink">
            Contact Us
          </Link>

          <Link to="/Article" className="NavLink">
            Articles
          </Link>
        </div>

        <div className="NavBtn">
          {Profile ? (
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-user-circle fa-2x"></i>
              </button>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li className="detail-name">
                  {localStorage.getItem("FullName")}
                </li>
                <li className="detail">{localStorage.getItem("Email")}</li>
                <li>
                  <a href="/EditProfile" class="dropdown-item">
                    Edit Profile
                  </a>
                </li>
                {/* <li className="detail">
                  <DropdownButton
                    as={ButtonGroup}
                    key={"end"}
                    id={`dropdown-button-drop-${"end"}`}
                    drop={"end"}
                    variant="secondary"
                    title={` Drop ${"end"} `}
                  >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  </DropdownButton>
                </li> */}
                <li>
                  <a
                    href="/login"
                    class="dropdown-item"
                    onClick={() => {
                      localStorage.clear();
                      window.history.go(-window.history.length);
                    }}
                  >
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button
                type="submit"
                id="submitForm"
                name="submit"
                className="btn btn-primary"
              >
                Sign In
              </button>
            </Link>
          )}
        </div>
      </nav>
    );
  }
}

export default Navbar;
