import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "../components/User.jsx";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    console.log(data);
    setUsers(data);
  }
  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 500);
  }, []);
  const pixels = "2px";
  return (
    <div>
      {users.map((user) => (
        <Link to={`/user/${user.id}`} key={user.id}>
          <User
            id={user.id}
            name={user.name}
            email={user.email}
            username={user.username}
          />
        </Link>
      ))}
    </div>
  );
}
export default Users;

/**
 function User({ id, name, email, username}) {
  return (
  <div  style={{ border: `2px solid black` }}>
    <div>{id}</div>
    <div>{name}</div>
    <div>{email}</div>
    <div>{username}</div>
  </div>
  )
}

export default User
 */

/*
const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    console.log(data);
    setUsers(data);
  }
  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 500);
  }, []);
  const pixels = "2px";
  return (
    <div>
      {users.map((user) => (
         <Link to={`/users/${user.id}`} key={user.id}>
          <User  id={user.id} name={user.name} email={user.email} username={user.username}/>
        </Link>
      ))}
    </div>
  );
  */

/*
    Original users component

function Users( ){

    console.log(useParams());    
    const { id } = useParams(); 
        console.log(id);
    // useEffect(() => {
    //     fetch(`https://api.instagram.com/${username}`)
    // }, [])
    return (
    <h1>
        Users: { id }
    </h1>
    )

}
export default Users
  
  */
