import React, { Component } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";
import axios from "axios";

class Chat extends React.Component {
  state = {
    Chat: "",
  };
  Send(e) {
    e.preventDefault();
    const { Chat } = this.state;
    if (Chat) {
      const url = "http://hospitalappointment/Chat.php";
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
        <h1>Chat</h1>
        <button onClick={() => this.props.history.push("/")}>Home</button>
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={
            <Popover>
              <Popover.Header as="h3">{`Hello `}</Popover.Header>
              <Popover.Body>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control text"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    onChange={(event) =>
                      this.setState({ Chat: event.target.value })
                    }
                    required
                  ></textarea>
                  <label for="floatingTextarea2">Enter message</label>
                </div>
                <button
                  type="submit"
                  name="submit"
                  className="btn btn-primary"
                  onClick={(e) => this.Send(e)}
                >
                  Send
                </button>
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="secondary">Chat</Button>
        </OverlayTrigger>
      </div>
    );
  }
}

export default Chat;
