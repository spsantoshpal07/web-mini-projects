import React from "react";
import "../page/Toggle.css";
import { useState } from "react";

const Toggle = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () =>{
        setIsOn(!isOn)
    }

  return (
    <div className="main" onClick={handleToggle} style={{backgroundColor : isOn ? 'green' : 'rgb(175, 0, 0)' }}>
      <div className={`container ${isOn ? 'on' : 'off'} `}>
      <span>{isOn ? 'ON' : 'OFF'}</span>
      </div>
    </div>
  );
};

export default Toggle;
