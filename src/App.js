// import React, { useState } from "react";
// import BookingForm from "./components/BookingForm/BookingForm";
// import Theater from "./components/Theater/Theater";
// import Login from "./components/Login/Login";
// import "./styles.css";

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [seats, setSeats] = useState(generateSeats());
//   const [bookings, setBookings] = useState([]);
//   function generateSeats() {
//     const rows = "ABCDEF";
//     const seats = [];
//     for (let i = 0; i < rows.length; i++) {
//       seats.push(
//         Array.from({ length: i === 5 ? 6 : 8 }, (_, index) => ({
//           status: "available",
//           name: `${rows[i]}${index + 1}`,
//         }))
//       );
//     }
//     return seats;
//   }

//   const handleSeatSelect = (rowIndex, seatIndex) => {
//     if (!user) {
//       alert("Please login first.");
//       return;
//     }

//     const updatedSeats = [...seats];
//     const seat = updatedSeats[rowIndex][seatIndex];
//     if (seat.status === "available") {
//       seat.status = "selected";
//     } else if (seat.status === "selected") {
//       seat.status = "available";
//     }
//     setSeats(updatedSeats);
//   };

//   const handleBookingSubmit = ({ name, numTickets }) => {
//     if (!user) {
//       alert("Please login first.");
//       return;
//     }

//     const selectedSeatsCount = seats
//       .flat()
//       .filter((seat) => seat.status === "selected").length;
//     if (selectedSeatsCount !== numTickets) {
//       alert("Please select the correct number of seats.");
//       return;
//     }

//     const booking = { name, seats: [] };
//     seats.forEach((row, rowIndex) => {
//       row.forEach((seat, seatIndex) => {
//         if (seat.status === "selected") {
//           booking.seats.push(
//             `${String.fromCharCode(65 + rowIndex)}${seatIndex + 1}`
//           );
//           seat.status = "blocked";
//         }
//       });
//     });
//     setBookings([...bookings, booking]);
//     setSeats([...seats]);
//   };

//   const handleLogin = (username) => {
//     setUser(username);
//   };

//   const handleLogout = () => {
//     setUser(null);
//   };

//   const getTotalSeats = () => seats.flat().length;
//   const getBookedSeats = () =>
//     bookings.reduce((acc, booking) => acc + booking.seats.length, 0);
//   const getAvailableSeats = () => getTotalSeats() - getBookedSeats();

//   return (
//     <div className="app">
//       <h1 className="title">Book My Movie</h1>
//       {user ? (
//         <div className="user-section">
//           <p>Welcome, {user}!</p>
//           <button onClick={handleLogout}>Logout</button>

//           <BookingForm onSubmit={handleBookingSubmit} />
//           <Theater seats={seats} onSelectSeat={handleSeatSelect} />

//           <div className="booking-details">
//             <h2>Booking Details</h2>
//             <p>Total Seats: {getTotalSeats()}</p>
//             <p>Booked Seats: {getBookedSeats()}</p>
//             <p>Available Seats: {getAvailableSeats()}</p>
//             <h3>Bookings:</h3>
//             <ul>
//               {bookings.map((booking, index) => (
//                 <li key={index}>
//                   {booking.name} - Seats: {booking.seats.join(", ")}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       ) : (
//         <Login onLogin={handleLogin} />
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import BookingForm from "./components/BookingForm/BookingForm";
import Theater from "./components/Theater/Theater";
import Login from "./components/Login/Login";
import "./styles.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [seats, setSeats] = useState(generateSeats());
  const [bookings, setBookings] = useState([]);

  function generateSeats() {
    const rows = "ABCDEF";
    const seats = [];
    for (let i = 0; i < rows.length; i++) {
      seats.push(
        Array.from({ length: i === 5 ? 6 : 8 }, (_, index) => ({
          status: "available",
          name: `${rows[i]}${index + 1}`,
        }))
      );
    }
    return seats;
  }

  const handleSeatSelect = (rowIndex, seatIndex) => {
    if (!user) {
      alert("Please login first.");
      return;
    }

    const updatedSeats = [...seats];
    const seat = updatedSeats[rowIndex][seatIndex];
    if (seat.status === "available") {
      seat.status = "selected";
    } else if (seat.status === "selected") {
      seat.status = "available";
    }
    setSeats(updatedSeats);
  };

  const handleBookingSubmit = ({ name, numTickets }) => {
    if (!user) {
      alert("Please login first.");
      return;
    }

    const selectedSeatsCount = seats
      .flat()
      .filter((seat) => seat.status === "selected").length;
    if (selectedSeatsCount !== numTickets) {
      alert("Please select the correct number of seats.");
      return;
    }

    const booking = { name, seats: [] };
    seats.forEach((row, rowIndex) => {
      row.forEach((seat, seatIndex) => {
        if (seat.status === "selected") {
          booking.seats.push(
            `${String.fromCharCode(65 + rowIndex)}${seatIndex + 1}`
          );
          seat.status = "blocked";
        }
      });
    });
    setBookings([...bookings, booking]);
    setSeats([...seats]);
  };

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const getTotalSeats = () => seats.flat().length;
  const getBookedSeats = () =>
    bookings.reduce((acc, booking) => acc + booking.seats.length, 0);
  const getAvailableSeats = () => getTotalSeats() - getBookedSeats();

  return (
    <div className="app">
      <h1 className="title">Book My Movie</h1>
      {user ? (
        <div className="user-section">
          <p>Welcome, {user}!</p>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>

          <BookingForm onSubmit={handleBookingSubmit} />
          <Theater seats={seats} onSelectSeat={handleSeatSelect} />

          <div className="booking-details">
            <h2>Booking Details</h2>
            <p>Total Seats: {getTotalSeats()}</p>
            <p>Booked Seats: {getBookedSeats()}</p>
            <p>Available Seats: {getAvailableSeats()}</p>
            <h3>Bookings:</h3>
            <ul>
              {bookings.map((booking, index) => (
                <li key={index}>
                  {booking.name} - Seats: {booking.seats.join(", ")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
