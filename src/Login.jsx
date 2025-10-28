import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [activeTab, setActiveTab] = useState("admin"); 
  const [adminUsername, setAdminUsername] = useState(""); // ✅ renamed
  const [adminPassword, setAdminPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!adminUsername || !adminPassword) {
      setError("Please fill all admin fields.");
      return;
    }
    axios
      .post("http://127.0.0.1:8000/api/admin_login/", {
        user_name: adminUsername, // ✅ changed here
        password: adminPassword,
      })
      .then((data) => {
        console.log("Login Successful", data);
        navigate("/admin");
      })
      .catch((error) => {
        console.error("Login failed:", error);
        setError("Invalid admin credentials.");
      }); 
  };

  const handleUserLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!userEmail || !userPassword || !userType) {
      setError("Please fill all user fields.");
      return;
    }
    axios.post("http://127.0.0.1:8000/api/user_login/",{
    email : userEmail,
    password: userPassword,
    role_type : userType,
   })
   .then((data) =>{
      console.log("Login Successful",data);
      navigate("/user");
   })
   .catch((error) =>{
      console.error("Login failed:", error);
      setError("Invalid user credentials");
   });
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
              <label className="block mb-1">Username</label>
              <input
                type="text"
                placeholder="Admin Username"
                value={adminUsername}
                onChange={(e) => setAdminUsername(e.target.value)}
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
            <a
              href="#"
              className="block text-center text-green-600 font-medium hover:underline"
            >
              Forgot password?
            </a>
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

            <div>
              <label className="block mb-1">User Type</label>
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select Type</option>
                <option value="employee">Employee</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-lg font-semibold transition duration-200"
            >
              Login as User
            </button>

            <a
              href="#"
              className="block text-center text-green-600 font-medium hover:underline"
            >
              Forgot password?
            </a>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
