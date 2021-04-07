import React , { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom';


const ApiCall = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://panorbit.in/api/users.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.users);
                    console.log("result", result.users)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
    return (
        <>
       {items.map(item =>
                     (<p>{item.name}</p> ))}
                     <Link to="/">
        <button type="button" class="btn btn-primary">Home</button></Link>
        </>
    )
}
}
export default ApiCall