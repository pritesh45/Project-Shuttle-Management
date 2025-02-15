import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Shuttle Management</h1>
      <nav>
        <Link className="mx-4 hover:underline" to="/">Dashboard</Link>
        <Link className="mx-4 hover:underline" to="/bookings">Bookings</Link>
        <Link className="mx-4 hover:underline" to="/drivers">Drivers</Link>
        <Link className="mx-4 hover:underline" to="/profile">Profile</Link>
      </nav>
    </div>
  );
};

export default Navbar;
