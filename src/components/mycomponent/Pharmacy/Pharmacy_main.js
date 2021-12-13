import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { companyData } from "./index2.js";
import "./Pharmacy.css";
import IncrementDecrement from "./IncrementDecrement";
import axios from "axios";
class check extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      Patient_ID: localStorage.getItem("Patient_ID"),
      IncCheck: false,
      count: "",
      quantityCheck: true,
      AddCart: false,
    };
  }

  AddToCart(e) {
    this.setState({AddCart: false});
    const name = e.name;
    const { Patient_ID} = this.state;
    var number = JSON.parse(localStorage.getItem("Count"));
    const price = e.price * number;
    console.log(number);
    const url4 = "http://hospitalappointment/send_pharmacy.php";
    if(number){
    axios({
      method: "post",
      url: `${url4}`,
      headers: { "content-type": "application/json" },
      data: { name, price, Patient_ID, number },
    })
      .then((response) => {
        console.log(response);
        this.setState({AddCart: true});
      })
      .catch((error) => this.setState({ error: error.message }));
      localStorage.removeItem("Count");
    }
    else{
      alert("quantity can not be zero");
      
      
    }
  }
  handleClose() {
    this.setState({ AddCart: false });
  }
 
  render() {
    const {AddCart}=this.state;
    console.log(this.props);
    const a = "₹";
    return (
      <div>
         {AddCart ? (
          <div>
            <div className="alert alert-success alert-itemadded" role="alert">
              <strong>Item Added Successfully!!</strong>

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
        <div className="Pharmacy">
          <h1>Pharmacy</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search...."
            onChange={(event) => this.setState({ search: event.target.value })}
          />
        </div>
        {companyData &&
          companyData
            .filter((item) => {
              if (this.state.search == "") {
                return item;
              } else if (
                item.name
                  .toLowerCase()
                  .includes(this.state.search.toLowerCase())
              ) {
                return (
                  <div>
                    <div className="column-Pharmacy">
                      <Card style={{ width: "12rem", height: "19rem" }}>
                        <Card.Img
                          variant="top"
                          src={item.image}
                          className="image-size"
                        />
                        <Card.Body>
                          <Card.Title>
                            <h6>
                              <b>{item.name}</b>
                            </h6>
                            <h6>
                              {a}
                              {item.price}
                            </h6>
                          </Card.Title>

                          <Button
                            variant="primary"
                            size="sm"
                            key={item.id}
                            onClick={() => this.Increment(item)}
                          >
                            +
                          </Button>
                          <Button
                            className="Order-now"
                            variant="primary"
                            size="sm"
                            key={item.id}
                            onClick={() => this.AddToCart(item)}
                          >
                            Add To Cart
                          </Button>
                          {""}
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                );
              }
            })
            .map((item) => (
              <div>
                <div className="column-Pharmacy">
                  <Card style={{ width: "12rem", height: "19rem" }}>
                    <Card.Img
                      variant="top"
                      src={item.image}
                      className="image-size"
                    />
                    <Card.Body>
                      <Card.Title>
                        <h6>
                          <b>{item.name}</b>
                        </h6>
                        <h6>
                          {a}
                          {item.price}
                        </h6>
                      </Card.Title>

                      <br />
                      <div className="butoonns">
                        <IncrementDecrement />

                        <Button
                          className="Order-now"
                          variant="primary"
                          size="sm"
                          key={item.id}
                          onClick={() => this.AddToCart(item)}
                        >
                          Add To Cart
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            ))}

        
      </div>
    );
  }
}
export default check;