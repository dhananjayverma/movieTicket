// import React, { useState } from "react";
// import "./Login.css"; // Import CSS file

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     if (username === "admin" && password === "123") {
//       onLogin(username);
//     } else {
//       alert("Invalid username or password");
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2 textAlign="center">Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import "./Login.css"; // Import CSS file

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === "123") {
      onLogin(username); // Login successful regardless of the username
    } else {
      alert("Invalid password");
    }
  };

  return (
    <div className="login-container">
      <h2 textAlign="center">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
