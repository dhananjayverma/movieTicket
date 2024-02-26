// // src/components/BookingForm/BookingForm.js
// import React, { useState } from "react";
// import "./BookingForm.css";

// const BookingForm = ({ onSubmit }) => {
//   const [name, setName] = useState("");
//   const [numTickets, setNumTickets] = useState(1);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ name, numTickets });
//   };

//   return (
//     <form className="booking-form" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Your Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />
//       <select
//         value={numTickets}
//         onChange={(e) => setNumTickets(parseInt(e.target.value))}
//         required
//       >
//         {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => (
//           <option key={num} value={num}>
//             {num} Ticket{num > 1 ? "s" : ""}
//           </option>
//         ))}
//       </select>
//       <button type="submit">Book</button>
//     </form>
//   );
// };

// export default BookingForm;

// src/components/BookingForm/BookingForm.js
import React, { useState } from "react";
import "./BookingForm.css";

const BookingForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [numTickets, setNumTickets] = useState(1);
  const [showtime, setShowtime] = useState("11:00am");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, numTickets, showtime });
    setName("");
    setNumTickets(1);
    setShowtime("11:00am");
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <select
        value={numTickets}
        onChange={(e) => setNumTickets(parseInt(e.target.value))}
        required
      >
        {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num} Ticket{num !== 1 ? "s" : ""}
          </option>
        ))}
      </select>
      <select
        value={showtime}
        onChange={(e) => setShowtime(e.target.value)}
        required
      >
        <option value="11:00am">11:00am</option>
        <option value="1:00pm">1:00pm</option>
        <option value="3:00pm">3:00pm</option>
        <option value="6:00pm">6:00pm</option>
        <option value="9:00pm">9:00pm</option>
      </select>
      <button type="submit">Book</button>
    </form>
  );
};

export default BookingForm;
