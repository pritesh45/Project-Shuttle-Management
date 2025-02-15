import React, { useState } from "react";

const AssignDrivers = () => {
  const [routes, setRoutes] = useState([
    { id: 1, name: "Route A", assignedDriver: "" },
    { id: 2, name: "Route B", assignedDriver: "" },
  ]);

  const [drivers] = useState(["John Doe", "Jane Smith", "Michael Brown"]);

  const assignDriver = (routeId, driver) => {
    const updatedRoutes = routes.map(route =>
      route.id === routeId ? { ...route, assignedDriver: driver } : route
    );
    setRoutes(updatedRoutes);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Assign Drivers to Routes</h2>

      <div className="bg-white p-4 rounded-lg shadow-md">
        {routes.map((route) => (
          <div key={route.id} className="flex justify-between items-center bg-gray-100 p-3 rounded-lg mb-2">
            <span>{route.name}</span>
            <select
              onChange={(e) => assignDriver(route.id, e.target.value)}
              className="border p-2 rounded-md"
              value={route.assignedDriver}
            >
              <option value="">Select Driver</option>
              {drivers.map((driver, index) => (
                <option key={index} value={driver}>{driver}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignDrivers;
