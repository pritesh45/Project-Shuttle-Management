import React from "react";

const Def = () => {
  return (
    <div id="webcrumbs">
      <div className="w-[1024px] bg-white rounded-lg shadow-xl p-6">
        <nav className="mb-8 border-b pb-4">
          <ul className="flex space-x-8">
            <li className="font-semibold hover:text-blue-600 transition-colors cursor-pointer border-b-2 border-blue-600">
              Book Shuttle
            </li>
            <li className="font-semibold hover:text-blue-600 transition-colors cursor-pointer">
              Manage Bookings
            </li>
            <li className="font-semibold hover:text-blue-600 transition-colors cursor-pointer">
              Trip History
            </li>
          </ul>
        </nav>

        <section className="booking-form">
          <h2 className="text-2xl font-bold mb-6">Book a Shuttle</h2>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium">Select Date</span>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium">Select Time</span>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500">
                  <option>09:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-medium">Select Route</span>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500">
                  <option>Downtown - Airport</option>
                  <option>Airport - Downtown</option>
                  <option>North Campus - South Campus</option>
                </select>
              </label>
            </div>

            <div className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium">Pickup Location</span>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500">
                  <option>Terminal 1</option>
                  <option>Terminal 2</option>
                  <option>Main Street Station</option>
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-medium">Drop-off Location</span>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500">
                  <option>City Center</option>
                  <option>Shopping Mall</option>
                  <option>Business District</option>
                </select>
              </label>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700 transform hover:scale-[1.02] transition-all">
                <span className="material-symbols-outlined align-middle mr-2">
                  directions_bus
                </span>
                Book Now
              </button>
            </div>
          </div>
        </section>

        <section className="upcoming-rides bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Upcoming Rides</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Downtown - Airport</p>
                  <p className="text-sm text-gray-600">Tomorrow, 09:00 AM</p>
                </div>
                <div className="space-x-2">
                  <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
                    Edit
                  </button>
                  <button className="px-4 py-2 border border-red-500 rounded-lg hover:bg-red-50 transition-colors">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trip-history">
          <h3 className="text-xl font-semibold mb-4">Past Trips</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Airport - Downtown</p>
                  <p className="text-sm text-gray-600">
                    May 15, 2023 - 10:00 AM
                  </p>
                  <p className="text-sm text-gray-600">Driver: John Smith</p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-[1.02] transition-all">
                  <span className="material-symbols-outlined align-middle mr-2">
                    star
                  </span>
                  Leave Feedback
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Def;
