import React, { useState, useEffect } from "react";
import Moment from "react-moment";

const Time = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const currentTime = new Date(Date.now());
      setTime(currentTime);
    }, 1000);
  }, []);
  return (
    <div className="date-time-div">
      <p>Current Date & Time :</p>
      <p className="date-time">
        <Moment format="D MMM YYYY">{time}</Moment>&nbsp;&nbsp;&nbsp;
        <Moment format="HH:mm:ss">{time}</Moment>
      </p>
    </div>
  );
};

export default Time;
