import React, { useState } from "react";
import { Component } from "react";
//import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
class Demo extends Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }
  state = {
    send: "",
  };

  submitHandler(e) {
    const { send } = this.state;
    alert("submithandler");
    e.preventDefault();
    console.log(this.state.value);

    if (send) {
      const url = "http://hospitalappointment/BookAppointDta.php";
      axios({
        method: "post",
        url: `${url}`,
        headers: { "content-type": "application/json" },
        data: this.state,
      })
        .then((result) => {
          console.log(result);
          if (result.data) {
          }
        })
        .catch((error) => this.setState({ error: error.message }));
    }
  }
  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="send"
              onChange={(event) => this.setState({ send: event.target.value })}
            />
          </label>
          <button
            type="submit"
            id="submitForm"
            name="submit"
            className="btn btn-primary"
            onClick={(e) => this.submitHandler(e)}
          >
            submit
          </button>
        </form>
      </div>
    );
  }
}
export default Demo;
