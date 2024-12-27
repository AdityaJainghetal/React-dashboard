import { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";
import { useParams } from "react-router-dom";


const Edit=()=>{
    const [mydata, setMydata] =useState({});
    const {id} = useParams();

    const loadData=()=>{
        let api = `http://localhost:8000/employer/editdisplay/?id=${id}`;
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res.data);
        })
    }

    useEffect(()=>{
        loadData()
    },[]);

    
    


    const handleInput=(e)=>{
        let name=e.target.name;
        let value =e.target.value;
        setMydata(values=>({...values,[name]:value}));
        // console.log(mydata);
    }

    const handleSubmit=()=>{
        let api = "http://localhost:8000/employer/editsave";
        axios.post(api,{id:id,...mydata}).then((res)=>{
            message.success("Data successfully updated")
        })
    }
   


    return(
        <>
       <div  style={{display:"flex", justifyContent:"center",alignItems:"center" }}>
       <h1>Update your Record</h1> 
       <div className='border-2 font-serif pt-5 size-auto text-xl font-semibold hover:bg-neutral-400 mt-12 w-3/6 flex-col bg-slate-400 caret-gray-700 flex justify-center text-center'>
        Edit name: <input type="text" name="name" value={mydata.name} onChange={handleInput} className="bg-slate-200  font-serif rounded-md text-center"/>
        <br />
        Edit Price: <input type="text" name="price" value={mydata.price} onChange={handleInput} className="bg-slate-200 rounded-md text-center"/>
        <br />
        Edit Author_name: <input type="text" name="author_name" value={mydata.author_name} onChange={handleInput} className="bg-slate-200 rounded-md text-center" />
        <br />
        Edit Publish Year : <input type="text" name="publish_year" value={mydata.publish_year} onChange={handleInput} className="bg-slate-200 rounded-md text-center"/>
       <br />

       <button onClick={handleSubmit}  className="bg-red-950 text-slate-50 w-60 ml-72" >Update save </button>
       </div>
        </div>
        </>
    )
}


export default Edit;