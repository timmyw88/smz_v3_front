import React from "react";

const Booking = () => {
  return (
    <div className="booking text-white">
      <div className="top">
        <p>SUBJECT TO AVAILABILITY OF STOCK</p>
        <div className="make">MAKE</div>
      </div>
      <div className="middle">
        <div className="content bg-dark-red">
          <h2>BOOKINGS</h2>
          <p>FOR VOL. ABOVE 5,000 MYR</p>
        </div>
      </div>
      <div className="bottom">
        <ul>
          <li>
            RESERVATION OR BOOKING OF STOCKS CAN BE MADE SUBJECT TO SUPPLY
            AVAILABILITY AND AT CURRENT PRICE OF STOCK ON CONFIRMATION BY
            CLIENTS.
          </li>
          <li>
            RESERVATIONS AND DELIVERY MUST BE EXECUTED WITHIN TWO (2) DAYS FROM
            THE DATE OF RESERVATION.
          </li>
          <li>
            PLEASE REQUEST FOR INFORMATION AT THE COUNTERS AND OR ANY FURTHER
            ASSISTANCE.
          </li>
        </ul>
        <div className="logo-div">
          <p className="logo">SMZ</p>
          <p className="desc">Perniagaan Perkhidmatan Wang Berlesen</p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
