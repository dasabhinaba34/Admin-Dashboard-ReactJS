import React, { useState } from 'react'
import Logo from '../../imgs/logo.png'
import './Sidebar.css'


import { SidebarData } from '../../Data/Data'
import {motion} from 'framer-motion'
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const[selected, setSelected] = useState(0)
    const [expanded, setExpaned] = useState(true)

    const lg = useNavigate();
    const handleLogout = async() =>{
        lg('/');
    }



    const sidebarVariants = {
        true: {
          left : '0'
        },
        false:{
          left : '-60%'
        }
      }




  return (
    <>
    <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className="Sidebar"
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
        {/* logo */}
        <div className="logo">
            <img src={Logo} alt="" />
            <span>
                Q<span>M</span>S
            </span>
        </div>

        {/* menu */}
        <div className="menu">
            {SidebarData.map((item, index)=> {
                return(
                    <div className={selected===index?'menuItem active':'menuItem'}
                    key={index}
                    onClick={()=>setSelected(index)}
                    >
                        <item.icon/>
                        <span>
                            {item.heading}
                        </span>
                    </div>
                )
            })}

            <div className="menuItem" onClick={()=>handleLogout()}>
                <UilSignOutAlt />
                <p>Log Out</p>
            </div>
        </div>
    </motion.div>
    </>
  )
}

export default Sidebar
