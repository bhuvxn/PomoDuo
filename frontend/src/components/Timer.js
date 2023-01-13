import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { CircularProgressbarWithChildren} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Timer = () => {
  const [time, setTimer] = useState(45);
  const [isRunning, setIsRunning] = useState(false);


  //starting the pomodor timer
  const handleStart = () => {
    setIsRunning(true);
  };


  //stopping the pomodoro timer
  const handleStop = () => {
    setIsRunning(false);
  };


  if (isRunning) {
    setTimeout(() => {
      setTimer(time - 1);
    }, 1000);
  }
  //when times up we'll send a request to the backend to update the hours worked
  if (time === 0) {
    setIsRunning(false);
    setTimer(45);
  }







  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '80vh',
    }}>
      <div className = 'timer' style= {{width: 500, height: 500,}}>
        
        <CircularProgressbarWithChildren value={time} text={`${time}`} styles = {{

        }}
        >
        <button style={{ width: "200px", height: "20px",  position: 'relative', bottom: -50}} onClick={handleStart}>Start</button>
        <button style={{ width: "200px", height: "20px",  position: 'relative', bottom: -50}} onClick={handleStop}>Stop</button>
        </CircularProgressbarWithChildren> 
      </div>



    </div>
  );
};

export default Timer;
