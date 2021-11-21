
import React, { Component } from 'react';
import crocin from "../Pharmacy/crocin.png";
import Card from "react-bootstrap/Card";
import IncrementDecrement from "./IncrementDecrement";
import { Button } from "react-bootstrap";
class Stopka extends Component {
    render() {
        let names = ['crocin'].map( (name, index) => {
            return <img key={index} className="img-responsive" width="100%" alt="" src={require(`./${name}.png`)} />
        } );
        return (
            <div className="container">
                <footer className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <h4>some text</h4>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        { names }

                    </div>
                    <img src={crocin} />
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

                 <IncrementDecrement />
                 <Button className="Order-now" variant="primary">
                   Order Now
                 </Button>
               </Card.Body>
             </Card>
           </div></div>
                </footer>
            </div>
        );
    }
}


export default Stopka;