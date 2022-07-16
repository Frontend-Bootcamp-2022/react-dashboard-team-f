import React, { useState, useEffect } from "react";
import style from "./Card.module.css";
import Time from "./Time";
import Tasks from "./Tasks";
import Users from "./Users";
import Mermbrs from "./Members"
import Brogresbar from "./Brogresbar";



let Card =(props) => {
    const [value, setValue] = useState(0);

  useEffect(() => {
    const progres = setTimeout(() => {
      setValue(oldValue => {
        const newValue = oldValue + 70;

        if (newValue === 100) {
          clearTimeout(progres);
        }

        return newValue;
      });
    }, 1000);
  }, []);
  
    return (
        <>
            
            <div className={style.card}>
            <h3>Project title here</h3>
            <div style={{display: "flex", width: "calc(100% - 2)" }}>
              <Time style={{float:"left"}} />
              
                <Users />
                <Tasks />
              
            </div>
            <Mermbrs />
            <Brogresbar color={"#dd1717"} value={value} max={100} width={"100%"} /> </div>
            
        </>
            
        
         
        
       
    
      
    )
}
export default Card;