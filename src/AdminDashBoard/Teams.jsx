// import React from 'react'

// const Teams = () => {
//   return (
//     <div>
//       <h1>teams</h1>
//     </div>
//   )
// }

// export default Teams
import React, { useState, useEffect } from "react";

const TeamManagement = () => {
  const [users, setUsers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);

  // Fetch saved users and teams on load
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const storedTeams = JSON.parse(localStorage.getItem("teams")) || [];
    setUsers(storedUsers);
    setTeams(storedTeams);
  }, []);

  // Select or unselect a user
  const handleCheckboxChange = (username) => {
    setSelectedUsers((prev) =>
      prev.includes(username)
        ? prev.filter((u) => u !== username)
        : [...prev, username]
    );
  };

  // Create new team and save to localStorage
  const handleCreateTeam = () => {
    if (!teamName.trim()) {
      alert("Please enter a team name!");
      return;
    }
    if (selectedUsers.length === 0) {
      alert("Select at least one member to create a team!");
      return;
    }

    const newTeam = { teamName, members: selectedUsers };
    const updatedTeams = [...teams, newTeam];
    setTeams(updatedTeams);
    localStorage.setItem("teams", JSON.stringify(updatedTeams));

    // Reset form
    setTeamName("");
    setSelectedUsers([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            🧩 Team Management
          </h1>
          <a
            href="/"
            className="text-sm border border-gray-400 px-4 py-2 rounded-md hover:bg-gray-100 transition"
          >
            ← Back to Users
          </a>
        </div>

        {/* Team creation section */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 mb-10">
          <h2 className="text-xl font-semibold mb-4">Create a New Team</h2>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-6">
            <input
              type="text"
              placeholder="Enter team name"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-1/2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
            <button
              onClick={handleCreateTeam}
              className="mt-4 sm:mt-0 bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              + Create Team
            </button>
          </div>

          {/* User selection list */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-700">
              Select Members
            </h3>
            {users.length === 0 ? (
              <p className="text-gray-500 italic">
                No users found. Please add users first.
              </p>
            ) : (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {users.map((user, index) => (
                  <label
                    key={index}
                    className={`flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer transition ${
                      selectedUsers.includes(user.username)
                        ? "bg-indigo-50 border-indigo-400"
                        : "bg-white border-gray-300 hover:shadow-md"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.username)}
                      onChange={() => handleCheckboxChange(user.username)}
                      className="accent-indigo-600"
                    />
                    <div>
                      <p className="font-medium">{user.username}</p>
                      <p className="text-sm text-gray-500">{user.role}</p>
                    </div>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Team list display */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">📋 Created Teams</h2>

          {teams.length === 0 ? (
            <p className="text-gray-500 italic">No teams created yet.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {teams.map((team, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                    {team.teamName}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    Members ({team.members.length}):
                  </p>
                  <ul className="list-disc list-inside text-gray-700 text-sm">
                    {team.members.map((member, i) => (
                      <li key={i}>{member}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamManagement;
