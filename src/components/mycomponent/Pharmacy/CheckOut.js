import React from "react";
import { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
export class CheckOut extends Component {
    
    state = { table: [] };
//     componentDidMount() {
//       // http://hospitalappointment/getData.php
//       const { Patient_ID } = this.state;
//       const url5 = "http://project/get_pharmacy.php";
//       axios({
//         method: "post",
//         url: `${url5}`,
//         headers: { "content-type": "application/json" },
//         data: { },
  
//       }).then((result) => {
//         console.log(result.data);
//     //     if (result) {
//     //       this.setState({ table: result.data });
//     //     }
//     //   })
//       .catch((error) => this.setState({ error: error.message }));
//   }
    
        render(){
        return <div>
            <h1>CHECKOUT PAGE</h1>
            {/* <span>{props.checkid}</span>
            <span>{props.greeting}</span>
            <span>{props.name}</span> */}
            <div>
            <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              
            </tr>
          </thead>
          <tbody>
            {this.state.table.map((x, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{x.FullName}</td>
                <td>{x.PhoneNo}</td>
                <td>{x.Qualification}</td>
                <td>{x.Date}</td>
                <td>{x.Time}</td>
              </tr>
            ))}
          </tbody>
        </Table>
                </div>

        </div>;
    }
}

 
export default CheckOut;