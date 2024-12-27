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
import Edit from './pages/Edit';
import LoginPage from "./pages/LoginPage";


const App=()=>{
  return(
    <>
        <BrowserRouter>
          <Routes>
          
            <Route path="/" element={<Layout/>}>
            <Route index element={<LoginPage/>}/>
               <Route path="Registration" element={<Registration/>}/> 
               
            </Route>



            
              
              <Route  path="dashboard" element={<Dashboard/>}>
             
              <Route path="adminhome" element={<AdminHome/>}/> 
              <Route index element={<Home/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="display" element={<Display/>}/>
              <Route path="insert" element={<Insert/>}/>
              <Route path="update" element={<Update/>}/>
              <Route path="delete" element={<Delete/>}/>
              <Route path="search" element={<Search/>}/>
              <Route path="edit/:id" element={<Edit/>}/>
              <Route path="Registration" element={<Registration/>}/>
              {/* <Route path="Registration" element={<Registration/>}/> */}

               {/* <Route path="adminabout" element={<AdminAbout/>}/> */}
              </Route>
              


          </Routes>

           



        </BrowserRouter>
    </>
  )
}

export default App;