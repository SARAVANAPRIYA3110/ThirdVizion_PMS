// import React from 'react'

// const Users = () => {
//   return (
//     <div>
//       <h1>Users Component</h1>  
//     </div>
//   )
// }

// export default Users
// import React, { useState } from "react";

// const UserManagement = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [formData, setFormData] = useState({
//     username: "",
//     role: "",
//     password: "",
//     email: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.username || !formData.role || !formData.password || !formData.email) {
//       alert("Please fill all fields");
//       return;
//     }
//     setUsers([...users, formData]);
//     setFormData({ username: "", role: "", password: "", email: "" });
//     setShowForm(false);
//   };

//   return (
//     <div className="min-h-screen p-6 bg-white text-black relative">
//       {/* Fixed Add User Button (top-right corner) */}
//       <button
//         onClick={() => setShowForm(!showForm)}
//         className="fixed top-4 right-4 border border-gray-400 px-4 py-2 rounded-md hover:bg-gray-100 transition"
//       >
//         {showForm ? "Close Form" : "Add User"}
//       </button>

//       {/* User Form */}
//       {showForm && (
//         <form
//           onSubmit={handleSubmit}
//           className="border border-gray-300 p-4 rounded-lg max-w-md mx-auto mt-20"
//         >
//           <h2 className="text-lg font-semibold mb-3 text-center">Add New User</h2>
//           <div className="flex flex-col gap-3">
//             {/* Username */}
//             <input
//               type="text"
//               name="username"
//               placeholder="User Name"
//               value={formData.username}
//               onChange={handleChange}
//               className="border border-gray-300 rounded-md px-3 py-2"
//             />

//             {/* Role Dropdown */}
//             <select
//               name="role"
//               value={formData.role}
//               onChange={handleChange}
//               className="border border-gray-300 rounded-md px-3 py-2 bg-white"
//             >
//               <option value="">Select Role</option>
//               <option value="Admin">Devoloper</option>
//               <option value="Manager">Designer</option>
//               <option value="Editor">Marketing</option>
//               <option value="Viewer">Game Devolopemet</option>
//             </select>

//             {/* Password */}
//             <input
//               type="password"
//               name="password"
//               placeholder="User Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="border border-gray-300 rounded-md px-3 py-2"
//             />

//             {/* Email */}
//             <input
//               type="email"
//               name="email"
//               placeholder="User Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="border border-gray-300 rounded-md px-3 py-2"
//             />

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="border border-gray-400 rounded-md px-4 py-2 hover:bg-gray-100 transition"
//             >
//               Create User
//             </button>
//           </div>
//         </form>
//       )}

//       {/* User List */}
//       <div className="max-w-3xl mx-auto mt-10">
//         <h2 className="text-lg font-semibold mb-4">User List</h2>
//         {users.length === 0 ? (
//           <p className="text-gray-500">No users added yet.</p>
//         ) : (
//           <div className="grid gap-4">
//             {users.map((user, index) => (
//               <div
//                 key={index}
//                 className="border border-gray-300 p-4 rounded-lg flex justify-between items-center"
//               >
//                 <div>
//                   <p><strong>Name:</strong> {user.username}</p>
//                   <p><strong>Role:</strong> {user.role}</p>
//                   <p><strong>Email:</strong> {user.email}</p>
//                 </div>
//                 <p className="text-sm text-gray-500">●</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserManagement;
import React, { useState, useEffect } from "react";

const UserManagement = () => {
  const [showForm, setShowForm] = useState(false);
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    role: "",
    password: "",
    email: "",
  });

  // 🟢 Load users from localStorage
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  // 🟢 Save user to localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.role || !formData.password || !formData.email) {
      alert("Please fill all fields");
      return;
    }

    const updatedUsers = [...users, formData];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setFormData({ username: "", role: "", password: "", email: "" });
    setShowForm(false);
  };

  // 🟢 Delete user function
  const handleDeleteUser = (index) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const updatedUsers = users.filter((_, i) => i !== index);
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

      {/* Add User Form */}
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
              value={formData.username}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2"
            />

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 bg-white"
            >
              <option value="">Select Role</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Marketing">Marketing</option>
              <option value="Game Development">Game Development</option>
            </select>

            <input
              type="password"
              name="password"
              placeholder="User Password"
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2"
            />

            <input
              type="email"
              name="email"
              placeholder="User Email"
              value={formData.email}
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
                key={index}
                className="border border-gray-300 p-4 rounded-xl flex justify-between items-center bg-white shadow-sm hover:shadow-md transition"
              >
                <div>
                  <p className="font-semibold text-lg text-gray-800">{user.username}</p>
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
