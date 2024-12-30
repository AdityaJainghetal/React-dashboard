import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';



const Insert = () => {
  const [input, setInput] = useState({});
  const navigate = useNavigate()



  const handleInput=(e)=>{
    let name= e.target.name;
    let value=e.target.value;
    setInput(values=>({...values,[name]:value}));
    console.log(input);
  }  
  

  const handleSubmit=(e)=>{
    let api="http://localhost:8000/employer/datasave";
    axios.post(api,input).then((res)=>{

      if (!input.name || !input.price || !input.author_name || !input.publish_year) {
        message.error("All fields are required!");
        return;
      }
  
        message.success("Book Inserted Successfully")
        navigate("/dashboard/display")
      });
  }
  
  return (
    <>
     <div className='image'>
    <div style={{display:"flex", justifyContent:"center", alignItems:"center",paddingLeft:"100px", paddingTop:"50px"}} >
   
  
      <div style={{alignItems:"center", border:"2px solid black", borderRadius:"10px", alignContent:"center", padding:"40px"}} className='bg-gray-600 w-3/5  '>
        
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      <label style={{color:"black", fontWeight:"500", fontSize:"20px", fontFamily:"sans-serif"}} htmlFor="Enter your name">Enter your name</label>
      <input type="text" style={{width:"50%",borderRadius:"5px"}} name="name" value={input.name} onChange={handleInput} />
      </div>
      
        <br />

        <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      <label style={{color:"black", fontWeight:"500", fontSize:"20px", fontFamily:"sans-serif"}} htmlFor="Enter your price">Enter your price</label>
      <input type="text"  style={{width:"50%", borderRadius:"5px"}} name="price" value={input.price} onChange={handleInput} />
      </div>
      
<br />

<div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      <label  style={{color:"black", fontWeight:"500", fontSize:"20px", fontFamily:"sans-serif"}} htmlFor="Enter your author">Enter your author</label>
      <input type="text"  style={{width:"50%",borderRadius:"5px"}} name="author_name" value={input.author_name} onChange={handleInput} />
      </div>
    
<br />
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      <label  style={{color:"black", fontWeight:"500", fontSize:"20px", fontFamily:"sans-serif"}} htmlFor="Enter your year">Enter your year</label>
      <input type="text"  style={{width:"50%",borderRadius:"5px"}}  name="publish_year" value={input.publish_year} onChange={handleInput} />
      </div>
      <br />
      <br />
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <button style={{border:"2px solid black", borderRadius:"5px", padding:"5px", backgroundColor:"darkgray"}}  onClick={handleSubmit} 
      
      
      >Submit</button>
      </div>

      </div>
   
   
   
   
   

    </div>
    </div>
    </>
  )
}

export default Insert




