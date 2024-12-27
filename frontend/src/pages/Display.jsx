import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'



const Display = () => {
  const [mydata , setMydata] = useState([]);

  const loaddata=()=>{
    let api= "http://localhost:8000/employer/datadisplay";
    axios.get(api).then((res)=>{
      setMydata(res.data);
    })
  }

  useEffect(()=>{
    loaddata()
  },[])


  const ans= mydata.map((key)=>{
    return(
      <>
      <tr className='border-2 font-serif hover:bg-neutral-400 bg-slate-400 font-medium size-9  ' >
        <td>{key.name}</td>
        <td>{key.price}</td>
        <td>{key.author_name}</td>
        <td>{key.publish_year}</td>
        
      </tr>
      
      </>
    )
  })

  return(
    <>
        <div  style={{paddingLeft:"300px", width:"100%"}}>
    <h1 className='font-serif font-semibold text-4xl pt-8 '></h1>


    <table className='text-center font-medium bg-zinc-500  w-5/6 size-7 border-red-950 text-xl '   >
      <tr>
        <th className='text-2xl'  >Book name</th>
        <th className='text-2xl' >Price</th>
        <th className='text-2xl' >author_name</th>
        <th className='text-2xl' >publish_year</th>
      </tr>
      {ans}
    </table>
    </div>
    </>
  )
  
  
  
  
}

export default Display;