import { Table } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { message } from "antd";

const Search=()=>{
    const [year, setYear]=useState("");
    const [mydata, setMydata]=useState([]);
    const handleSubmit=()=>{
        let api=`http://localhost:3000/books/?publish_year=${year}`;
        axios.get(api).then((res)=>{
            setMydata(res.data);

            if(res.data.length<=0){
                errMsg= message.error("No book for this year")
            }
            else{
                errMsg="";
            }
        })
    }
    const ans=mydata.map((key)=>{
        return(
            <>
            <tr className='border-2 font-serif hover:bg-neutral-400 bg-slate-400 font-medium size-9'>
                <td>{key.name}</td>
                <td>{key.price}</td>
                <td>{key.author_name}</td>
                <td>{key.publish_year}</td>
            </tr>
            </>
        )
    });
    return(
        <>
        <div >
    
        <div className='text-center bg-slate-500 w-4/10 text-xl font-semibold mt-5'  >
        Enter Publish Year : <input type="text" value={year} onChange={(e)=>{setYear(e.target.value)}} />
        <button onClick={handleSubmit} style={{border:"2px solid black", borderRadius:"5px", backgroundColor:"whitesmoke"}}>Search</button>
        </div>

        <hr />
        <Table className='text-center font-medium ml-96 pt-44 mt-10 bg-zinc-500  w-4/6 size-7 border-red-950 text-xl' >
  
        <tr >
          <th> Book name</th>
          <th>Price</th>
          <th>Author Name</th>
          <th>Publish Year</th>
        </tr>
      
    
       
      {ans}
  
    </Table>
    </div>
        </>
    )
}
export default Search;