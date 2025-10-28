import React, { useState, useEffect } from "react";
import axios from "axios";

const UserManagement = () => {
  const [showForm, setShowForm] = useState(false);
  const [users, setUsers] = useState([]);
 
  const[userName,setUserName] =useState([]);
  const[role,setRole] =useState([]);
  const[password,setPassword] = useState([]);
  const[email,setEmail] = useState([]);


  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/user_details/")
      .then((response) => {
        console.log("Fetched users:", response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!userName || !role || !password || !email) {
    alert("Please fill all fields");
    return;
  }

  // ✅ define the data object to send
  const newUser = {
    username: userName,
    role_type: role,  // or "role" depending on your Django model field
    password: password,
    email: email,
  };

  try {
    // ✅ send the object, not an undefined variable
    const response = await axios.post("http://127.0.0.1:8000/api/register/", newUser);

    setUsers([...users, response.data]);

    // ✅ reset input fields
    setUserName("");
    setRole("");
    setPassword("");
    setEmail("");

    setShowForm(false);
  } catch (error) {
    console.error("Error adding user:", error);
    alert("Failed to add user");
  }
};

  // 🟢 Delete user (optional backend call if supported)
  const handleDeleteUser = async (index) => {
    const user = users[index];
    if (window.confirm(`Delete user "${user.userName}"?`)) {
      try {
        // Only if your backend supports DELETE
        await axios.delete(`http://127.0.0.1:8000/api/user_details/${user.id}/`);
        setUsers(users.filter((_, i) => i !== index));
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("Failed to delete user");
      }
    }
  };

  const handleChange = (e) => {
  const { name, value } = e.target;

  if (name === "username") setUserName(value);
  if (name === "role") setRole(value);
  if (name === "password") setPassword(value);
  if (name === "email") setEmail(value);
};


  return (
    <div className="min-h-screen p-6 bg-gray-50 text-gray-900 relative">
      {/* Fixed Add User Button */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="fixed top-4 right-4 border border-gray-400 px-4 py-2 rounded-md bg-white hover:bg-gray-100 shadow-sm transition"
      >
        {showForm ? "Close Form" : "Add User"}
      </button>

     {showForm && (
        <form
          onSubmit={handleSubmit}
          className="border border-gray-300 p-6 rounded-lg max-w-md mx-auto mt-20 bg-white shadow-md"
        >
          <h2 className="text-xl font-semibold mb-4 text-center">Add New User</h2>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              name="username"
              placeholder="User Name"
              value={userName}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2"
            />

            <select
              name="role"
              value={role}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 bg-white"
            >
              <option value="">Select Role</option>
              <option value="employee">Employee</option>
            </select>

            <input
              type="password"
              name="password"
              placeholder="User Password"
              value={password}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2"
            />

            <input
              type="email"
              name="email"
              placeholder="User Email"
              value={email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2"
            />

            <button
              type="submit"
              className="bg-indigo-600 text-white rounded-md px-4 py-2 hover:bg-indigo-700 transition"
            >
              Create User
            </button>
          </div>
        </form>
      )}

      {/* User List */}
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-5 text-gray-800">👥 User List</h2>

        {users.length === 0 ? (
          <p className="text-gray-500 text-center italic">No users added yet.</p>
        ) : (
          <div className="grid gap-4">
            {users.map((user, index) => (
              <div
                key={user.id || index}
                className="border border-gray-300 p-4 rounded-xl flex justify-between items-center bg-white shadow-sm hover:shadow-md transition"
              >
                <div>
                  <p className="font-semibold text-lg text-gray-800">{user.userName}</p>
                  <p className="text-sm text-gray-500">{user.role}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>

                <button
                  onClick={() => handleDeleteUser(index)}
                  className="text-red-500 border border-red-400 px-3 py-1 rounded-md hover:bg-red-50 transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
