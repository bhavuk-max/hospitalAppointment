import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { companyData } from "./index2.js";
import "./Pharmacy.css";
import Grid from "./grid";
import CheckOut from "./CheckOut.js";
import axios from "axios";
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
      cartItems:[],
      quantity:0,
    };
  }
AddToCart(e){
  const id=e.id;
  const name=e.name;
  const price=e.price;
  
const url4="http://project/send_pharmacy.php";
axios({
  method: "post",
  url: `${url4}`,
  headers: { "content-type": "application/json" },
  data: {name,price},
})
  .then((response) => {
    console.log(response);
    
  })
  .catch((error) => this.setState({ error: error.message }));

  // this.setState({cartItems:})
  // alert(e.id);
  // alert(e.name);
// this.setState({quantity:quantity+1})

  // {e.id===companyData.id && e.map((item)=>{

  // })}
  // {e.id===companyData.id && e.map((item)=>{
  //   alert("yes");
  //   <div key={item.id}>
  //               <div className="column-Pharmacy">
  //                 <Card style={{ width: "12rem", height: "19rem" }}>
  //                   <Card.Img
  //                     variant="top"
  //                     src={item.image}
  //                     className="image-size"
  //                   />
  //                   <Card.Body>
  //                     <Card.Title>
  //                       <h6>
  //                         <b>{item.name}</b>
  //                       </h6>
  //                       <h6>{item.price}</h6>
  //                     </Card.Title>

  //                     <Grid key={item.id} />
  //                     <Button
  //                       className="Order-now"
  //                       variant="primary"
  //                       size="lg"
  //                       key={item.id}
  //                       onClick={()=>this.AddToCart(item)}
  //                     >
  //                       Add to cart
  //                     </Button>
  //                   </Card.Body>
  //                 </Card>
  //               </div>
  //             </div>
  // })}
  // <div>
   
  // <CheckOut checkid={e.id} />
    
  // </div>
//   const exist=this.state.cartItems.find(x=>x.id===companyData.id);
//   if(exist){
// this.state.cartItems.map(x=>x.id===companyData.id?{...exist}:x)
//   }
//   else{
//     this.state.cartItems([...cartItems]);
//   }
}
addtocartButton(){

}
  render() {
    // const greeting="this is a prop message";
    return (
      
      <div>
        {/* <CheckOut greeting={greeting} /> */}
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
                            <h6>₹{item.price}</h6>
                          </Card.Title>

                          <Grid key={item.id} />
                          <Button
                        className="Order-now"
                        variant="primary"
                        size="sm"
                        key={item.id}
                        onClick={()=>this.AddToCart(item),(event)=>this.setState({quantity:event.target.quantity+1})}
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

                      <Grid key={item.id} />
                      <Button
                        className="Order-now"
                        variant="primary"
                        size="sm"
                        key={item.id}
                        onClick={()=>this.AddToCart(item)}
                      >
                        Order Now
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            ))}
        <div className="shopping-cart">
          <Link to="/CheckOut">
            <ShoppingCartIcon size={28} />
          </Link>
        </div>
      </div>
    );
  }
}
export default check;
