import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./PatientDetails.css";
class PatientDetails extends Component {
  state = {
    Address: "",
    phoneNumber: "",
    FullName: "",
    ID: localStorage.getItem("UserId"),
    Doc: false,
    Qualification: "",
    userType: localStorage.getItem("UserType"),
  };
  PatientDetails(e) {
    e.preventDefault();
    const { Address, phoneNumber, FullName, Qualification, ID, userType } =
      this.state;
    const qualification = userType === "1" ? Qualification : " ";
    if (Address && phoneNumber && FullName && qualification && userType && ID) {
      this.setState({ Qualification: qualification }, () => {
        const url = "http://hospitalappointment/PatientDetails.php";
        axios({
          method: "post",
          url: `${url}`,
          headers: { "content-type": "application/json" },
          data: this.state,
        })
          .then((result) => {
            console.log(result);
          })
          .catch((error) => this.setState({ error: error.message }));
      });
    }
  }

  render() {
    // const userType = localStorage.getItem("UserType");

    const { Doc, userType } = this.state;
    return (
      <div>
        <h3>Complete Your profile</h3>
        <form>
          <div className="container">
            <div className="row justify-content-md-center">
              {/* <div className="form-floating mb-3 col-3">
                <input
                  type="e-mail"
                  className="form-control loginForm"
                  id="email"
                  placeholder="E-mail"
                  onChange={(event) =>
                    this.setState({ Email: event.target.value })
                  }
                  required
                />
                <label>E-mail</label>
              </div> */}
              <div className="form-floating mb-3  col-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="FullName"
                  onChange={(event) =>
                    this.setState({ FullName: event.target.value })
                  }
                  required
                />
                <label>Full Name</label>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="form-floating mb-3  col-3">
                <input
                  type="tel"
                  className="form-control loginForm"
                  id="phone"
                  placeholder="Phone Number"
                  onChange={(event) =>
                    this.setState({ phoneNumber: event.target.value })
                  }
                  required
                />
                <label>Phone Number</label>
              </div>
              {/* <div className="form-floating mb-3  col-3">
                <input
                  type="tel"
                  className="form-control loginForm"
                  id="phone"
                  placeholder="Phone Number"
                  onChange={(event) =>
                    this.setState({ Email: event.target.value })
                  }
                  required
                />
                <label>Secondary Phone Number</label>
              </div> */}
            </div>
            <div className="row justify-content-md-center">
              {/* <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown button
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div> */}
              <div className="form-floating mb-3  col-3 ">
                <textarea
                  className="form-control text"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  onChange={(event) =>
                    this.setState({ Address: event.target.value })
                  }
                  required
                ></textarea>
                <label for="floatingTextarea2">Address</label>
              </div>
            </div>
            {userType === "1" ? (
              <div className="row justify-content-md-center">
                <div className="form-floating mb-3  col-3 ">
                  <textarea
                    className="form-control text"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    onChange={(event) =>
                      this.setState({ Qualification: event.target.value })
                    }
                    required
                  ></textarea>
                  <label for="floatingTextarea2">Qualification</label>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <button
            type="submit"
            name="submit"
            className="btn btn-primary"
            onClick={(e) => this.PatientDetails(e)}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PatientDetails;
