import React, { Component } from 'react'
import Child from './4child'
import { Link } from 'react-router-dom';

export class Parent extends Component {
    render() {
        var data ="This is passed ny parent component";
        return (
            <>
            <h1>This is parent component</h1>

                <Child data = {data} ></Child>  
                <Link to="/">
        <button type="button" class="btn btn-primary">Home</button></Link>
            </>

        )
    }
}

export default Parent
