import React from "react";
import { Component } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

class PreviousAppointment extends Component {
  constructor(props)
{
  super(props);
    this.state = {
        table: []
    }
}
  // state={
  //   table:[]
  // };
  componentDidMount(){
    
    const url2 = "http://hospitalappointment/Request_data.php";
    axios({
      method: "get",
      url: `${url2}`,
      headers: { "content-type": "application/json" },
      data: this.state,
    })
      .then((response) => {
        console.log(response);
        this.setState({ table: response.data });
      })
      .catch((error) => this.setState({ error: error.message }));
  }
  
  render(){
  return (
    <>
    
    <div className="PreviousAppointment">

       <h6>MY Appointment:-</h6>
      </div>
      <div className="Table">
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>Id</th>
      <th>Category</th>
      <th>Date</th>
      <th>Time</th>
    </tr>
  </thead>
  <tbody>
            {this.state.table.map((x, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{x.category}</td>
                <td>{x.Date}</td>
                <td>{x.Time}</td>
              </tr>
            ))}
          </tbody>
  {/* <tbody>
    {this.state.data.map((x,index)=>(
      <tr>
        <td>{x.index+1}</td>
        <td>{x.category}</td>
        {/* <td>{x.avail_doc}</td>
        <td>{x.Date}</td>
        <td>{x.Time}</td>
        </tr>
    ))} 
    {/*<tr>
      <td>1</td>
      <td>Heart</td>
      <td>5-10-2021</td>
      <td>11:00 AM</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Bone</td>
      <td>10-10-2021</td>
      <td>1:30 PM</td>
    </tr>
    <tr>
      <td>3</td>
      <td >Neurologist</td>
      <td>15-10-2021</td>
      <td>2:30 PM</td>
    </tr>
  </tbody>*/}
</Table> 
        {/* <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sr no</th>
              <th>Category</th>
              <th>Date</th>
              <th>Time</th>
              <th>To Change Your Appointment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table> */}
      </div>
   </>
    
  );
}
}

export default PreviousAppointment;
