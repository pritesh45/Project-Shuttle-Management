import React, { useState } from "react";

const AdminRoutes = () => {
  const [routes, setRoutes] = useState([
    { id: 1, name: "Route A", pickup: "Point X", dropoff: "Point Y" },
    { id: 2, name: "Route B", pickup: "Point A", dropoff: "Point B" },
  ]);
  
  const [newRoute, setNewRoute] = useState({ name: "", pickup: "", dropoff: "" });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setNewRoute({ ...newRoute, [e.target.name]: e.target.value });
  };

  const addRoute = () => {
    setRoutes([...routes, { id: routes.length + 1, ...newRoute }]);
    setNewRoute({ name: "", pickup: "", dropoff: "" });
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const deleteRoute = (id) => {
    setRoutes(routes.filter(route => route.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Manage Shuttle Routes</h2>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Add New Route</h3>
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Route Name"
            value={newRoute.name}
            onChange={handleChange}
            className="border p-2 rounded-md w-1/3"
          />
          <input
            type="text"
            name="pickup"
            placeholder="Pickup Point"
            value={newRoute.pickup}
            onChange={handleChange}
            className="border p-2 rounded-md w-1/3"
          />
          <input
            type="text"
            name="dropoff"
            placeholder="Dropoff Point"
            value={newRoute.dropoff}
            onChange={handleChange}
            className="border p-2 rounded-md w-1/3"
          />
        </div>
        <button onClick={addRoute} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Add Route
        </button>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Existing Routes</h3>
        {routes.map((route) => (
          <div key={route.id} className="flex justify-between bg-white p-3 rounded-lg shadow-md mb-2">
            <span>{route.name} - {route.pickup} to {route.dropoff}</span>
            <button onClick={() => deleteRoute(route.id)} className="bg-red-500 text-white px-3 py-1 rounded-md">
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-3 rounded-md shadow-lg">
          ✅ Route Added Successfully!
        </div>
      )}
    </div>
  );
};

export default AdminRoutes;
