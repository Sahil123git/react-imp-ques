// import React, { useState } from "react";

// const LoginForm = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = { username, email, password };
// //     fetch("http://example.com/api/login", {
// //       method: "POST",
// //       body: JSON.stringify(formData),
// //       headers: { "Content-Type": "application/json" },
// //     })
// //       .then((response) => response.json())
// //       .then((data) => {
// //         console.log(data);
// //         setFormSubmitted(true);
// //       })
// //       .catch((error) => console.error(error));
// //   };

//   return (
//     <div>
//       <h2>Login Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       {formSubmitted && (
//         <header>
//           <h3>Form Submitted!</h3>
//           <p>Username: {username}</p>
//           <p>Email: {email}</p>
//           <p>Password: {password}</p>
//         </header>
//       )}
//     </div>
//   );
// };

// export default LoginForm;
