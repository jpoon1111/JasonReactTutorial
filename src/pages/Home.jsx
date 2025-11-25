import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/User.jsx"
import { Link } from "react-router-dom";

function Home() {
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
}

export default Home;
