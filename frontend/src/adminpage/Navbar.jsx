// import React from 'react'
// import { FaBars, FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
// import Button from 'react-bootstrap/Button';
// import {  Outlet, useNavigate } from "react-router-dom";
// import Sidebar from "../adminpage/Sidebar";





// const Navbar = ({sidebarToggle, setSidebarToggle}) => {
//     const [useName, setUserName] = useState("");
//     const [useEmail, setUseEmail] = useState("")
//     const navigate = useNavigate()

//     useEffect(()=>{
//         const Uname= window.localStorage.getItem("UserName");
//         const Uemail = window.localStorage.getItem("userEmail");

//         if(!Uname){
//             navigate("/home")
//         }


//         setUserName(Uname);
//         setUseEmail(Uemail)
//     },[])

//     const logout=()=>{
//         window.localStorage.clear()
//         navigate("/home")
//     }



//     return(
//         <>
//         <div id="admindashbaord">
//         Welcome : {useName} Email: {useEmail};

//         <Button variant="primary" onClick={logout} size="sm" style={{marginLeft:"20px"}}>
//           Logout
//         </Button>
//         </div>
//         <hr />





//   return (
//     <div className='bg-gray-800 px-4 py-4 flex justify-between'>
//         <div className='flex items-center text-xl'>
//         <FaBars  className='text-white me-4 cursor-pointer' onClick={()=>setSidebarToggle(!sidebarToggle)}/>
//         <span className='text-white font-semibold'>Train ticket</span>
//         </div>
//         <div className='flex items-center gap-x-5'>
//             <div className='relative md:w-65'>
//                 <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2'>
//                     <button className='p-1 focus:outline-none text-white md:text-black'><FaSearch/></button>
//                     </span>
//                 <input type="text"  className='w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block'/>
//             </div>

//             <div className='text-white'>
//                 <FaBell className='w-6 h-6'/>
//             </div>

//             <div className='relative'>
//                 <button className='text-white group'>
//                     <FaUserCircle className='w-6 h-6 mt-1'/>
//                     <div className='z-10 hidden absolute rounded-lg shadow w-32 group-focus:block top-full right-0'>
//                         <ul className='py-2 text-sm text-gray-950'>
//                             <li>
//                                 <a href="#">Profile</a>
//                                 <a href="#">Setting</a>
//                                 <a href="#">Logout</a>
//                             </li>
//                         </ul>
//                     </div>
//                 </button>
//             </div>


//         </div>

       
//     </div>
//   )
// }

// export default Navbar









// import React, { useState, useEffect } from "react";
// import { FaBars, FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
// import Button from "react-bootstrap/Button";
// ;

// const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
//   const [userName, setUserName] = useState("");
//   const [userEmail, setUserEmail] = useState("");
  

//   useEffect(() => {
//     const Uname = window.localStorage.getItem("UserName");
//     const Uemail = window.localStorage.getItem("userEmail");

//     if (!Uname) {
//       navigate("/home");
//     }

//     setUserName(Uname);
//     setUserEmail(Uemail);
//   }, [navigate]);


//   return (
//     <>
//       <div id="admindashboard" className="p-4">
//         Welcome: {userName} Email: {userEmail}
//         <Button variant="primary" onClick={logout} size="sm" style={{ marginLeft: "20px"}}>
//           Logout
//         </Button>
//       </div>
//       <hr />
//       <div className="bg-gray-800 px-4 py-4 flex justify-between">
//         <div className="flex items-center text-xl">
//           <FaBars
//             className="text-white me-4 cursor-pointer"
//             onClick={() => setSidebarToggle(!sidebarToggle)}
//           />
//           <span className="text-white font-semibold">Train Ticket</span>
//         </div>
//         <div className="flex items-center gap-x-5">
//           <div className="relative md:w-65">
//             <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
//               <button className="p-1 focus:outline-none text-white md:text-black">
//                 <FaSearch />
//               </button>
//             </span>
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block"
//             />
//           </div>
//           <div className="text-white">
//             <FaBell className="w-6 h-6" />
//           </div>
//           <div className="relative">
//             <button className="text-white group">
//               <FaUserCircle className="w-6 h-6 mt-1" />
//               <div className="z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0">
//                 <ul className="py-2 text-sm text-gray-950">
//                   <li key="profile">
//                     <a href="#">Profile</a>
//                   </li>
//                   <li key="settings">
//                     <a href="#">Setting</a>
//                   </li>
//                   <li key="logout">
//                     <a href="#" onClick={logout}>
//                       Logout
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
