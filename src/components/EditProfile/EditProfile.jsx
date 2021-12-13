import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./EditProfile.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Card from "react-bootstrap/Card";
class EditProfile extends Component {
  state = {
    Address: "",
    phoneNumber: "",
    FullName: "",
    ID: localStorage.getItem("UserId"),
    Doc: false,
    Speciality: "",
    userType: localStorage.getItem("UserType"),
    profileChanged: false,
    MeetingLink: "",
    Fees: "",
    Qualification: "",
    SecurityQuestion: "",
  };
  componentDidMount() {
    this.ProfileData();
  }
  ProfileData() {
    const { userType } = this.state;
    const url = "http://hospitalappointment/ProfileData.php";
    {
      axios({
        method: "post",
        url: `${url}`,
        headers: { "content-type": "application/json" },
        data: this.state,
      })
        .then((result) => {
          console.log(result);
          if (result) {
            const data = result.data[0];

            if (userType === "1") {
              this.setState({
                Address: data.Address,
                phoneNumber: data.PhoneNo,
                FullName: data.FullName,
                Speciality: data.Speciality,
                MeetingLink: data.Meeting_Link,
                Fees: data.Doctor_Fee,
                Qualification: data.Qualification,
                SecurityQuestion: data.SecurityQuestion,
              });
            } else if (userType === "2") {
              this.setState({
                Address: data.Address,
                phoneNumber: data.PhoneNo,
                FullName: data.FullName,
              });
            }
          }
        })
        .catch((error) => this.setState({ error: error.message }));
    }
  }
  EditApi() {
    const {
      Address,
      phoneNumber,
      FullName,
      ID,
      Speciality,
      userType,
      Fees,
      MeetingLink,
      Qualification,
      SecurityQuestion,
    } = this.state;
    const url = "http://hospitalappointment/EditProfile.php";
    if (
      Address &&
      phoneNumber &&
      FullName &&
      ID &&
      Speciality &&
      userType &&
      Fees &&
      MeetingLink &&
      Qualification &&
      SecurityQuestion
    ) {
      axios({
        method: "post",
        url: `${url}`,
        headers: { "content-type": "application/json" },
        data: this.state,
      })
        .then((result) => {
          console.log(result);
          if (result) {
            this.setState({ profileChanged: true });
          }
        })
        .catch((error) => this.setState({ error: error.message }));
    }
  }

  EditProfile(e) {
    e.preventDefault();
    const { userType } = this.state;
    if (userType === "1") {
      this.EditApi();
    } else if (userType === "2") {
      this.setState(
        {
          Speciality: " ",
          Fees: " ",
          MeetingLink: " ",
          Qualification: " ",
        },
        () => this.EditApi()
      );
    }
  }

  handleClose() {
    this.setState({ profileChanged: false });
  }

  render() {
    // const userType = localStorage.getItem("UserType");

    const {
      Doc,
      userType,
      profileChanged,
      Address,
      phoneNumber,
      FullName,
      ID,
      Speciality,
      Fees,
      MeetingLink,
      Qualification,
      SecurityQuestion,
    } = this.state;
    console.log(this.state);
    return (
      <div>
        {profileChanged ? (
          <div>
            <div className="alert alert-success" role="alert">
              <strong>Profile Successfully Updated</strong>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() => this.handleClose()}
              ></button>
            </div>
          </div>
        ) : (
          ""
        )}
        <Card
          bg={"dark"}
          text={"white"}
          style={{ width: "500px" }}
          className="mb-2 container formCard"
        >
          <Card.Header>
            <h4>Edit Your Profile</h4>
          </Card.Header>
          <Card.Body>
            <form>
              <div className="container">
                <div className="row justify-content-md-center">
                  <div className="form-floating mb-3  ">
                    <input
                      defaultValue={FullName}
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="FullName"
                      onChange={(event) =>
                        this.setState({ FullName: event.target.value })
                      }
                      required
                    />
                    <label className="edit">Full Name</label>
                  </div>
                </div>
                <div className="row justify-content-md-center">
                  <div className="form-floating mb-3  ">
                    <input
                      defaultValue={phoneNumber}
                      type="tel"
                      className="form-control loginForm"
                      id="phone"
                      placeholder="Phone Number"
                      onChange={(event) =>
                        this.setState({ phoneNumber: event.target.value })
                      }
                      required
                    />
                    <label className="edit">Phone Number</label>
                  </div>
                </div>
                <div className="row justify-content-md-center">
                  <div className="form-floating mb-3  ">
                    <textarea
                      defaultValue={Address}
                      className="form-control text"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      onChange={(event) =>
                        this.setState({ Address: event.target.value })
                      }
                      required
                    ></textarea>
                    <label className="edit" for="floatingTextarea2">
                      Address
                    </label>
                  </div>
                </div>
                {userType === "1" ? (
                  <div>
                    <div className="row justify-content-md-center">
                      <div className="form-floating mb-3  ">
                        <input
                          defaultValue={Qualification}
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Qualification"
                          onChange={(event) =>
                            this.setState({ Qualification: event.target.value })
                          }
                          required
                        />
                        <label className="edit">Qualification</label>
                      </div>
                    </div>
                    <div className="row justify-content-md-center">
                      <div className="form-floating mb-3 ">
                        <select
                          value={Speciality}
                          className="form-select form-select-sm p-3"
                          aria-label=".form-select-sm example"
                          required
                          onChange={(event) =>
                            this.setState({ Speciality: event.target.value })
                          }
                        >
                          <option value="start" selected>
                            Select Speciality
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
                    <div className="row justify-content-md-center">
                      <div className="form-floating mb-3  ">
                        <input
                          defaultValue={Fees}
                          type="number"
                          className="form-control"
                          id="name"
                          placeholder="Fees"
                          onChange={(event) =>
                            this.setState({ Fees: event.target.value })
                          }
                          required
                        />
                        <label className="edit">Fees</label>
                      </div>
                    </div>
                    <div className="row justify-content-md-center">
                      <div className="form-floating mb-3  ">
                        <input
                          defaultValue={MeetingLink}
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="MeetingLink"
                          onChange={(event) =>
                            this.setState({ MeetingLink: event.target.value })
                          }
                          required
                        />
                        <label className="edit">Zoom Meeting Link</label>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="row justify-content-md-center">
                  <div className="form-floating mb-3  ">
                    <input
                      defaultValue={SecurityQuestion}
                      type="text"
                      className="form-control"
                      id="SecurityQuestion"
                      placeholder="SecurityQuestion"
                      onChange={(event) =>
                        this.setState({ SecurityQuestion: event.target.value })
                      }
                      required
                    />
                    <label className="edit">Security Question</label>
                  </div>
                </div>
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
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default EditProfile;
