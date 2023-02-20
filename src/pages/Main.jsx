import React from "react";
import Currencies from "../components/Currencies";
import Booking from "../components/Booking";
import Time from "../components/Time";

const Main = ({ refresh, channel }) => {
  channel.addEventListener("message", () => window.location.reload());
  return (
    <div className="main-page">
      <div className="head text-white">
        <h2>STOCK AVAILABILITY GAUGE</h2>
        <Time />
      </div>
      <div className="body">
        <div className="currency-div">
          <Currencies refresh={refresh} />
        </div>
        <div className="booking-div">
          <Booking />
        </div>
      </div>
    </div>
  );
};

export default Main;
