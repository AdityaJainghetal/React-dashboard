import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import {message} from 'antd';
import { MdDelete } from "react-icons/md";

const Delete = () => {
  const [mydata , setMydata] = useState([]);
  // const navigate= useNavigate();


  const loaddata=()=>{
    let api= "http://localhost:8000/employer/datadisplay";
    axios.get(api).then((res)=>{
      setMydata(res.data);
      // console.log(res.data);
    })
  }

  useEffect(()=>{
    loaddata()
  },[])

  const myDel=(id)=>{
    let api= "http://localhost:8000/employer/recorddelete";
    axios.post(api,{myid:id}).then((res)=>{
      // alert("Data deleted")
      
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
          <a href="" style={{textAlign:"center"}} onClick={()=>{myDel(key._id)}}>
        <MdDelete/>
        </a>
        </td>
      </tr>
      
      </>
    )
  })

  return(
    <>
    <div className='image'>
        <div  style={{paddingLeft:"300px" }} >
    <h1 className='font-serif font-semibold px-5 text-4xl pt-8'></h1>


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
    </div>
    </>
  )
  
  
  
  
}

export default Delete;