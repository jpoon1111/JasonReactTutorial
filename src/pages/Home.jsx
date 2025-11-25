import React, { useEffect } from "react";
import { Axios } from "axios";

function Home() {
  useEffect(() => {
    Axios.get(`https//jsonplaceholder.typicode.com/users`);
  }, []);
  return <h1>Home</h1>;
}

export default Home;
