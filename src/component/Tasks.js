import React from "react";

const Tasks = (props) => {
    let task = 4;
  
  return (
    <div style={{ padding:"0 10px 0", border: "1px solid DodgerBlue",float: "right"}}>
        <span>{task}</span><br/>
        <span>Tasks</span>
       
   
    </div>
  
  );
}

export default Tasks ;