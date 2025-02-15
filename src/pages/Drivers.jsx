import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import driversData from "../data/drivers.json";
import {
  Clock,
  MapPin,
  Coffee,
  UserCheck,
  LogOut,
  CheckCircle,
  AlertCircle,
  ChevronRight,
} from "lucide-react";
import axios from "axios";

const Drivers = () => {
  const [isShiftStarted, setIsShiftStarted] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [currentDriver, setCurrentDriver] = useState({
    name: "",
    email: "",
    phone: "",
    id: "",
    isAvailable: "",
  });

  const { trips, breaks } = driversData;

  useEffect(() => {
    axios.get("http://localhost:5000/driver1").then((response) => {
      setCurrentDriver({
        name: response.data.name,
        email: response.data.email,
        phone: response.data.phone,
        id: response.data.id,
        isAvailable: response.data.isAvailable,
      });
      setIsShiftStarted(response.data.isAvailable);
    });
  }, [isShiftStarted]);

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "text-green-600";
      case "ongoing":
        return "text-blue-600";
      case "upcoming":
        return "text-gray-600";
      default:
        return "text-gray-600";
    }
  };

  const handleShift = async () => {
    await axios.put("http://localhost:5000/driver1", {
      name: currentDriver.name,
      email: currentDriver.email,
      phone: currentDriver.phone,
      id: currentDriver.id,
      isAvailable: !isShiftStarted,
    });
    setShowConfirmation(true);
    setIsShiftStarted(!isShiftStarted);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
            <UserCheck className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{currentDriver.name}</h1>
            <p className="text-gray-600">ID: {currentDriver.id}</p>
          </div>
        </div>
      </div>

      {/* Shift Control Buttons */}
      <button
        onClick={handleShift}
        className={`w-full py-4 rounded-lg text-white font-semibold mb-6 transition-colors ${
          isShiftStarted
            ? "bg-red-600 hover:bg-red-700"
            : "bg-blue-600 hover:bg-blue-700"
        }`}>
        {isShiftStarted ? "End Shift" : "Start Shift"}
      </button>

      {/* Confirmation Alert */}
      {showConfirmation && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
          <span className="block sm:inline">
            {isShiftStarted
              ? "Shift started successfully!"
              : "Shift ended successfully!"}
          </span>
        </div>
      )}

      {/* Daily Schedule */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="flex items-center space-x-2 text-lg font-semibold">
            <Clock className="h-5 w-5" />
            <span>Daily Schedule</span>
          </h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {trips.map((trip) => (
              <div key={trip.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">
                    {trip.startTime} - {trip.endTime}
                  </span>
                  <span
                    className={`flex items-center ${getStatusColor(
                      trip.status
                    )}`}>
                    {trip.status === "completed" && (
                      <CheckCircle className="h-5 w-5 mr-1" />
                    )}
                    {trip.status === "ongoing" && (
                      <AlertCircle className="h-5 w-5 mr-1" />
                    )}
                    {trip.status}
                  </span>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>From: {trip.startPoint}</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    <span>To: {trip.endPoint}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Break Timings */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="flex items-center space-x-2 text-lg font-semibold">
            <Coffee className="h-5 w-5" />
            <span>Break Timings</span>
          </h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {breaks.map((break_) => (
              <div
                key={break_.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <break_.icon className="h-5 w-5 text-gray-600" />
                  <span className="font-medium">{break_.type}</span>
                </div>
                <span className="text-gray-600">
                  {break_.startTime} - {break_.endTime}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drivers;
