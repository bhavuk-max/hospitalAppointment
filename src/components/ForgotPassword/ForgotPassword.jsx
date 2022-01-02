import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
class ForgotPassword extends Component {
  state = {
    Email: "",
    resetPassword: false,
    Password: "",
    ConfirmPassword: "",
    SecurityQuestion: "",
    Question: false,
  };
  forgotPassword(e) {
    e.preventDefault();
    const { Email } = this.state;
    if (Email) {
      const url = "http://hospitalappointment/ForgotPassword.php";
      axios({
        method: "post",
        url: `${url}`,
        headers: { "content-type": "application/json" },
        data: this.state,
      })
        .then((result) => {
          console.log(result);
          if (result.data === "Found") {
            this.setState({ Question: true });
          }
        })
        .catch((error) => this.setState({ error: error.message }));
    }
  }
  ResetPassword(e) {
    e.preventDefault();
    const { Email, Password, ConfirmPassword } = this.state;
    if (Email && Password && ConfirmPassword) {
      const url = "http://hospitalappointment/ResetPassword.php";
      axios({
        method: "post",
        url: `${url}`,
        headers: { "content-type": "application/json" },
        data: this.state,
      })
        .then((result) => {
          console.log(result);
          if (result.data) {
            this.setState({
              resetPassword: false,
              Email: "",
              Password: "",
              ConfirmPassword: "",
            });
          }
        })
        .catch((error) => this.setState({ error: error.message }));
    }
  }
  CheckQuestion(e) {
    e.preventDefault();
    const { Email, SecurityQuestion } = this.state;
    if (Email && SecurityQuestion) {
      const url = "http://hospitalappointment/Security.php";
      axios({
        method: "post",
        url: `${url}`,
        headers: { "content-type": "application/json" },
        data: this.state,
      })
        .then((result) => {
          console.log(result);
          if (result.data === "Correct") {
            this.setState({ resetPassword: true });
          }
        })
        .catch((error) => this.setState({ error: error.message }));
    }
  }
  render() {
    const { resetPassword, Question } = this.state;
    return (
      <div>
        {resetPassword ? (
          <Card
            bg={"dark"}
            text={"white"}
            style={{ width: "300px" }}
            className="mb-2 container formCard"
          >
            <Card.Header>
              <h5>Enter your New Password</h5>
            </Card.Header>
            <Card.Body>
              <form>
                <div className="container">
                  <div className="row justify-content-md-center">
                    <div className="form-floating mb-3  ">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={(event) =>
                          this.setState({ Password: event.target.value })
                        }
                        required
                      />
                      <label className="edit">New Password</label>
                    </div>
                    <div className="form-floating mb-3  ">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="ConfirmPassword"
                        onChange={(event) =>
                          this.setState({ ConfirmPassword: event.target.value })
                        }
                        required
                      />
                      <label className="edit">Confirm Password</label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  name="submit"
                  className="btn btn-primary"
                  onClick={(e) => this.ResetPassword(e)}
                >
                  Reset Password
                </button>
              </form>
            </Card.Body>
          </Card>
        ) : Question ? (
          <Card
            bg={"dark"}
            text={"white"}
            style={{ width: "300px" }}
            className="mb-2 container formCard"
          >
            <Card.Header>
              <h5>Enter your Security Question</h5>
            </Card.Header>
            <Card.Body>
              <form>
                <div className="container">
                  <div className="row justify-content-md-center">
                    <div className="form-floating mb-3  ">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Security Question"
                        onChange={(event) =>
                          this.setState({
                            SecurityQuestion: event.target.value,
                          })
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
                  onClick={(e) => this.CheckQuestion(e)}
                >
                  Submit
                </button>
              </form>
            </Card.Body>
          </Card>
        ) : (
          <Card
            bg={"dark"}
            text={"white"}
            style={{ width: "300px" }}
            className="mb-2 container formCard"
          >
            <Card.Header>
              <h5>Enter your registered Email</h5>
            </Card.Header>
            <Card.Body>
              <form>
                <div className="container">
                  <div className="row justify-content-md-center">
                    <div className="form-floating mb-3  ">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={(event) =>
                          this.setState({ Email: event.target.value })
                        }
                        required
                      />
                      <label className="edit">Email</label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  name="submit"
                  className="btn btn-primary"
                  onClick={(e) => this.forgotPassword(e)}
                >
                  Submit
                </button>
              </form>
            </Card.Body>
          </Card>
        )}
      </div>
    );
  }
}

export default ForgotPassword;
