import { useState } from "react";

const BookingForm = ({ addBooking }) => {
  const [user, setUser] = useState("");
  const [route, setRoute] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user && route) {
      addBooking({ id: Date.now(), user, route, status });
      setUser("");
      setRoute("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Book a Shuttle</h2>
      <input
        className="w-full p-2 border rounded mb-2"
        type="text"
        placeholder="Your Name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        className="w-full p-2 border rounded mb-2"
        type="text"
        placeholder="Route"
        value={route}
        onChange={(e) => setRoute(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Book Shuttle
      </button>
    </form>
  );
};

export default BookingForm;
