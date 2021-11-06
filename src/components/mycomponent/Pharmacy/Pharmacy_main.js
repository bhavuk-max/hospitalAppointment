import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { companyData } from "./index2.js";
import "./Pharmacy.css";
import Grid from "./grid";
import CheckOut from "./CheckOut.js";
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
      cartItems:[],
    };
  }
AddToCart(){
  
  // {companyData && companyData.map((e)=>{
  //   if(e.id==)
  //   <CheckOut id={e.id} name={e.name} />
  // })}
}
  render() {
    return (
      <div>
        {/* <h1> CheckOut Page</h1> */}
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
                            <h6>{item.price}</h6>
                          </Card.Title>

                          {/* <Grid key={item.id} /> */}
                          <Button
                            className="Order-now"
                            variant="primary"
                            size="lg"
                            key={item.id}
                            onClick={(e)=>this.AddToCart(e)}
                          >
                            Add to cart
                          </Button>
                          {""}
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                );
              }
              // else if(item.name.toLowerCase()!==this.state.search){
              //   return(<div>
              //     <h1>medicine not available right now</h1>
              //   </div>)
              // }
            })
            .map((item) => (
              <div key={item.id}>
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
                        <h6>{item.price}</h6>
                      </Card.Title>

                      {/* <Grid key={item.id} /> */}
                      <Button
                        className="Order-now"
                        variant="primary"
                        size="lg"
                        key={item.id}
                      >
                        Add to cart
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            ))}
        <div className="shopping-cart">
          <Link to="/CheckOut">
            <FaShoppingCart size={28} />
          </Link>
        </div>
      </div>
    );
  }
}
export default check;
