import { useParams } from "react-router-dom";
import React, { useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Users() {
    
    const { id } = useParams();
    const [user, setUser] = useState({});

    async function fetchUser(){
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        console.log(data);
        setUser(data);
    }

    useEffect(() => {
        fetchUser();
    }, []) 

    // useEffect(() => {
    //     axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    // }
    // )
  return (
    <div>
        <Link to="/">Go back</Link>
        <h2>{user.id}</h2>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.username}</p>
    </div>
  );
}
export default Users;
