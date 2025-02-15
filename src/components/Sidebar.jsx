import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-6">Shuttle Management</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/" className="block py-2 px-4 rounded-lg hover:bg-gray-700">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/bookings" className="block py-2 px-4 rounded-lg hover:bg-gray-700">
              Bookings
            </Link>
          </li>
          <li>
            <Link to="/drivers" className="block py-2 px-4 rounded-lg hover:bg-gray-700">
              Drivers
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
