
// import React from 'react';

// const Login = () => {
//   return (
//     <div className="text-green text-center border-2 border-green-500 boreder-w-4 p-2 m-50">
//       <h1>login</h1>
//       <div><label>email</label>
//       <input type="email"
//       placeholder='Enter YOUR MAIL'></input>
//       <input type="password"
//       placeholder='Enter your PassWord'></input>
//     </div>
//     </div>
//   );
// };

// export default Login;
// import React, { useState } from "react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Please fill in all fields.");
//       return;
//     }

//     // Example login logic
//     if (email === "admin@example.com" && password === "123456") {
//       alert("Login successful!");
//     } else {
//       setError("Invalid email or password.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 via-teal-400 to-blue-500">
//       <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Login
//         </h1>

//         {error && (
//           <div className="bg-red-100 text-red-600 p-2 rounded mb-4 text-center text-sm">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition duration-200"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-center text-gray-500 text-sm mt-4">
          
//           <a href="#" className="text-green-600 font-medium hover:underline">
//            forgot password?
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";

const Login = () => {
  const [activeTab, setActiveTab] = useState("admin"); 
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");

  const handleAdminLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!adminEmail || !adminPassword) {
      setError("Please fill all admin fields.");
      return;
    }

    if (adminEmail === "admin@example.com" && adminPassword === "admin123") {
      alert(" Admin login successful!");
    } else {
      setError("Invalid admin credentials.");
    }
  };

  const handleUserLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!userEmail || !userPassword) {
      setError("Please fill all user fields.");
      return;
    }

    if (userEmail === "user@example.com" && userPassword === "user123") {
      alert(" User login successful!");
    } else {
      setError("Invalid user credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 via-teal-400 to-blue-500 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setActiveTab("admin")}
            className={`px-6 py-2 rounded-t-lg font-semibold transition ${
              activeTab === "admin"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Admin
          </button>
          <button
            onClick={() => setActiveTab("user")}
            className={`px-6 py-2 rounded-t-lg font-semibold transition ${
              activeTab === "user"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            User
          </button>
        </div>

       
        {error && (
          <p className="bg-red-100 text-red-600 p-2 rounded mb-4 text-center text-sm">
            {error}
          </p>
        )}

    
        {activeTab === "admin" && (
          <form onSubmit={handleAdminLogin} className="space-y-4">
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                placeholder="Admin Email"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block mb-1">Password</label>
              <input
                type="password"
                placeholder="Admin Password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-lg font-semibold transition duration-200"
            >
              Login as Admin
            </button>
          </form>
        )}

     
        {activeTab === "user" && (
          <form onSubmit={handleUserLogin} className="space-y-4">
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                placeholder="User Email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block mb-1">Password</label>
              <input
                type="password"
                placeholder="User Password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-lg font-semibold transition duration-200"
            >
              Login as User
            </button>
            <a href="#" className=" text-center text-green-600 font-medium hover:underline">
           forgot password?
          </a>
          
          </form>
           
        )}
      </div>
    </div>
  );
};

export default Login;
