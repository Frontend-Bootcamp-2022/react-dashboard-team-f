import React from "react";
import PropTypes from "prop-types";




const ProgressBar = ({ color, value, max, width}) => {
  return (
    <>
    <div style={{ width: '100%',paddingTop: '10px',paddingBottom: '10px' }}>
    <span style={{ float: "lift"}}>Progress</span>
    <span style={{ float: "right"}}>{value }%</span>
    
      <progress color={color} value={value} max={max} width={width} style={{ width: '100%'}}/>

    
    </div>    
    </>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string
};

ProgressBar.defaultProps = {
  max: 100,
  color: "lightBlue",
  width: "250px"
};

export default ProgressBar;