import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-6">Shuttle Management</h2>
      <ul>
        <li className="mb-3">
          <Link to="/" className="block p-2 rounded hover:bg-gray-700">
            Dashboard
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/user" className="block p-2 rounded hover:bg-gray-700">
            👤 User Panel
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/admin" className="block p-2 rounded bg-gray-800">
            🚀 Admin Panel
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/drivers" className="block p-2 rounded hover:bg-gray-700">
            🚌 Driver Panel
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
