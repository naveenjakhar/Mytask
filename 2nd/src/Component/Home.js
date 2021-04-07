import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="container">
        <div className="row">

        <div className="col-2">
        <Link to="/1">
        <button type="button" class="btn btn-primary">#1 First</button></Link>
        </div>
        <div className="col-2">
        <Link to="/2">
        <button type="button" class="btn btn-secondary">#2 Sec</button></Link>
        </div> 
        
        <div className="col-2">
        <Link to="/3">
        <button type="button" class="btn btn-success">#3 Third</button></Link>
        </div> <div className="col-2"> <Link to="/4">
        <button type="button" class="btn btn-danger">#4 Fourth</button></Link>
        </div> <div className="col-2"> <Link to="/5">
        <button type="button" class="btn btn-warning">#5 Fifth</button></Link>
        </div>
        </div>
            
        </div>
    )
}

export default Home
