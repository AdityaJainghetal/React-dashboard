import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
import {message} from 'antd';
import { MdDelete } from "react-icons/md";

const Delete = () => {
  const [mydata , setMydata] = useState([]);
  // const navigate= useNavigate();


  const loaddata=()=>{
    let api= "http://localhost:3000/books";
    axios.get(api).then((res)=>{
      setMydata(res.data);
    })
  }

  useEffect(()=>{
    loaddata()
  },[])

  const myDel=(id)=>{
    let api= `http://localhost:3000/books/${id}`;
    axios.delete(api).then((res)=>{
      message.error("Record successfully delete")
      loaddata()
    })
  }




  const ans= mydata.map((key)=>{
    return(
      <>
      <tr className='border-2 font-serif hover:bg-neutral-400 bg-slate-400 flex-col ' >
        <td>{key.name}</td>
        <td>{key.price}</td>
        <td>{key.author_name}</td>
        <td>{key.publish_year}</td>
        <td>
          <a href="#" onClick={()=>{myDel(key.id)}}>
        <MdDelete/>
        </a>
        </td>
      </tr>
      
      </>
    )
  })

  return(
    <>
        <div  style={{paddingLeft:"300px"}}>
    <h1 className='font-serif font-semibold px-5 text-4xl pt-8'>Diplay data</h1>


    <table className='text-center font-medium bg-zinc-500  w-5/6 size-7 border-red-950 text-xl'   >
      <tr>
        <th>Book name</th>
        <th>Price</th>
        <th>author_name</th>
        <th>publish_year</th>
        <th >Delete</th>
      
      </tr>
      {ans}
    </table>
    </div>
    </>
  )
  
  
  
  
}

export default Delete;