import React from 'react'

import { Link } from 'react-router-dom';
const Jsx = () => {
    var name ="Naveen ";
    var email ="naveen.jakhar11602376@gmail.com";
    return (
        <>
<h1>My Name Is : { name}</h1>
<h5>Email : { email}</h5>
<h3>This is a Example of JSX</h3>

<Link to="/">
        <button type="button" class="btn btn-primary">Home</button></Link>
            
        </>
    )
}

export default Jsx
