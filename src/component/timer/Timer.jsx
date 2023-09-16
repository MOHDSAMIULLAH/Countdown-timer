import React from "react";
import { BsStopwatch } from "react-icons/bs";
import './timer.css'
// import styled from "styled-components";


export default function Timer({
  milliseconds,
  seconds,
  minutes,
  hours,
  changeSeconds,
  changeMinutes,
  changeHours,
}) {
  return (
    <div className="TimerWrapper">
      <BsStopwatch className="stop-watch " />
      <div className="d-flex flex-column">
        <label>hh</label>
        <input value={hours} onChange={changeHours} />
      </div>{" "}
      <div className="d-flex flex-column">
        <label>mm</label>
        <input value={minutes} onChange={changeMinutes} />
      </div>{" "}
      <div className="d-flex flex-column">
        <label>ss</label>
        <input value={seconds} onChange={changeSeconds} />
      </div>{" "}
      <div className="d-flex flex-column">
        <label>ms</label>
        <input value={milliseconds} />
      </div>
    </div>
  );
}