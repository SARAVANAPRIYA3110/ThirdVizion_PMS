import React, { useState } from "react";
import Dashboard from "../UserDashboard/Dashboard";
import Settings from "../UserDashboard/Settings";
import Projects from "../UserDashboard/Projects";

const User = () => {
  const [activeSection, setActiveSection] = useState("Dashboard");

  const sections = [
    { name: "Dashboard" },
    { name: "Projects" },
    { name: "Settings" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "Dashboard":
        return <Dashboard />;
      case "Projects":
        return <Projects />;
      case "Settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white flex flex-col">
        <h1 className="text-3xl font-bold text-green-600 mb-10 text-center">
          User Panel
        </h1>

        {sections.map((section) => (
          <button
            key={section.name}
            onClick={() => setActiveSection(section.name)} 
            className={`flex items-center gap-3 p-3 rounded-lg font-semibold text-lg transition-colors
              ${
                activeSection === section.name
                  ? "bg-green-500 text-white"
                  : "hover:bg-green-100"
              }`}
          >
            {section.name}
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-black text-white p-6 overflow-auto">
        <h2 className="text-2xl font-semibold mb-4">{activeSection}</h2>
        {renderContent()}
      </main>
    </div>
  );
};

export default User;
