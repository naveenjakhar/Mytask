import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export class Child extends Component {
  
    render() {
        return (
            <>
              <h1>{this.props.data} </h1>  
            </>
        )
    }
}

export default Child
