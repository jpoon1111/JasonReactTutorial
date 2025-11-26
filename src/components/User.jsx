import { useParams } from "react-router-dom"

function User() {
  const { id } = useParams();
  console.log(id);



  return (
  <div  style={{ border: `2px solid black` }}>
    <div>{id}</div>
    <h1>{id}</h1>
    <h2>{id}</h2>
    <h2>{id}</h2>
    <h2>{id}</h2>
    {/* <div>{id.name}</div>
    <div>{id.email}</div>
    <div>{id.username}</div> */}
  </div>
  )
}

export default User;