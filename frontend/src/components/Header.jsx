import axios from "axios";
import {message} from "antd";
import { useNavigate } from "react-router-dom";

const Header=()=>{





   const navigate = useNavigate()

   

    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     let api="http://localhost:8000/users/usercheck";
    //     axios.post(api, input).then((res)=>{
    //                 console.log(res.data.Data[0].name)
    //                 console.log(res.data.Data[0].email)

    //                 window.localStorage.setItem("UserName", res.data.Data[0].name);
    //                 window.localStorage.setItem("userEmail", res.data.Data[0].email);

    //                     message.success(res.data.msg);

    //                     navigate("/dashboard")

    //             }).catch((err)=>{
    //                 message.error(err.response.data.msg);
    //             })
        
    // }

    return(
        <>
       
               
        </>
    )
}

export default Header;