import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Bookings = () => {
  const [bookings, setBookings] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/bookings").then((response) => {
      setBookings(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Shuttle Bookings</h1>

      {/* Add Booking Button */}
      <Link
        to="/bookings/add"
        className="bg-green-500 text-white px-4 py-2 rounded mb-4 inline-block">
        + Add Booking
      </Link>

      {/* Profile Link */}
      <Link
        to="/profile"
        className="bg-gray-500 text-white px-4 py-2 rounded mb-4 inline-block ml-4">
        View Profile
      </Link>

      {/* Booking List Table */}
      <table className="w-full mt-4 border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Route</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Time</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings?.map((booking) => (
            <tr key={booking.id} className="text-center">
              <td className="p-2 border">{booking.name}</td>
              <td className="p-2 border">{booking.route}</td>
              <td className="p-2 border">{booking.date}</td>
              <td className="p-2 border">{booking.time}</td>
              <td className="p-2 border">
                {/* Edit Booking Button */}
                <Link
                  to={`/bookings/edit/${booking.id}`}
                  className="bg-blue-500 text-white px-3 py-1 rounded mx-1">
                  ✏ Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
