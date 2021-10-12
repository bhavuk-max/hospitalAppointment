import React, { Component } from 'react';
import Pharmacy from './Pharmacy';


class Grid extends Component {
    constructor(props) {
        super(props);
        //this.IncreCount=this.IncreCount.bind(this)
        //this.handleIncrement=this.handleIncrement.bind(this);
      }
      state = {
        count: 0,
      };
    handleIncrement=()=>{
      const {count}=this.state;
        console.log(count);
        this.setState({count:this.state.count+1});
    }
    handleDecrement=()=>{
     
      const {count}=this.state;
      console.log(count);
      if(count>0){
        this.setState({count:this.state.count-1});
      }
    }
    render() { 
        return <div>
            <button
                type="button"
                className="btn btn-primary btn-sm"
                //={() => this.setState({ count: this.state.count + 1 })}
                onClick={this.handleIncrement}
              >
                +
              </button>
              <span>{this.state.count}</span>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                style={{ marginLeft: "5px" }}
                onClick={this.handleDecrement}
              >
                  -
                  </button>
     
 
  
            
            
        </div>
    }
}
 
export default Grid;