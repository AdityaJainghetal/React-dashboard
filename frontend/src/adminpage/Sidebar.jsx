import React from 'react';
import { FaHome } from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa"; 
import { Link, Outlet } from "react-router-dom";
import { MdEditDocument } from "react-icons/md";
// import Navbar from './Navbar';
// import Dashboard from './Dashboard';



const Sidebar = ({ sidebarToggle }) => {
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
       
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-4 px-2 flex items-center ">
          <FaHome className="w-6 h-6 mr-2" />
          <Link to="home">
          <a href="#">
         Home </a>
         </Link>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-4 px-2 flex items-center">
          <FaDisplay className="w-6 h-6 mr-2" />
          <Link to="display">
          <a href="#">
          Display</a>
          </Link>
        
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-4 px-2 flex items-center">
          <MdOutlineBrowserUpdated className="w-6 h-6 mr-2" />
          
          <Link to="insert">
          <a href="#">
          Addpassanger</a>
          </Link>
        
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-4 px-2 flex items-center">
          <FaTrashAlt className="w-6 h-6 mr-2" />
        
          <Link to="delete">
          <a href="#">
          Deleted </a>
          </Link>
       
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-4 px-2 flex items-center">
          <FaSearch className="w-6 h-6 mr-2" />
         <Link to="search">
         <a href="#">
          Search
          </a>
          </Link>
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-4 px-2 flex items-center">
          <MdEditDocument  className="w-6 h-6 mr-2" />
         <Link to="Update">
         <a href="#">
          Update
          </a>
          </Link>
        </li>



        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-3 px-2 flex items-center">
          <RiLogoutBoxFill className="w-6 h-6 mr-2" />
         <Link to="Login">
         <a href="#">
          Logout
          </a>
          </Link>
        </li>
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
