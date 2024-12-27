 import { useEffect } from "react";
 import { useNavigate } from "react-router-dom";
 
 
 const AdminHome=()=>{
    const navigate = useNavigate()
    useEffect(()=>{
        const Uname= window.localStorage.getItem("UserName");
        const Uemail = window.localStorage.getItem("userEmail");

        if(!Uname){
            navigate("/")
        }

    },[])

    return(
        

        <>
        {/* <Dashboard/> */}
       {/* <Sidebar/> */}
        
        
        </>
    )
 }

 export default AdminHome;

