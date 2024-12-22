import { useState } from 'react';
import axios from "axios";
import {message} from "antd";
const Registration=()=>{
  const [input, setInput] =useState({});


  const handleInput=(e)=>{
     let name=e.target.name;
     let value=e.target.value;
     setInput(values=>({...values, [name]:value}));
     
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    let api="http://localhost:8000/users/registration";
    axios.post(api, input).then((res)=>{
        message.success(res.data.msg);
    })
  }

  return(
    <>
   

    <div style={{paddingTop:"5px",display:"flex" ,flexDirection:"column",alignItems:"center",  border:"2px solid black",backgroundColor:"whitesmoke", borderRadius:"5px"}}>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <label style={{fontSize:"20px"}}>Enter your name</label>
        <input type="text" style={{width:"300px", borderRadius:"5px"}} value={input.email} onChange={handleInput}/>
      </div>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <label style={{fontSize:"20px"}}>Enter mobile number</label>
        <input type="number" style={{width:"300px", borderRadius:"5px"}} value={input.email} onChange={handleInput}/>
      </div>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <label style={{fontSize:"20px"}}>Enter your email</label>
        <input type="email" style={{width:"300px", borderRadius:"5px"}} value={input.email} onChange={handleInput}/>
      </div>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <label style={{fontSize:"20px"}}>Enter your password</label>
        <input type="password" style={{width:"300px", borderRadius:"5px"}} value={input.email} onChange={handleInput}/>
      </div>

      <br />
      
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <button onClick={handleSubmit}>Submit</button>
      </div>

    </div>




    
    </>
  )
}

export default Registration;