import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Timer = () => {
    const [date, setDate] = useState(new Date());

 //Replaces componentDidMount and componentWillUnmount
 useEffect(() => {
  var timerID = setInterval( () => tick(), 1000 );
  return function cleanup() {
      clearInterval(timerID);
    };
 });

   function tick() {
    setDate(new Date());
   }
    return (
        <>
            <h2>{date.toLocaleTimeString()}.</h2>
            <Link to="/">
        <button type="button" class="btn btn-primary">Home</button></Link>
        </>
    )
}

export default Timer
