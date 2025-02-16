import React from "react";
import { UserCircle, Car, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const roles = [
    {
      title: "User",
      icon: UserCircle,
      color: "bg-blue-500",
      description: "Book shuttles and manage your rides",
      slug: "/user",
    },
    {
      title: "Driver",
      icon: Car,
      color: "bg-green-500",
      description: "Manage your routes and schedules",
      slug: "/driver",
    },
    {
      title: "Admin",
      icon: Shield,
      color: "bg-purple-500",
      description: "System administration and oversight",
      slug: "/admin",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Shuttle Management System
          </h1>
          <p className="text-xl text-gray-600">
            Who are you? Please select your role to continue
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {roles.map((role) => (
            <div
              onClick={() => navigate(role.slug)}
              key={role.title}
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer 
                        transform transition-all duration-300 hover:scale-105 
                        hover:shadow-xl border border-gray-200">
              <div
                className={`${role.color} w-16 h-16 rounded-full mx-auto mb-4 
                              flex items-center justify-center`}>
                <role.icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
                {role.title}
              </h2>
              <p className="text-center text-gray-600">{role.description}</p>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 text-center text-gray-500">
          <p className="text-sm">
            Shuttle Management System • Safe • Reliable • Efficient
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
