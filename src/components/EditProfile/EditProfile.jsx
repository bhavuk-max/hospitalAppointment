import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./EditProfile.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
class EditProfile extends Component {
  state = {
    Address: "",
    phoneNumber: "",
    FullName: "",
    ID: localStorage.getItem("UserId"),
    Doc: false,
    Qualification: "",
    userType: localStorage.getItem("UserType"),
  };
  EditProfile(e) {
    e.preventDefault();
    const { Address, phoneNumber, FullName, Qualification, ID, userType } =
      this.state;
    const qualification = userType === "1" ? Qualification : " ";
    if (Address && phoneNumber && FullName && qualification && userType && ID) {
      this.setState({ Qualification: qualification }, () => {
        const url = "http://hospitalappointment/EditProfile.php";
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
        <h3>Edit Your profile</h3>
        <form>
          <div className="container">
            <div className="row justify-content-md-center">
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
            </div>
            <div className="row justify-content-md-center">
              <div className="form-floating mb-3  col-3">
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
                <div className="form-floating mb-3 col-3">
                  <select
                    className="form-select form-select-sm p-3"
                    aria-label=".form-select-sm example"
                    required
                    onChange={(event) =>
                      this.setState({ Qualification: event.target.value })
                    }
                  >
                    <option value="start" selected>
                      Select Problem Here
                    </option>
                    <option value="Heart">Heart</option>
                    <option value="Bone">Bone</option>
                    <option value="Acne">Acne</option>
                    <option value="Skin">Skin</option>
                    <option value="Back Pain">Back Pain</option>
                    <option value="Leg Pain">Leg Pain</option>
                  </select>
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
            onClick={(e) => this.EditProfile(e)}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default EditProfile;
