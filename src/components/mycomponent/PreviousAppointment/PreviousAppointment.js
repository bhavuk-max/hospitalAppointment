// import React from "react";
// import { Component } from "react";
// import Table from "react-bootstrap/Table";
// import axios from "axios";

// class PreviousAppointment extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       table: [],
//     };
//   }
//   // state={
//   //   table:[]
//   // };
//   componentDidMount() {
//     const url2 = "http://hospitalappointment/Request_data.php";
//     axios({
//       method: "get",
//       url: `${url2}`,
//       headers: { "content-type": "application/json" },
//       data: this.state,
//     })
//       .then((result) => {
//         console.log(result);
//         this.setState({ table: result.data });
//       })
//       .catch((error) => this.setState({ error: error.message }));
//   }

//   render() {
//     return (
      
//       <div>
//         <h3>Upcoming Appointment</h3>
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Full Name</th>
//               <th>Phone Number</th>
//               <th>Address</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.table.map((x, index) => (
//               <tr>
//                 <td>{index + 1}</td>
//                 <td>{x.FullName}</td>
//                 <td>{x.PhoneNo}</td>
//                 <td>{x.Address}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
      
//     );
//   }
// }

// export default PreviousAppointment;
import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
class PreviousAppointment extends React.Component {
  state = { table: [] };
  componentDidMount() {
    // http://hospitalappointment/getData.php
    const url = "http://hospitalappointment/Request_data.php";
    axios({
      method: "get",
      url: `${url}`,
      headers: { "content-type": "application/json" },
    })
      .then((result) => {
        console.log(result.data);
        if (result) {
          this.setState({ table: result.data });
        }
      })
      .catch((error) => this.setState({ error: error.message }));
  }
  render() {
    return (
      <div>
        <h3>Upcoming Appointment</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Selected Doc</th>
              <th>Date</th>
              <th>Time</th>
              <th>edit</th>
              
            </tr>
          </thead>
          <tbody>
            {this.state.table.map((x, index) => (
              <tr>
                <td>{index+ 1}</td>
                <td>{x.category}</td>
                <td>{x.avail_doc}</td>
                <td>{x.Date}</td>
                <td>{x.Time}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default PreviousAppointment;
