import React from "react";
import "./SeatSelector.css";

const SeatSelector = ({ seats, onSelect }) => {
  return (
    <div className="seat-selector">
      {seats.map((row, rowIndex) => (
        <div key={rowIndex} className="seat-row">
          {row.map((seat, seatIndex) => (
            <div
              key={seatIndex}
              className={`seat ${seat.status}`}
              onClick={() => onSelect(rowIndex, seatIndex)}
            >
              <span className="seat-number">{seat.name}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SeatSelector;
