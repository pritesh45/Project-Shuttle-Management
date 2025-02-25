import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Dashboard", icon: "" },
    { path: "/user", label: "👤 User Panel" },
    { path: "/admin", label: "🚀 Admin Panel" },
    { path: "/driver", label: "🚌 Driver Panel" },
  ];

  return (
    <div className="w-64 bg-gray-900 min-h-screen h-full text-white p-5">
      <h2 className="text-2xl font-bold mb-6">Shuttle Management</h2>
      <ul>
        {menuItems.map(({ path, label }) => {
          const isActive = location.pathname === path;
          return (
            <li key={path} className="mb-3">
              <Link
                to={path}
                className={`block p-2 rounded transition ${
                  isActive ? "bg-gray-700 font-semibold" : "hover:bg-gray-700"
                }`}>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
