import React from "react";

const Time = () => {
  
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div>
      <span>Start date
        <br/>
        {date}
      </span>
   
    </div>
  
  );
}

export default Time;