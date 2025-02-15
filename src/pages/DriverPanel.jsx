import React, { useState, useEffect } from "react";

// Mock data (Replace this with actual data from Admin Panel)
const availableTrips = [
  { id: 1, route: "Route A", pickup: "Stop 1", dropoff: "Stop 5", time: "10:00 AM" },
  { id: 2, route: "Route B", pickup: "Stop 3", dropoff: "Stop 8", time: "12:30 PM" },
  { id: 3, route: "Route C", pickup: "Stop 2", dropoff: "Stop 7", time: "02:00 PM" },
  { id: 4, route: "Route D", pickup: "Stop 4", dropoff: "Stop 6", time: "04:30 PM" },
  { id: 5, route: "Route E", pickup: "Stop 5", dropoff: "Stop 9", time: "06:00 PM" },
];

// Different trips when the driver is unavailable
const unavailableTrips = [
  { id: 6, route: "Route F", pickup: "Stop 10", dropoff: "Stop 12", time: "07:00 AM" },
  { id: 7, route: "Route G", pickup: "Stop 11", dropoff: "Stop 14", time: "09:15 AM" },
];

const DriverPanel = () => {
  const [trips, setTrips] = useState([]);
  const [isAvailable, setIsAvailable] = useState(true);

  // Load assigned trips based on availability
  useEffect(() => {
    setTrips(isAvailable ? availableTrips : unavailableTrips);
  }, [isAvailable]); // Re-run when availability changes

  const toggleAvailability = () => {
    setIsAvailable(!isAvailable);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Driver Panel</h2>

      {/* Availability Toggle */}
      <div className="mb-4">
        <p className="text-lg">
          Status: 
          <span className={isAvailable ? "text-green-500 font-bold" : "text-red-500 font-bold"}>
            {isAvailable ? " Available" : " Unavailable"}
          </span>
        </p>
        <button
          onClick={toggleAvailability}
          className={`px-4 py-2 rounded mt-2 ${isAvailable ? "bg-red-500" : "bg-green-500"} text-white`}
        >
          {isAvailable ? "Go Offline" : "Go Online"}
        </button>
      </div>

      {/* Assigned Trips */}
      <h3 className="text-2xl font-bold mb-4">
        {isAvailable ? "Upcoming Assigned Trips" : "Trips (Unavailable Mode)"}
      </h3>
      
      {trips.length > 0 ? (
        <ul>
          {trips.map((trip) => (
            <li 
              key={trip.id} 
              className={`p-4 rounded shadow mb-3 ${isAvailable ? "bg-gray-100" : "bg-gray-300 opacity-70"}`}
            >
              <p><strong>Route:</strong> {trip.route}</p>
              <p><strong>Pickup:</strong> {trip.pickup}</p>
              <p><strong>Drop-off:</strong> {trip.dropoff}</p>
              <p><strong>Time:</strong> {trip.time}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No trips assigned yet.</p>
      )}
    </div>
  );
};

export default DriverPanel;
