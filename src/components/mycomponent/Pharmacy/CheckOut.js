import React from "react";
import { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Payment from "../Payment/Payment";
import "./checkOut.css";
export class CheckOut extends Component {
  state = {
    table: [],
    Patient_ID: localStorage.getItem("Patient_ID"),
    count: localStorage.getItem("Count"),
    quantity: 0,
    total: 0,
    cart: false,
    confirmtable: false,
    confirmOrder: false,
    payment: null,
    merchantName: "",
    paymentSuccess: true,
  };

  confirmOrder() {
    const { Patient_ID, table } = this.state;
    console.log("table");
    console.log(table);
    const url7 = "http://hospitalappointment/confirmOrder_Pharmacy.php";
    axios({
      method: "post",
      url: `${url7}`,
      headers: { "content-type": "application/json" },
      data: { Patient_ID, table },
    })
      .then((response) => {
        console.log(response);
        if (response) {
          this.setState({ confirmOrder: true });
        }
      })
      .catch((error) => this.setState({ error: error.message }));
  }
  componentDidMount() {
    this.getData();
    this.totalprice();
  }
  reset() {
    const { Patient_ID } = this.state;
    const url6 = "http://hospitalappointment/resetPharmacy.php";
    axios({
      method: "post",
      url: `${url6}`,
      headers: { "content-type": "application/json" },
      data: { Patient_ID },
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
          this.setState({
            table: result.data,
            cart: true,
            merchantName: "Max Care",
          });
        }
      })
      .catch((error) => this.setState({ error: error.message }));
  }
  totalprice() {
    const { Patient_ID } = this.state;
    const url2 = "http://hospitalappointment/totalprice.php";
    axios({
      method: "post",
      url: `${url2}`,
      headers: { "content-type": "application/json" },
      data: { Patient_ID },
    })
      .then((result) => {
        console.log(result.data);
        this.setState({ total: result.data, payment: result.data });

        console.log("total");
      })
      .catch((error) => this.setState({ error: error.message }));
  }
  sumbit() {}
  delete(item) {
    const name = item.NAME;
    const { Patient_ID } = this.state;
    console.log(name);
    const url = "http://hospitalappointment/delete.php";

    axios({
      method: "post",
      url: `${url}`,
      headers: { "content-type": "application/json" },
      data: { name, Patient_ID },
    })
      .then((response) => {
        console.log(response);
        window.location.reload(false);
      })
      .catch((error) => this.setState({ error: error.message }));
  }
  handleClose() {
    this.setState({ confirmOrder: false });
  }

  render() {
    const { confirmOrder, merchantName, payment, paymentSuccess } = this.state;
    const a = "₹";
    return (
      <>
        {confirmOrder ? (
          <div>
            <div className="alert alert-success" role="alert">
              <strong>Order Placed Successfully!!</strong>

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
        {this.state.cart && (
          <div className="Checkout-Dash">
            <h1>CHECKOUT</h1>

            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>

                    <th>quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.table.map((x, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{x.NAME}</td>
                      <td>{x.quantity}</td>
                      <td>
                        {a}
                        {x.price}
                      </td>

                      <td>
                        <Button onClick={() => this.delete(x)}>
                          Remove item
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <div>
              <h3>
                <b>
                  {" "}
                  TOTAL PRICE:-{a}
                  {this.state.total}
                </b>
              </h3>
            </div>

            <div className="pharmacyPayment">
              <Button className="Reset-button" onClick={() => this.reset()}>
                Reset Cart
              </Button>
              <Payment
                payment={payment}
                merchantName={merchantName}
                paymentSuccess={(event) => {
                  if (event.paymentMethodData.tokenizationData.token)
                    this.setState({ paymentSuccess: false });
                }}
              />
            </div>
            <div>
              {" "}
              <Button
                className="Confirm-button"
                disabled={paymentSuccess}
                onClick={() => this.confirmOrder()}
              >
                Confirm Order
              </Button>
            </div>
          </div>
        )}
        {!this.state.cart && (
          <div>
            <h1>
              <b>SHOPPING CART IS EMPTY</b>
            </h1>
            <b>Add items to cart first!</b> <br />
            <Link to="/Pharmacy">
              <Button>Add Items</Button>
            </Link>
          </div>
        )}
      </>
    );
  }
}

export default CheckOut;
