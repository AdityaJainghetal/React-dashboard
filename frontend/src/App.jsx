import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import AdminHome from "./adminpage/adminHome";
import Display from "./pages/Display";
import Update from "./pages/Update";
import Delete from "./pages/Delele";
import Insert from "./pages/Insert";
import Search from "./pages/Search";
// import AdminAbout from "./adminpage/adminAbout";


const App=()=>{
  return(
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path="home" element={<Home/>}/>
              <Route path="registration" element={<Registration/>}/>
             
            </Route>



            
              
              <Route  path="dashboard" element={<Dashboard/>}>
              <Route index element={<AdminHome/>}/>
             
              <Route path="adminhome" element={<AdminHome/>}/> 
              <Route path="display" element={<Display/>}/>
              <Route path="insert" element={<Insert/>}/>
              <Route path="update" element={<Update/>}/>
              <Route path="delete" element={<Delete/>}/>
              <Route path="search" element={<Search/>}></Route>

               {/* <Route path="adminabout" element={<AdminAbout/>}/> */}
              </Route>
              


          </Routes>

           



        </BrowserRouter>
    </>
  )
}

export default App;