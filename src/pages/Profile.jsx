import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  // Assuming you have user profile data, here is a sample state.
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/profile").then((response) => {
      const data = response.data;
      setUser({
        name: data.name,
        email: data.email,
        phone: data.phone,
      });
      setLoading(false);
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/profile`, {
      name: user.name,
      email: user.email,
      phone: user.phone,
    });
    // You would typically save the updated profile to an API here.
    alert("Profile updated!");
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>

      <div className="mb-4">
        <label className="block mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
          className="border p-2 w-full mb-4"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          className="border p-2 w-full mb-4"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Phone</label>
        <input
          type="text"
          name="phone"
          value={user.phone}
          onChange={handleInputChange}
          className="border p-2 w-full mb-4"
        />
      </div>

      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:cursor-pointer">
        Save Changes
      </button>

      {/* Link to navigate back */}
      <Link to="/user" className="ml-4 text-blue-500">
        Back to Bookings
      </Link>
    </div>
  );
};

export default Profile;
