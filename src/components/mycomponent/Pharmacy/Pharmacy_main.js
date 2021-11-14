import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { companyData } from "./index2.js";
import "./Pharmacy.css";
import Grid from "./grid";
import CheckOut from "./CheckOut.js";
import axios from "axios";
import Badge from "react-bootstrap/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
class check extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      Patient_ID: localStorage.getItem("Patient_ID"),
      count:0,
      dataNEW: [],
     
    };
  }
  
  AddToCart(e) {
// console.log(e.id)
// console.log(e.name)
// console.log(e.price)

const data=[e.id,e.name,e.price];
    const id = e.id;
    const a=1;
    const name = e.name;
    const price = e.price; 
    const quantity=e.quantity+a;

    const { Patient_ID } = this.state;
    console.log(data);
    // alert(quantity);
    
    const url4 = "http://project/send_pharmacy.php";
    axios({
      method: "post",
      url: `${url4}`,
      headers: { "content-type": "application/json" },
      data: { name, price, Patient_ID,quantity },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => this.setState({ error: error.message }));

   
  }


  render() {
    const a="₹";
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
                          
                          {/* <div key={item.id}>
                           */}
                          {/* <input type="number" key={item.id} placeholder="enter Quantity" onChange={()=>item.quantity(item)} /> */}

                          <Button
                            className="Order-now"
                            variant="primary"
                            size="sm"
                            key={item.id}
                            onClick={
                              () => this.AddToCart(item)
                          
                            }
                          >
                            Order Now
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
              <div >
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
     {/* <Grid required /> */}
                  {/* <input className="input-quantity" key={item.id} type="number"  placeholder="enter Quantity" selected={item.quantity} onChange={(event) =>
                this.setState({ quantity: item.quantity })} /> 
                {item.quantity} */}
                  {/* ()=>this.quantity(item) */}
                  {/* <Button
                type="button"
                className="btn btn-primary btn-sm"
                style={{ marginLeft: "5px" }}
                onClick={()=>this.handleDecrement(item)}
                size="sm"
              >
                  -
                  </Button>
                  <Badge pill bg="primary" >
              <span  >{this.state.count}</span>
              </Badge>
                  <Button
                type="button"
                className="btn btn-primary btn-sm btn-sm"
                //={() => this.setState({ count: this.state.count + 1 })}
                onClick={()=>this.handleIncrement(item)}
                style={{ marginLeft: "5px" }}
                size="sm" 
                variant="outline-success"
              >
                +
              </Button>
      */}
 
                 
                      <Button
                        className="Order-now"
                        variant="primary"
                        size="sm"
                        key={item.id}
                        onClick={() => this.AddToCart(item)}
                      >
                        Add To Cart
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            ))}
        <div className="shopping-cart">
          <Link to="/CheckOut">
            {/* <ShoppingCartIcon size={28} /> */}
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    );
  }
}
export default check;
