
import CartDashboard from './Bargrap';
// import Dashboard from './../adminpage/Dashbaord';
// import peicart from './peichart';
import Dashboard from './peichart';


const Home=()=>{
  
    return(
        <>
        <div className='image'>
         
          <div style={{paddingLeft:"300px", display:"grid" ,gridTemplateColumns: "auto"}}>
        
       
       <br />
       <CartDashboard/>
            <br />
            <Dashboard/>
            {/* <peicart/> */}

  
       
       

        </div>
        </div>
        </>
    )
}
export default Home;