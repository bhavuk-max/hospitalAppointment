import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import "./Pharmacy.css";

class IncrementDecrement extends Component {
  constructor(props) {
    super(props);

    this.handleIncrement = this.handleIncrement.bind(this);
  }
  state = {
    count: 0,
  };
  handleIncrement() {
    const { count } = this.state;

    if (count < 10) {
      this.setState({ count: this.state.count + 1 });
    }
    var number = count + 1;
    localStorage.setItem("Count", JSON.stringify(number));
  }
  handleDecrement = () => {
    const { count } = this.state;

    if (count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
    var number2 = count - 1;
    localStorage.setItem("Count", JSON.stringify(number2));
  };

  onClick() {
    this.handleIncrement();
  }
  render() {
    console.log(this.props);
    return (
      <div className="inc-dec">
        <button
          type="button"
          className="btn btn-primary btn-sm"
          style={{ marginLeft: "5px" }}
          onClick={this.handleDecrement}
          size="sm"
        >
          -
        </button>
        <Badge pill bg="primary">
          <span>{this.state.count}</span>
        </Badge>
        <button
          type="button"
          className="btn btn-primary btn-sm btn-sm"
          onClick={this.handleIncrement}
          style={{ marginLeft: "5px" }}
          size="sm"
          variant="outline-success"
        >
          +
        </button>
      </div>
    );
  }
}

export default IncrementDecrement;
