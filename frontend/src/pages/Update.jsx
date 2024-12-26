// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import axios from 'axios'
// import { RiEdit2Fill } from "react-icons/ri";

// import { useNavigate } from 'react-router-dom';

// const Update = () => {
//   const [myData , setMydata] = useState([]);
//   const navigate=useNavigate()

//   const loaddata=()=>{
//     let api= "http://localhost:3000/books";
//     axios.get(api).then((res)=>{
//       setMydata(res.data);
//     })
//   }

//   useEffect(()=>{
//     loaddata()
//   },[])




//   const myEdit=(id)=>{
//     navigate(`/edit/${id}`)
//   }


  




//   const ans= myData.map((key)=>{
//     return(
//       <>
//       <tr className='border-2 font-serif hover:bg-neutral-400 bg-slate-400 font-medium size-9  ' >
//         <td>{key.name}</td>
//         <td>{key.price}</td>
//         <td>{key.author_name}</td>
//         <td>{key.publish_year}</td>
//         <td>


//             <a href='' onClick={()=>{myEdit(key.id)}}>
//         <RiEdit2Fill />
        
//         </a> 

//         {/* <a href="" onClick={()=>{myEdit(key.id)}}>
//            <RiEdit2Fill />
//         </a> */}

//         </td>
//       </tr>
      
//       </>
//     )
//   })

//   return(
//     <>
//         <div  style={{paddingLeft:"300px", width:"100%"}}>
//     <h1 className='font-serif font-semibold text-4xl pt-8 '></h1>


//     <table className='text-center font-medium bg-zinc-500  w-5/6 size-7 border-red-950 text-xl'>
//       <tr>
//         <th className='text-2xl'  >Book name</th>
//         <th className='text-2xl' >Price</th>
//         <th className='text-2xl' >author_name</th>
//         <th className='text-2xl' >publish_year</th>
//         <th className='text-2xl' > Edit</th>
//       </tr>
//       {ans}
//     </table>
//     </div>
//     </>
//   )
  
  
  
  
// }

// export default Update;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RiEdit2Fill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Update = () => {
  const [myData, setMyData] = useState([]);
  const navigate = useNavigate();

  const loadData = () => {
    const api = "http://localhost:3000/books";
    axios.get(api)
      .then((res) => {
        setMyData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  const myEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const ans = myData.map((key) => (
    <tr key={key.id} className='border-2 font-serif hover:bg-neutral-400 bg-slate-400 font-medium size-9'>
      <td>{key.name}</td>
      <td>{key.price}</td>
      <td>{key.author_name}</td>
      <td>{key.publish_year}</td>
      <td>
        <button onClick={() => {myEdit(key.id)}} className="text-blue-500">
          <RiEdit2Fill />
        </button>
      </td>
    </tr>
  ));

  return (
    <div style={{ paddingLeft: "300px", width: "100%" }}>
      <h1 className='font-serif font-semibold text-4xl pt-8'>Update Books</h1>
      <table className='text-center font-medium bg-zinc-500 w-5/6 size-7 border-red-950 text-xl'>
        <thead>
          <tr>
            <th className='text-2xl'>Book Name</th>
            <th className='text-2xl'>Price</th>
            <th className='text-2xl'>Author Name</th>
            <th className='text-2xl'>Publish Year</th>
            <th className='text-2xl'>Edit</th>
          </tr>
        </thead>
        <tbody>
          {ans}
        </tbody>
      </table>
    </div>
  );
};

export default Update;

