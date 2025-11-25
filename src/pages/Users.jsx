import { useParams } from "react-router-dom"
import React, { useEffect } from "react";


function Users(){

    console.log(useParams());    
    const { username } = useParams(); 

    // useEffect(() => {
    //     fetch(`https://api.instagram.com/${username}`)
    // }, [])
    return (
    <h1>
        Users: { username }
    </h1>
    )

}
export default Users