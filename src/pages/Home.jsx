import React, { useEffect } from "react";
import axios from "axios";

function Home() {
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  }, []);
  return <h1>Home</h1>;
}

export default Home;