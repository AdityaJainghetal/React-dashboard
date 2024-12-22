import {Outlet}  from "react-router-dom";
import Header from "./components/Header";
import Topmenu from "./components/Topmenu";

// import Footer from "./components/Footer";
const Layout=()=>{
    return(
        <>
         <Header/>
         <Topmenu/>
    
         <Outlet/>

         {/* <Footer/> */}
          
        </>
    )
}

export default Layout;