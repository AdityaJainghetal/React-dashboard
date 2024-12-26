// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';
// const Topmenu=()=>{
//     return(
//         <>
//         <Navbar bg="dark" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Login System</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="home">Home</Nav.Link>
//             <Nav.Link as={Link} to="registration">Registration</Nav.Link>
            
//           </Nav>
//         </Container>
//         </Navbar>


//         </> 
//     )
// }

// export default Topmenu;





// import './Login.css'; // Import the CSS file for styling

// src/Login.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Registration from './../pages/Registration';


// const TopMenu = () => {
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const email = e.target.elements.email.value;
//     const password = e.target.elements.password.value;
//     console.log(email, password);
//   };
  
//   const navigate =useNavigate()



//   const Regi=()=>{
//     navigate("/Registration")
//   }



//   return (
//     <div className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url(https://as2.ftcdn.net/jpg/06/58/35/49/1000_F_658354934_6YjHXHdI9EuxdgyjdNHGwnCYlqMcSfZ8.jpg)" }}>
//       <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
//         <h2 className="text-2xl font-semibold text-center mb-6">Log in to your account 🔐</h2>
//         <form onSubmit={handleFormSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700" htmlFor="email">Email</label>
//             <input className="mt-1 block w-full p-2 border border-gray-300 rounded" type="email" id="email" required />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700" htmlFor="password">Password</label>
//             <input className="mt-1 block w-full p-2 border border-gray-300 rounded" type="password" id="password" required />
//           </div>
//           <a href="" onClick={()=>{Regi}}>
//             Forget password
//           </a>
//           <hr />
//           <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default TopMenu;




import React, { useState } from 'react';
import axios from "axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
// import Registration from '../pages/Registration';

const TopMenu = () => {
 
  
 const [input, setInput] = useState({});

 const navigate = useNavigate()

  const handleInput=(e)=>{
     let name=e.target.name; 
     let value=e.target.value;
     setInput(values=>({...values, [name]:value}));
  }

  

  const handleSubmit=(e)=>{
      e.preventDefault();
      let api="http://localhost:8000/users/usercheck";
      axios.post(api, input).then((res)=>{
                  console.log(res.data.Data[0].name)
                  console.log(res.data.Data[0].email)

                  window.localStorage.setItem("UserName", res.data.Data[0].name);
                  window.localStorage.setItem("userEmail", res.data.Data[0].email);

                      message.success(res.data.msg);

                      navigate("/dashboard")

              })
              .catch((err)=>{
                  message.error(err.response.data.msg);
              })
      
  }


  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url(https://as2.ftcdn.net/jpg/06/58/35/49/1000_F_658354934_6YjHXHdI9EuxdgyjdNHGwnCYlqMcSfZ8.jpg)" }}>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">Log in to your account 🔐</h2>
       
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">Email</label>
            <input
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              type="email"
              id="email"
              name='email'
              required
              onChange={handleInput}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="password">Password</label>
            <input
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              type="password"
              id="password"
              name='password'
              required
              onChange={handleInput}
            />
          </div>
          <a href=""  className="text-blue-500 hover:underline mb-4 block text-center">
            Forget password?
          </a>
          <hr className="my-4" />
          <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit" onClick={handleSubmit}>Login</button>
          <p className="mt-4 text-center">
            Don't have an account? 
            <button  className="text-blue-500 hover:underline"> Register</button>
          </p>
     
      </div>
    </div>
  );
};

export default TopMenu;