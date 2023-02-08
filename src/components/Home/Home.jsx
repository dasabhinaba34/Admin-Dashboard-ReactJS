import React from "react";
import MainDash from "../MainDash/MainDash";
import RightSide from "../RightSide/RightSide";
import Sidebar from '../Sidebar/Sidebar';

const Home=()=>{
    return(
        <div className="App">
            <div className="AppGlass">
    <Sidebar/>
         <MainDash/>
       <RightSide/> 
       </div>
       </div>
    )
}
export default Home