import React, { useState } from "react";

const ManageDrivers = () => {
  const [drivers, setDrivers] = useState([
    { id: 1, name: "John Doe", status: "Available" },
    { id: 2, name: "Jane Smith", status: "On Duty" },
  ]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-4">👨‍✈️ Manage Drivers</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver) => (
              <tr key={driver.id} className="border">
                <td className="border p-2">{driver.id}</td>
                <td className="border p-2">{driver.name}</td>
                <td className="border p-2">{driver.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDrivers;
