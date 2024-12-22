import React from 'react'
import Navbar from './Navbar'
// import Sidebar from './Sidebar'

const Dashboard = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <>
    <div className={`${sidebarToggle ? "" : "ml-64"} : w-full`}>
        <Navbar
        sidebarToggle={sidebarToggle}
  
  setSidebarToggle={setSidebarToggle}/>
    </div>
    <Navbar/>
    {/* <Sidebar/> */}
    

    </>
  )
}

export default Dashboard