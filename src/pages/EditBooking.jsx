import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditBooking = () => {
  const [booking, setBooking] = useState({
    date: "",
    time: "",
    route: "",
    pickupLocation: "",
    dropLocation: "",
  });
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  // State to handle form values
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [route, setRoute] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");

  useEffect(() => {
    if (!booking) return;
    setDate(booking.date);
    setTime(booking.time);
    setRoute(booking.route);
    setPickupLocation(booking.pickupLocation);
    setDropLocation(booking.dropLocation);
  }, [booking]);

  useEffect(() => {
    axios.get("http://localhost:5000/bookings").then((response) => {
      const data = response.data;
      const booking = data.find((b) => b.id === id);
      setBooking({
        date: booking.date,
        time: booking.time,
        route: booking.route,
        pickupLocation: booking.pickupLocation,
        dropLocation: booking.dropLocation,
      });
      setLoading(false);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/bookings/${id}`, {
      date,
      time,
      route,
      pickupLocation,
      dropLocation,
      status: "pending",
    });
    navigate("/user");
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Edit Booking</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium">Select Date</span>
            <input
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Select Time</span>
            <select
              name="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
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
              value={route}
              onChange={(e) => setRoute(e.target.value)}
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
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
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
              value={dropLocation}
              onChange={(e) => setDropLocation(e.target.value)}
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
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBooking;
