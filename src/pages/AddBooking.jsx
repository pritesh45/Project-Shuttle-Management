import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddBooking = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [route, setRoute] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // addBooking({ name, route, date, time });
    await axios.post("http://localhost:5000/bookings", {
      name,
      route,
      date,
      time,
    });
    navigate("/user");
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Add Booking</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          placeholder="Route (e.g. Route A)"
          value={route}
          onChange={(e) => setRoute(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white p-2 rounded w-full">
          Add Booking
        </button>
      </form>
    </div>
  );
};

export default AddBooking;
