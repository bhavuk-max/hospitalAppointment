import React, { Component } from 'react';
import IMAGES from "./index2"
import { companyData } from './index2.js';
class Check extends React.Component {
    render() { 
        return <div>
           <h1> CheckOut Page</h1>
           {companyData && companyData.map((item)=>
           <div key={item.id}>
               <span>{item.id}</span>
               <img src={item.logo}  />
               </div>
               )}
        </div>;
    }
}
 
export default Check;