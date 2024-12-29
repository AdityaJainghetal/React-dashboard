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
            // console.log("sjdchskjdh")
            navigate("/home")
        }


        setUserName(Uname);
        setUseEmail(Uemail)
    },[])

    const logout=()=>{
        window.localStorage.clear()
        navigate("/")
    }



    return(
        <>
        <div id="admindashbaord">
            
        Welcome : {useName} Email: {useEmail};
            
        <Button variant="primary" onClick={logout} size="sm" style={{marginLeft:"20px", width:"80px"}}>
          Logout
        </Button>
        </div>
        <hr />
        <Sidebar/>

       
                <Outlet/>

        
        
        </>
    )
}

export default Dashboard;