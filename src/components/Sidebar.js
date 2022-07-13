import React, { useState } from 'react';
import {
    AiOutlineBars,
    AiOutlineHome,
    AiOutlineAppstore,
    AiOutlineApartment,
    AiOutlineSend,
    AiOutlineTeam,
    AiOutlineFundProjectionScreen,
    AiOutlineLogout,
} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true)
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            id:"0",
            path:"/",
            name:"Dashboard",
            icon:<AiOutlineHome/>
        },
        {
            id:"1",
            path:"/projects",
            name:"Projects",
            icon:<AiOutlineAppstore/>
        },
        {
            id:"2",
            path:"/modules",
            name:"Modules",
            icon:<AiOutlineApartment/>
        },
        {
            id:"3",
            path:"/sprint",
            name:"Sprint",
            icon:<AiOutlineSend/>
        },
        {
            id:"4",
            path:"/memebers",
            name:"Memebers",
            icon:<AiOutlineTeam/>
        },
        {
            id:"5",
            path:"/reports",
            name:"Reports",
            icon:<AiOutlineFundProjectionScreen/>
        },
        {
            id:"6",
            content:"",
            path:"/logout",
            name:"Logout",
            icon:<AiOutlineLogout/>
        }

    ]
    

    return (
        <div className="container">
           <div style={{width: isOpen ? "315px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <div className='logo_image1'></div>
                   <div className='logo_image2'></div>
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">ChirKuut</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <AiOutlineBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                    item.id!=="6"?
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                       :null
                    
                   ))
               },
               {
                menuItem.map((item, index)=>(
                 item.id==="6" ?
                    <NavLink style={{display:"flex"}} to={item.path} key={index} className="log_link" activeclassName="active">
                        <div style={{display:"flex",color:"red"}} className="log_icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none",color:"red"}} className="log_link_text">{item.name}</div>
                    </NavLink>
                    :null
                ))
            }
            
            </div>
            
           <main>{children}</main>
        </div>
    );}

export default Sidebar;