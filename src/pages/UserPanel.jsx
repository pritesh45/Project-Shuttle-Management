import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserPanel = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    route: "",
    pickupLocation: "",
    dropLocation: "",
    status: "pending",
  });
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/bookings").then((response) => {
      setBookings(response.data);
      setLoading(false);
    });
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/bookings", formData);
      setIsBooked(true);

      // Hide popup after 2 seconds
      setTimeout(() => setIsBooked(false), 2000);

      // Reset form fields
      setFormData({
        date: "",
        time: "",
        route: "",
        pickupLocation: "",
        dropLocation: "",
        status: "pending",
      });
      navigate("/user");
    } catch (error) {
      console.error("Booking failed:", error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <section className="booking-form">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-6">Book a Shuttle</h2>
          <button>
            <Link
              to="/user/profile"
              className="text-white bg-blue-600 px-4 py-2 rounded-lg">
              My Profile
            </Link>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <label className="block">
              <span className="text-sm font-medium">Select Date</span>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                required
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium">Select Time</span>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                required>
                <option value="">Select Time</option>
                <option>09:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-medium">Select Route</span>
              <select
                name="route"
                value={formData.route}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                required>
                <option value="">Select Route</option>
                <option>Downtown - Airport</option>
                <option>Airport - Downtown</option>
                <option>North Campus - South Campus</option>
              </select>
            </label>
          </div>

          <div className="space-y-4">
            <label className="block">
              <span className="text-sm font-medium">Pickup Location</span>
              <select
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                required>
                <option value="">Select Pickup</option>
                <option>Terminal 1</option>
                <option>Terminal 2</option>
                <option>Main Street Station</option>
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-medium">Drop-off Location</span>
              <select
                name="dropLocation"
                value={formData.dropLocation}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                required>
                <option value="">Select Drop-off</option>
                <option>City Center</option>
                <option>Shopping Mall</option>
                <option>Business District</option>
              </select>
            </label>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-lg mt-4 hover:bg-blue-700 transform hover:scale-[1.02] transition-all py-2">
              Book Now
            </button>
          </div>
        </form>
      </section>

      {/* Booking Confirmation Popup */}
      {isBooked && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transition-all">
          🎉 Booking Successful!
        </div>
      )}

      <section className="upcoming-rides bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Upcoming Rides</h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{booking.route}</p>
                    <p className="text-sm text-gray-600">
                      {booking.date}, {booking.time}
                    </p>
                  </div>
                  <div className="space-x-2">
                    <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
                      <Link to={`/user/bookings/edit/${booking.id}`}>Edit </Link>
                    </button>
                    {/* <button className="px-4 py-2 border border-red-500 rounded-lg hover:bg-red-50 transition-colors">
                      Cancel
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="trip-history">
        <h3 className="text-xl font-semibold mb-4">Past Trips</h3>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Airport - Downtown</p>
                <p className="text-sm text-gray-600">May 15, 2023 - 10:00 AM</p>
                <p className="text-sm text-gray-600">Driver: Pankaj Kumar</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-[1.02] transition-all">
                {/* <span className="material-symbols-outlined align-middle mr-2">
                  star
                </span> */}
                Leave Feedback
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserPanel;
