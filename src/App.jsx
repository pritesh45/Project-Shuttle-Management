import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import AddBooking from "./pages/AddBooking";
import EditBooking from "./pages/EditBooking";
import Drivers from "./pages/Drivers";
import DriverSchedule from "./pages/DriverSchedule";
import Sidebar from "./layouts/Sidebar";
import MonitorUsage from "./pages/MonitorUsage";
import AdminRoutes from "./pages/AdminRoutes";
import AssignDrivers from "./pages/AssignDrivers";
import AdminPanel from "./pages/AdminPanel";
import ManageRoutes from "./pages/ManageRoutes";
import ManageDrivers from "./pages/ManageDrivers"; // New Import
import DriverPanel from "./pages/DriverPanel";
import Profile from "./pages/Profile";
import Test from "./components/Test";
import UserPanel from "./pages/UserPanel";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user" element={<UserPanel/>} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/bookings/add" element={<AddBooking />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bookings/edit/:id" element={<EditBooking />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/drivers/schedule/:id" element={<DriverSchedule />} />
          <Route path="/admin-routes" element={<AdminRoutes />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin/manage-routes" element={<ManageRoutes />} />
          <Route path="/admin/assign-drivers" element={<AssignDrivers />} />
          <Route path="/assign-drivers" element={<AssignDrivers />} />
          <Route path="/monitor-usage" element={<MonitorUsage />} />
          <Route path="/admin/monitor-usage" element={<MonitorUsage />} />
          <Route
            path="/admin/drivers/schedule/:id"
            element={<DriverSchedule />}
          />
          {/* Moved here */}
          <Route path="/driver" element={<DriverPanel />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
