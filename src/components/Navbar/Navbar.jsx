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
import axios from "axios";
class Navbar extends React.Component {
  state = {
    Profile: false,
    hamType: "",
    status: "",
    ID: localStorage.getItem("UserId"),
    DoctorStatus: false,
    cart: false,
  };
  componentDidMount() {
    const userType = localStorage.getItem("UserType");
    if (userType === "1") {
      this.setState({ DoctorStatus: true });
    }
    if (userType === "2") {
      this.setState({ cart: true });
    }
    if (userType) {
      this.setState({ Profile: true, hamType: userType });
    }
  }
  Status(e) {
    const url = "http://hospitalappointment/Status.php";
    this.setState({ status: e.target.checked ? 1 : 0 }, () => {
      axios({
        method: "post",
        url: `${url}`,
        headers: { "content-type": "application/json" },
        data: this.state,
      })
        .then((result) => {
          console.log(result);
          if (result) {
            localStorage.setItem("Status", this.state.status);
          }
        })
        .catch((error) => this.setState({ error: error.message }));
    });
  }
  render() {
    const { Profile, hamType, DoctorStatus, cart } = this.state;
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
          {cart ? (
            <div className="shopping-cart">
              <Link to="/CheckOut">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              </Link>
            </div>
          ) : (
            " "
          )}
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
              {/* <div className="shopping-cart">
          <Link to="/CheckOut">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </Link>
        </div> */}

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li className="detail-name">
                  {localStorage.getItem("FullName")}
                </li>
                <li className="detail">{localStorage.getItem("Email")}</li>
                {DoctorStatus ? (
                  <li className="status">
                    <div class="form-check form-switch">
                      <input
                        defaultChecked={
                          localStorage.getItem("Status") === "1" ? true : false
                        }
                        onChange={(e) => this.Status(e)}
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                      // class="form-check-label"
                      // for="flexSwitchCheckDefault"
                      >
                        Status
                      </label>
                    </div>
                  </li>
                ) : (
                  ""
                )}

                <li>
                  <a href="/EditProfile" class="dropdown-item">
                    Edit Profile
                  </a>
                </li>

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
