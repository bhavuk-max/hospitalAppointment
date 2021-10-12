import React from "react";
import useState from "react";
import crocin from "../Pharmacy/crocin.png";
import photo2 from "./photo2.jfif";
import photo3 from "./photo3.jfif";
import Azithromycin from "./Azithromycin.jfif";
import Metformin from "./Metformin.jfif";
import Lipitor from "./Lipitor.jpeg";
import Amlodipine from "./Amlodipine.jpeg";
import Amoxicillin from "./Amoxicillin.jpg";
import Hydrochlorothiazide from "./Hydrochlorothiazide.jpeg";
import atorvastatin from "./atorvastatin.jpg";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Pharmacy.css";
import Grid from "./grid";
import { mockComponent } from "react-dom/test-utils";
import { Component } from "react";
class Pharmacy extends Component {
  constructor(props) {
    super(props);
    //this.IncreCount=this.IncreCount.bind(this)
    //this.handleIncrement=this.handleIncrement.bind(this);
  }
  // state = {
  //   count: 0,
  // };
  // handleIncrement=product=>{
  //   console.log(product);
  //   this.setState({count:this.state.count+1});
  // }

  render() {
    return (
      <>
        <Router>
          <div className="Pharmacy">
            <h1>Pharmacy</h1>
          </div>
          <div className="rows-column">
            <div className="column-Pharmacy">
              <img
                src={crocin}
                alt="Crocin image"
                style={{ width: "100%" }}
              ></img>
              <h6>
                <b>Crocin</b>
              </h6>
              <Grid />
              
              <Link to="/Check" className="front-links">
            Order Now
           </Link>
            </div>
            
             <div className="column-Pharmacy">
              <img
                src={photo2}
                alt="Lisinopril"
                style={{ width: "100%" }}
              ></img>
              <h6>
                <b>Lisinopril</b>
              
              </h6> 
              <Grid />
              <Link to="/CheckOut" className="front-links">
                Order Now
              </Link>
            </div>
            <div className="column-Pharmacy">
              <img
                src={photo3}
                alt="Levothyroxine Tablets"
                style={{ width: "100%" }}
              ></img>
              <h6>
                <b>Levothyroxine Tablets</b>
              </h6>
              <Grid />
              
              <Link to="/CheckOut" className="front-links">
                Order Now
              </Link>
            </div>
            <div className="column-Pharmacy">
              <img
                src={Azithromycin}
                alt="Azithromycin"
                style={{ width: "100%" }}
              ></img>
              <h6>
                <b>Azithromycin</b>
              </h6>
              <Grid />
              
              <Link to="/CheckOut" className="front-links">
                Order Now
              </Link>
            </div>
            <div className="column-Pharmacy">
              <img
                src={Metformin}
                alt="Metformin"
                style={{ width: "100%" }}
              ></img>
              <h6>
              <Grid />
                <b>Metformin</b>
              </h6>
              
              <Link to="/CheckOut" className="front-links">
                Order Now
              </Link>
            </div>
          </div>
          <div className="rows-column">
            <div className="column-Pharmacy">
              <img src={Lipitor} alt="Lipitor" style={{ width: "100%" }}></img>
              <h6>
                <b>Lipitor</b>
              </h6>
              <Grid />
              
                -
    
              <Link to="/CheckOut" className="front-links">
                Order Now
              </Link>
            </div>
            <div className="column-Pharmacy">
              <img
                src={Amlodipine}
                alt="Amlodipine"
                style={{ width: "100%" }}
              ></img>
              <h6>
                <b>Amlodipine</b>
              </h6>
              <Grid />
              
              <Link to="/CheckOut" className="front-links">
                Order Now
              </Link>
            </div>
            <div className="column-Pharmacy">
              <img
                src={Amoxicillin}
                alt="Amoxicillin"
                style={{ width: "100%" }}
              ></img>
              <h6>
                <b>Amoxicillin</b>
              </h6>
              <Grid />
             
                -
            
              <Link to="/CheckOut" className="front-links">
                Order Now
              </Link>
            </div>
            <div className="column-Pharmacy">
              <img
                src={Hydrochlorothiazide}
                alt="Hydrochlorothiazide"
                style={{ width: "100%" }}
              ></img>
              <h6>
                <b>Hydrochlorothiazide</b>
              </h6>
              <Grid />
             
              <Link to="/CheckOut" className="front-links">
                Order Now
              </Link>
            </div>
            <div className="column-Pharmacy">
              <img
                src={atorvastatin}
                alt="atorvastatin"
                style={{ width: "100%" }}
              ></img>
              <h6>
                <b>atorvastatin</b>
              </h6>
              <Grid />
              
              <Link to="/CheckOut" className="front-links">
                Order Now
              </Link>
            </div>
          </div>
          <div className="shopping-cart">
            <Link to="/CheckOut">
              <FaShoppingCart size={28} />
            </Link> 
          </div> 
        </Router>
      </>
    );
  }
}

export default Pharmacy;
