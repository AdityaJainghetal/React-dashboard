import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa"; 
import { Link, useNavigate } from "react-router-dom";
import { MdEditDocument } from "react-icons/md";
// import { useState } from 'react';
import { useEffect } from 'react';
import Display from './../pages/Display';

const Sidebar = ({ sidebarToggle }) => {
//  const navigate =useNavigate()
 
  // ....
 
    const [useName, setUserName] = useState("");
    const [useEmail, setUseEmail] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        const Uname= window.localStorage.getItem("UserName");
        const Uemail = window.localStorage.getItem("userEmail");

        if(!Uname){
            navigate("/")
        }


        setUserName(Uname);
        setUseEmail(Uemail)
    },[])

    const logout=()=>{
      window.localStorage.clear()
      navigate("/")
  }

// ...
 
 
  return (
    <>
    
    {/* <Navbar/> */}
    {/* <Dashboard/> */}
    <div style={{display:"flex", position:"fixed"}}>
    <div className={`${sidebarToggle ? "hidden" : "block"} w-64 bg-gray-800 fixed h-full px-4 py-2`}>
      <div className="my-2 mb-4">
        <h1 className="text-2xl text-white font-bold">Aditya Jain</h1>
      </div>
      <hr className="border-gray-600" />
      <ul className="mt-2 text-white font-bold text-2xl gap-y-20 group-autofill" >
       
        
          <Link to="home" className="mb-2 rounded hover:shadow hover:bg-blue-500 py-4 px-2 flex items-center ">
          <FaHome className="w-6 h-6 mr-2" />Home 
         </Link>
      
        

          <Link to="display" className="mb-2 rounded hover:shadow hover:bg-blue-500 py-4 px-2 flex items-center ">
          <FaDisplay className="w-6 h-6 mr-2" />Display
         </Link>
        
        
      
        <Link to="insert" className="mb-2 rounded hover:shadow hover:bg-blue-500 py-4 px-2 flex items-center ">
          <MdOutlineBrowserUpdated className="w-6 h-6 mr-2" />Addpassanger
         </Link>

       
       
       
        <Link to="delete" className="mb-2 rounded hover:shadow hover:bg-blue-500 py-4 px-2 flex items-center ">
          <FaTrashAlt className="w-6 h-6 mr-2" />Deleted
         </Link>

        

        <Link to="search" className="mb-2 rounded hover:shadow hover:bg-blue-500 py-4 px-2 flex items-center ">
          <FaSearch className="w-6 h-6 mr-2" />Search
         </Link>

        

        
        <Link to="Update" className="mb-2 rounded hover:shadow hover:bg-blue-500 py-4 px-2 flex items-center ">
          <MdEditDocument className="w-6 h-6 mr-2" />Update
         </Link>


          
        <button onClick={logout}style={{width:"100%"}}  className="mb-2 rounded hover:shadow hover:bg-blue-500 py-4 px-2 flex items-center ">
          <RiLogoutBoxFill className="w-6 h-6 mr-2" />Logout
         </button>
      </ul>
      <div>
      
     </div>  
 
    </div>
     
     <div>
      {/* <Outlet/> */}
     </div>
     </div>
     </>
  );
};

export default Sidebar;
