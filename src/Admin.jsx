// import React from 'react';
// import { Link } from "react-router-dom";

// const Admin = () => {
//   return (
//     <div className="w-64 h-screen bg-gray-100 border-r p-4">
//         <div>
//       {/* <h1 className="text-xl font-bold mb-6 text-green-600">project</h1> */}
//       <nav className="text-xl font-bold mb-6 text-green-600 flex flex-col space-y-2">
//         <Link to="/Project" className="hover:text-purple-600">Project</Link>
//          </nav>
//           <nav className="text-xl font-bold mb-6 text-green-600 flex flex-col space-y-2">
//         <Link to="/Users" className="hover:text-purple-600">Users</Link>
//          </nav>
//           <nav className="text-xl font-bold mb-6 text-green-600 flex flex-col space-y-2">
//         <Link to="/Report" className="hover:text-purple-600">Report</Link>
//          </nav>
//           <nav className="text-xl font-bold mb-6 text-green-600 flex flex-col space-y-2">
//         <Link to="/teams" className="hover:text-purple-600">Teams</Link>
//          </nav>
//         </div>
       

//       <h1 className="text-xl font-bold mb-6 text-green-600">Users</h1>
//       <h1 className="text-xl font-bold mb-6 text-green-600">Report</h1>
//       <h1 className="text-xl font-bold mb-6 text-green-600">Teams</h1>
//     </div>
//   )
// }

// export default Admin
import React, { useState } from "react";
import { FaProjectDiagram, FaUsers, FaFileAlt, FaUsersCog } from "react-icons/fa";
import Project from './AdminDashBoard/Project';
import Users from './AdminDashBoard/Users';
import Report from './AdminDashBoard/Report';
import Teams from './AdminDashBoard/Teams';
const Admin = () => {
  const [activeSection, setActiveSection] = useState("Project");

  const sections = [
    { name: "Project", icon: <FaProjectDiagram /> },
    { name: "Users", icon: <FaUsers /> },
    { name: "Report", icon: <FaFileAlt /> },
    { name: "Teams", icon: <FaUsersCog /> },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "Project":
        return <Project />;
      case "Users":
        return <Users />;
      case "Report":
        return <Report />;
      case "Teams":
        return <Teams />;
      default:
        return <Project />;
    }
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-lg p-6 flex flex-col">
        <h1 className="text-3xl font-bold text-green-600 mb-10 text-center">Admin Panel</h1>
        <nav className="flex flex-col space-y-3">
          {sections.map((section) => (
            <button
              key={section.name}
              className={`flex items-center gap-3 p-3 rounded-lg font-semibold text-lg transition-colors ${
                activeSection === section.name
                  ? "bg-green-100 text-green-800 shadow"
                  : "text-gray-700 hover:bg-green-50 hover:text-green-600"
              }`}
              onClick={() => setActiveSection(section.name)}
            >
              {section.icon}
              {section.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{activeSection}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
