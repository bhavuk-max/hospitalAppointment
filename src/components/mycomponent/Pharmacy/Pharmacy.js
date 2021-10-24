import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
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
import promethazine from "./promethazine.jpg";
import ibuprofen from "./ibuprofen.jfif";
import paracetamol from "./paracetamol.jpg";
import codeine from "./codeine.png";
import morphine from "./morphine.jpg";
import chloroquine from "./chloroquine.jpg";
import azathioprine from "./azathioprine.png";
import methotrexate from "./methotrexate.jpg";
import penicillamine from "./penicillamine.jpg";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Pharmacy.css";
import Grid from "./grid";
import { mockComponent } from "react-dom/test-utils";
import photos from "./photos";
import { Component } from "react";
class Pharmacy extends Component {
  constructor(props) {
    super(props);
    //this.capitalizedName=this.capitalizedName.bind(this);
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
    // const photos=[{
    //   Name:"Azithromycin",
    //   source:'./Azithromycin.jfif.png',
    //   width: "12rem",
    //    height: "20rem",
    //    alt: "Azithromycin tablets" 
    //   }]
    return (
      <>
      {/* <div className="rows-column">
           <div className="column-Pharmacy"> 
             {photos.map((image,index)=>(
               <div>
             <image key={index} src={require(`./${image.Name}.jfif`)} width={image.width}  alt={image.alt} />
             <h1>{image.Name}</h1>
             </div>
            //  <Card style={{ width: "12rem" }}>
            //             <Card.Img variant="top" className="image-size" src={require(image.source)} />
                        
            //            <Card.Body>
            //              <Card.Title>
            //                <h6>
            //                 <b>{image.Name}</b>
            //               </h6>
            //            </Card.Title>
         
            //           <Grid />
            //               <Button className="Order-now" variant="primary">
            //                 Order Now
            //               </Button>
            //            </Card.Body>
            //           </Card>
             ))}
            
             */}
      
     
        <div className="Pharmacy">
          <h1>Pharmacy</h1>
        </div>
        <div className="rows-column">
          <div className="column-Pharmacy">
            <Card style={{ width: "12rem" }}>
              <Card.Img variant="top" src={crocin} />
              <Card.Body>
                <Card.Title>
                  <h6>
                    <b>Crocin</b>
                  </h6>
                </Card.Title>

                <Grid />
                <Button className="Order-now" variant="primary">
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </div>

          <div className="column-Pharmacy">
            <Card style={{ width: "12rem" }}>
              <Card.Img variant="top" src={photo2} alt="Lisinopril" />
              <Card.Body>
                <Card.Title>
                  <h6>
                    <b>Lisinopril</b>
                  </h6>
                </Card.Title>

                <Grid />
                <Button className="Order-now" variant="primary">
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="column-Pharmacy">
            <Card style={{ width: "12rem", height: "20rem" }}>
              <Card.Img
                variant="top"
                src={photo3}
                alt="Levothyroxine Tablets"
              />
              <Card.Body>
                <Card.Title>
                  <h6>
                    <b>Levothyroxine Tablets</b>
                  </h6>
                </Card.Title>

                <Grid />
                <Button className="Order-now" variant="primary">
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="column-Pharmacy">
            <Card style={{ width: "12rem", height: "20rem" }}>
              <Card.Img
                variant="top"
                src={Azithromycin}
                alt="Azithromycin Tablets"
              />
              <Card.Body>
                <Card.Title>
                  <h6>
                    <b>Azithromycin Tablets</b>
                  </h6>
                </Card.Title>

                <Grid />
                <Button className="Order-now" variant="primary">
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="column-Pharmacy">
            <Card style={{ width: "12rem", height: "20rem" }}>
              <Card.Img variant="top" src={Metformin} alt="Metformin Tablets" />
              <Card.Body>
                <Card.Title>
                  <h6>
                    <b>Metformin Tablets</b>
                  </h6>
                </Card.Title>

                <Grid />
                <Button className="Order-now" variant="primary">
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="rows-column">
          <div className="column-Pharmacy">
            <Card style={{ width: "12rem", height: "20rem" }}>
              <Card.Img variant="top" src={Lipitor} alt="Lipitor Tablets" />
              <Card.Body>
                <Card.Title>
                  <h6>
                    <b>Lipitor Tablets</b>
                  </h6>
                </Card.Title>

                <Grid />
                <Button className="Order-now" variant="primary">
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="column-Pharmacy">
            <Card style={{ width: "12rem", height: "20rem" }}>
              <Card.Img
                variant="top"
                src={Amlodipine}
                alt="Amlodipine Tablets"
              />
              <Card.Body>
                <Card.Title>
                  <h6>
                    <b>Amlodipine Tablets</b>
                  </h6>
                </Card.Title>

                <Grid />
                <Button className="Order-now" variant="primary">
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="column-Pharmacy">
            <Card style={{ width: "12rem", height: "20rem" }}>
              <Card.Img
                variant="top"
                src={Amoxicillin}
                alt="Amoxicillin Tablets"
              />
              <Card.Body>
                <Card.Title>
                  <h6>
                    <b>Amoxicillin Tablets</b>
                  </h6>
                </Card.Title>

                <Grid />
                <Button className="Order-now" variant="primary">
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="column-Pharmacy">
            <Card style={{ width: "12rem", height: "20rem" }}>
              <Card.Img
                className="image-size"
                variant="top"
                src={Hydrochlorothiazide}
                alt="Hydrochlorothiazide Tablets"
              />
              <Card.Body>
                <Card.Title>
                  <h6>
                    <b>Hydrochlorothiazide Tablets</b>
                  </h6>
                </Card.Title>

                <Grid />
                <Button className="Order-now" variant="primary">
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="column-Pharmacy">
            <Card style={{ width: "12rem", height: "20rem" }}>
              <Card.Img
                className="image-size"
                variant="top"
                src={atorvastatin}
                alt="atorvastatin Tablets"
              />
              <Card.Body>
                <Card.Title>
                  <h6>
                    <b>atorvastatin Tablets</b>
                  </h6>
                </Card.Title>

                <Grid />
                <Button className="Order-now" variant="primary">
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="shopping-cart">
          <Link to="/CheckOut">
            <FaShoppingCart size={28} />
          </Link>
        </div>
        <div className="rows-column">
          <div className="column-Pharmacy">
            <Card style={{ width: "12rem", height: "20rem" }}>
              <Card.Img
                className="image-size"
                variant="top"
                src={Lipitor}
                alt="Lipitor Tablets"
              />
              <Card.Body>
                <Card.Title>
                  <h6>
                    <b>Lipitor Tablets</b>
                  </h6>
                </Card.Title>

                <Grid />
                <Button className="Order-now" variant="primary">
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="column-Pharmacy">
            <Card style={{ width: "12rem", height: "20rem" }}>
              <Card.Img
                className="image-size"
                variant="top"
                src={promethazine}
                alt="promethazine Tablets"
              />
              <Card.Body>
                <Card.Title>
                  <h6>
                    <b>promethazine Tablets</b>
                  </h6>
                </Card.Title>

                <Grid />
                <Button className="Order-now" variant="primary">
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </div>

          <div className="column-Pharmacy">
            <Card style={{ width: "12rem", height: "20rem" }}>
              <Card.Img
                className="image-size"
                variant="top"
                src={ibuprofen}
                alt="ibuprofen Tablets"
              />
              <Card.Body>
                <Card.Title>
                  <h6>
                    <b>ibuprofen Tablets</b>
                  </h6>
                </Card.Title>

                <Grid />
                <Button className="Order-now" variant="primary">
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="column-Pharmacy">
            <Card style={{ width: "12rem", height: "20rem" }}>
              <Card.Img
                className="image-size"
                variant="top"
                src={paracetamol}
                alt="paracetamol Tablets"
              />
              <Card.Body>
                <Card.Title>
                  <h6>
                    <b>paracetamol Tablets</b>
                  </h6>
                </Card.Title>

                <Grid />
                <Button className="Order-now" variant="primary">
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="column-Pharmacy">
            <Card style={{ width: "12rem", height: "20rem" }}>
              <Card.Img
                className="image-size"
                variant="top"
                src={codeine}
                alt="codeine Tablets"
              />
              <Card.Body>
                <Card.Title>
                  <h6>
                    <b>codeine Tablets</b>
                  </h6>
                </Card.Title>

                <Grid />
                <Button className="Order-now" variant="primary">
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="rows-column">
          <div className="column-Pharmacy">
            <Card style={{ width: "12rem", height: "20rem" }}>
              <Card.Img
                className="image-size"
                variant="top"
                src={morphine}
                alt="morphine Tablets"
              />
              <Card.Body>
                <Card.Title>
                  <h6>
                    <b>morphine Tablets</b>
                  </h6>
                </Card.Title>

                <Grid />
                <Button className="Order-now" variant="primary">
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="column-Pharmacy">
            <Card style={{ width: "12rem", height: "20rem" }}>
              <Card.Img
                className="image-size"
                variant="top"
                src={azathioprine}
                alt="azathioprine Tablets"
              />
              <Card.Body>
                <Card.Title>
                  <h6>
                    <b>azathioprine Tablets</b>
                  </h6>
                </Card.Title>

                <Grid />
                <Button className="Order-now" variant="primary">
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </div>
          
          <div className="column-Pharmacy">
            <Card style={{ width: "12rem", height: "20rem" }}>
              <Card.Img
                className="image-size"
                variant="top"
                src={chloroquine}
                alt="chloroquine Tablets"
              />
              <Card.Body>
                <Card.Title>
                  <h6>
                    <b>chloroquine Tablets</b>
                  </h6>
                </Card.Title>

                <Grid />
                <Button className="Order-now" variant="primary">
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="column-Pharmacy">
            <Card style={{ width: "12rem", height: "20rem" }}>
              <Card.Img
                className="image-size"
                variant="top"
                src={methotrexate}
                alt="methotrexate Tablets"
              />
              <Card.Body>
                <Card.Title>
                  <h6>
                    <b>methotrexate Tablets</b>
                  </h6>
                </Card.Title>

                <Grid />
                <Button className="Order-now" variant="primary">
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </div>
          
          <div className="column-Pharmacy">
            <Card style={{ width: "12rem", height: "20rem" }}>
              <Card.Img
                className="image-size"
                variant="top"
                src={penicillamine}
                alt="penicillamine Tablets"
              />
              <Card.Body>
                <Card.Title>
                  <h6>
                    <b>penicillamine Tablets</b>
                  </h6>
                </Card.Title>

                <Grid />
                <Button className="Order-now" variant="primary">
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        
      </>
    
    );
  }
}

export default Pharmacy;
