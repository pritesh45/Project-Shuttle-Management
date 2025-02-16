import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EditBooking from "./pages/EditBooking";
import Sidebar from "./layouts/Sidebar";
import AdminPanel from "./pages/AdminPanel";
import Profile from "./pages/Profile";
import Test from "./components/Test";
import UserPanel from "./pages/UserPanel";
import DriverPanel from "./pages/DriverPanel";
import Navbar from "./layouts/Navbar";

const App = () => {
  return (
    <div>
      <div className="md:hidden w-full">
        <Navbar />
      </div>
      <div className="flex">
        <div className="hidden md:block">
          <Sidebar />
        </div>

        <div className="flex-1 sm:p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user" element={<UserPanel />} />
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/user/bookings/edit/:id" element={<EditBooking />} />
            <Route path="/driver" element={<DriverPanel />} />
            <Route path="/admin" element={<AdminPanel />} />
            {/* Moved here */}
            <Route path="/test" element={<Test />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
