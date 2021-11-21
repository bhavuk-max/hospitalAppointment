import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { companyData } from "./index2.js";
import Toast from 'react-bootstrap/Toast';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import "./Pharmacy.css";
import IncrementDecrement from "./IncrementDecrement";
import CheckOut from "./CheckOut.js";
import axios from "axios";
import Badge from "react-bootstrap/Badge";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
toast.configure()
class check extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      Patient_ID: localStorage.getItem("Patient_ID"),
      IncCheck:false,
      count: "",
      
    };
  }
  
  AddToCart(e) {

    const name = e.name;
    const { Patient_ID, count } = this.state;
    var number=JSON.parse(localStorage.getItem("Count"));
    const price = e.price*number;
    console.log(number)
    // console.log();
    const url4 = "http://project/send_pharmacy.php";
    axios({
      method: "post",
      url: `${url4}`,
      headers: { "content-type": "application/json" },
      data: { name, price, Patient_ID,number},
    })
      .then((response) => {
        console.log(response);
      
      })
      .catch((error) => this.setState({ error: error.message }));
  }
HandleCount(Count){
  console.log("count");
  console.log(Count);
this.setState({quantity:Count});
}
  render() {
    console.log(this.props);
    const a = "₹";
    return (
      <div>
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
            {this.state.IncCheck===true && 
                        <div>
                        <Toast>
                  <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                </Toast>
                        </div>
                      }
        <div className="shopping-cart">
          <Link to="/CheckOut">
            
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </Link>
        </div>
        
      </div>
    );
  }
}
export default check;
