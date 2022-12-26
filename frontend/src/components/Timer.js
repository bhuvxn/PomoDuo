import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { CircularProgressbarWithChildren} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Timer = () => {
  const [time, setTimer] = useState(45);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    setIsRunning(true);
  };
  if (isRunning) {
    setTimeout(() => {
      setTimer(time - 1);
    }, 1000);
  }
  if (time === 0) {
    alert("Time is up! time for a break!");
    setIsRunning(false);
  }
  
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '70vh',
    }}>
      <div style={{ width: 1280, height: 720 }}>
        
        <CircularProgressbarWithChildren value={time} text={`${time}` }>
        <button style={{ width: "200px", height: "50px" }} onClick={handleStart}>Start</button>
        </CircularProgressbarWithChildren> 
      </div>
    </div>
  );
};

export default Timer;
