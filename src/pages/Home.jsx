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
    }, 2000);
  }, []);
  const pixels = "2px";

  function renderUsers(){
    return users.map((user) => (
         <Link to={`/users/${user.id}`} key={user.id}>
          <User  id={user.id} name={user.name} email={user.email} username={user.username}/>
        </Link>
      ))
  }

  function renderLoading(){
    return <h2>Loading...</h2>
  }

  return (
    <div>
      {users.length ? renderUsers() : renderLoading()
    }
    </div>
  );
}

export default Home;
