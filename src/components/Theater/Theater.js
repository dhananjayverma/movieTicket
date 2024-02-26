import React from "react";
import SeatSelector from "../SeatSelector/SeatSelector";
import "./Theater.css";

const Theater = ({ seats, onSelectSeat }) => {
  return (
    <div className="theater">
      <h2>Theater</h2>
      <SeatSelector seats={seats} onSelect={onSelectSeat} />
    </div>
  );
};

export default Theater;
