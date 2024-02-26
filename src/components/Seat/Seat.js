// src/components/Seat/Seat.js
import React from "react";
import "./Seat.css";

const Seat = ({ seat, onSelect }) => {
  let seatClass = "seat";
  if (seat.status === "selected") {
    seatClass += " selected";
  } else if (seat.status === "blocked") {
    seatClass += " blocked";
  }

  return <div className={seatClass} onClick={onSelect}></div>;
};

export default Seat;
