 import { useEffect } from "react";
 import { useNavigate } from "react-router-dom";
//  import Dashboard from '../adminpage/Dashbaord';
//  import Navbar from './Navbar'; 
// import Sidebar from "./Sidebar";
 
 
 const AdminHome=()=>{
    const navigate = useNavigate()
    useEffect(()=>{
        const Uname= window.localStorage.getItem("UserName");
        const Uemail = window.localStorage.getItem("userEmail");

        if(!Uname){
            navigate("/home")
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




// import React from 'react';
// import { useEffect } from "react";
// import { FaBars, FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
// import Dashboard from './Dashbaord';





// const Navbar = ({sidebarToggle, setSidebarToggle}) => {

//     // const navigate = useNavigate()
//         useEffect(()=>{
//             const Uname= window.localStorage.getItem("UserName");
//             const Uemail = window.localStorage.getItem("userEmail");
    
//             if(!Uname){
//                 // navigate("/home")
//             }
    
//         },[])
    
    




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