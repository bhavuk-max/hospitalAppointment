import React from "react";
import { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Grid from "./grid";
import Badge from 'react-bootstrap/Badge';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "./checkOut.css";
export class CheckOut extends Component {
    
    state = { 
      table: [] ,
      Patient_ID: localStorage.getItem("Patient_ID"),
      count: 0,
      quantity: 0,
      total:0,
      cart: false,
      confirmtable: false,
    
    };
    
  // handleIncrement=()=>{
  //   const {count}=this.state;
      
  //     if(count<10)
  //     {
  //     this.setState({count:this.state.count+1});
  //     }
  // }
  // handleDecrement=()=>{
   
  //   const {count}=this.state;
   
  //   if(count>0){
  //     this.setState({count:this.state.count-1});
  //   }
  // }
    componentDidMount() {
      this.getData();
      this.totalprice();
    }
    reset(){
      const { Patient_ID } = this.state;
      const url6="http://project/resetPharmacy.php";
      axios({
        method: "post",
        url: `${url6}`,
        headers: { "content-type": "application/json" },
        data: {Patient_ID},
      })
        .then((response) => {
          console.log(response);
          window.location.reload(false);
        })
        .catch((error) => this.setState({ error: error.message }));

    }
    getData() {
      const { Patient_ID } = this.state;
      const url5 = "http://hospitalappointment/get_pharmacy.php";
      axios({
        method: "post",
        url: `${url5}`,
        headers: { "content-type": "application/json" },
        data: { Patient_ID: Patient_ID },
      })
        .then((result) => {
          console.log(result.data);
          if (result) {
            localStorage.setItem("Appointment_ID", result.data[0].Appointment_ID);
            this.setState({ table: result.data });
            this.setState({ cart:true});
          }
        })
        .catch((error) => this.setState({ error: error.message }));
    }
    totalprice(){
      const { Patient_ID } = this.state;
      const url2="http://project/totalprice.php";
      axios({
        method: "post",
        url: `${url2}`,
        headers: { "content-type": "application/json" },
        data: { Patient_ID},
      })
        .then((result) => {
          console.log(result.data);
          this.setState({ total: result.data });
            console.log("total");
            console.log(this.state.total);
          
          
        })
        .catch((error) => this.setState({ error: error.message }));
    }
    sumbit(){

    }
    delete(item){
      const name=item.NAME;
      const {Patient_ID}=this.state
      console.log(name);
      const url="http://project/delete.php";
      
      axios({
        method: "post",
        url: `${url}`,
        headers: { "content-type": "application/json" },
        data: { name, Patient_ID},
      })
        .then((response) => {
          console.log(response);
          window.location.reload(false);
        })
        .catch((error) => this.setState({ error: error.message }));

       
        
    }
    
        render(){
          const a="₹";
        return (
          <>
         {this.state.cart && 
         
          <div className="Checkout-Dash">
            <h1>CHECKOUT</h1>
            
            <div>
            <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>quantity</th>
              
              <th>Action</th>
              
            </tr>
          </thead>
          <tbody>
            {this.state.table.map((x, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{x.NAME}</td>
                <td>{a}{x.price}</td>
                <td>{x.quantity}</td>
               <td><Button onClick={()=>this.delete(x)}>Remove item</Button></td>
     
 
  
            
            
                {/* <td> {!this.state.confirmtable && <div><Button onClick={()=>this.delete(x)}>Remove item</Button></div>}</td>
                <td>{this.state.confirmtable && <div><Badge pill bg="success">
          Ordered
        </Badge></div>}</td> */}

                
              </tr>
            ))}
          </tbody>
        </Table>
                </div>
                <div>
               <b> TOTAL PRICE:-{a}{this.state.total}</b>
                </div>
                {/* <div>
                  <Button onClick={this.setState({confirmtable: true})}>Confirm Order</Button>
                </div> */}
                <Button onClick={()=>this.reset()}>Reset Cart</Button>
                {/* <div>
                  {this.state.table.map((x)=>{
                  )
                  }
                </div> */}

        </div>
        }
              {!this.state.cart && <div><h1><b>SHOPPING CART IS EMPTY</b></h1>
              <b>Add items to cart first!</b> <br />
              <Link to="/Pharmacy">

              <Button  >Go Back</Button>
              </Link>
              </div>
              } 
                
        
        </>
        );
    }
}

 
export default CheckOut;