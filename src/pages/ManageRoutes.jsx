import React, { useState } from "react";

const ManageRoutes = () => {
  const [routes, setRoutes] = useState([
    { id: 1, name: "Route A", pickup: "Stop 1", dropoff: "Stop 5" },
    { id: 2, name: "Route B", pickup: "Stop 2", dropoff: "Stop 6" },
  ]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-4">🚏 Manage Shuttle Routes</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <ul>
          {routes.map((route) => (
            <li key={route.id} className="p-2 border-b">
              <strong>{route.name}</strong>: {route.pickup} ➝ {route.dropoff}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageRoutes;
