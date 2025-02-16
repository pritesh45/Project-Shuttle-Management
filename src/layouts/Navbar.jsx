import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuItems = [
    { path: "/", label: "Dashboard", icon: "" },
    { path: "/user", label: "👤 User Panel" },
    { path: "/admin", label: "🚀 Admin Panel" },
    { path: "/driver", label: "🚌 Driver Panel" },
  ];
  const location = useLocation();

  return (
    <div className="bg-gray-900 h-16 flex justify-between items-center px-2">
      <h2 className="text-xl font-bold text-white">Shuttle Management</h2>
      <div className="relative">
        <button
          className="p-[6px] h-[27px] w-[40px] md:h-full md:w-full text-[#000000] bg-[#FFFFFF] rounded-sm flex items-center justify-center"
          onClick={() => setShowMenu(!showMenu)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4">
            <line x1="21" x2="14" y1="4" y2="4" />
            <line x1="10" x2="3" y1="4" y2="4" />
            <line x1="21" x2="12" y1="12" y2="12" />
            <line x1="8" x2="3" y1="12" y2="12" />
            <line x1="21" x2="16" y1="20" y2="20" />
            <line x1="12" x2="3" y1="20" y2="20" />
            <line x1="14" x2="14" y1="2" y2="6" />
            <line x1="8" x2="8" y1="10" y2="14" />
            <line x1="16" x2="16" y1="18" y2="22" />
          </svg>
        </button>

        {showMenu && (
          <div className="absolute z-50 rounded border border-gray-300 mt-1 right-0 w-56 shadow-md bg-gray-900 text-white">
            <div className="p-2">
              {menuItems.map((menu, index) => {
                const isActive = location.pathname === menu.path;
                return (
                  <div
                    key={index}
                    className="cursor-pointer py-1 text-sm hover:bg-[#d2e9d8] hover:px-2 transition-all duration-300">
                    <Link
                      to={menu.path}
                      className={`block p-2 rounded transition ${
                        isActive
                          ? "bg-gray-700 font-semibold"
                          : "hover:bg-gray-700"
                      }`}>
                      {menu.label}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
