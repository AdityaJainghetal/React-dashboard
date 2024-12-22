import { FaUser } from "react-icons/fa";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';
import axios from "axios";
import {message} from "antd";
import { useNavigate } from "react-router-dom";

const Header=()=>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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

                }).catch((err)=>{
                    message.error(err.response.data.msg);
                })
        
    }

    return(
        <>
        <div id="headerData">
        <FaUser onClick={handleShow} />   
        </div>

       
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        <Form style={{width:"50%", paddingLeft:"50px"}}>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email"  name="email" value={input.email} onChange={handleInput}  /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter password</Form.Label>
        <Form.Control type="password"  name="password" value={input.password} onChange={handleInput}  />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>

    



        </Modal.Body>
      </Modal>
               
        </>
    )
}

export default Header;