import React from 'react'
import { useEffect, useState } from "react";

function LandingPage() {


    // useEffect(() => {
    //     const userInfo = localStorage.getItem("userInfo");
    //     if(userInfo){
    //         history.push("/resources")
    //     }
    //   },[history])

      

    return (
        <div className="container mt-5">
            <h1>Welcome To MERN Project</h1>
            <a href=""><button type="button" class="btn btn-outline-primary">Login</button></a>
            <a href=""><button type="button" class="btn btn-outline-primary m-4">Register</button></a>
        </div>
    )
}

export default LandingPage
