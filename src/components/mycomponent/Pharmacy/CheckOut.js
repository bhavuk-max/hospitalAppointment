import React from "react";
import { Component } from "react";
const CheckOut =(props)=>{
    console.log(props);
    
    
        
        return <div>
            <h1>CHECKOUT PAGE</h1>
            <span>{props.checkid}</span>
            <span>{props.greeting}</span>
            <span>{props.name}</span>
            <div>

                </div>

        </div>;
    }


 
export default CheckOut;