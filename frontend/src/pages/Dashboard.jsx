import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import {  Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../adminpage/Sidebar";





const Dashboard=()=>{
    const [useName, setUserName] = useState("");
    const [useEmail, setUseEmail] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        const Uname= window.localStorage.getItem("UserName");
        const Uemail = window.localStorage.getItem("userEmail");

        if(!Uname){
            navigate("/home")
        }


        setUserName(Uname);
        setUseEmail(Uemail)
    },[])

    const logout=()=>{
        window.localStorage.clear()
        navigate("/home")
    }



    return(
        <>
        <div id="admindashbaord">
        Welcome : {useName} Email: {useEmail};

        <Button variant="primary" onClick={logout} size="sm" style={{marginLeft:"20px"}}>
          Logout
        </Button>
        </div>
        <hr />
        <Sidebar/>

        {/* <h1>Welcome to admin Dashbaord</h1> */}


        {/* <div id="adminDashbaord">
            <div id="adminMenu">
                <Link to="adminhome">Home page</Link>
                <br/>
                <br/>
                <Link to="adminabout">About page</Link>

            </div>

            <div id="adminData"> */}
                <Outlet/>

            {/* </div> */}
        {/* </div> */}
        
        
        </>
    )
}

export default Dashboard;