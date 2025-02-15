import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [drivers, setDrivers] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bookingsRes, driver1Res, driver2Res] = await Promise.all([
          axios.get("http://localhost:5000/bookings"),
          axios.get("http://localhost:5000/driver1"),
          axios.get("http://localhost:5000/driver2"),
        ]);

        setBookings(bookingsRes.data);
        setDrivers([driver1Res.data, driver2Res.data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="px-6 py-8 bg-gray-300">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-neutral-200/30 bg-white p-6">
          <div className="flex items-center">
            <div className="rounded-full bg-blue-100 p-3">
              <svg
                className="h-6 w-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">
                Active Trips
              </h3>
              <p className="text-2xl font-semibold text-gray-900">24</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-neutral-200/30 bg-white p-6">
          <div className="flex items-center">
            <div className="rounded-full bg-green-100 p-3">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">
                Available Drivers
              </h3>
              <p className="text-2xl font-semibold text-gray-900">12</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-neutral-200/30 bg-white p-6">
          <div className="flex items-center">
            <div className="rounded-full bg-purple-100 p-3">
              <svg
                className="h-6 w-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">
                Today's Bookings
              </h3>
              <p className="text-2xl font-semibold text-gray-900">86</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-neutral-200/30 bg-white p-6">
          <div className="flex items-center">
            <div className="rounded-full bg-yellow-100 p-3">
              <svg
                className="h-6 w-6 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">
                Active Routes
              </h3>
              <p className="text-2xl font-semibold text-gray-900">8</p>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------ */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-neutral-200/30 bg-white p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Driver Status
          </h2>
          <div className="space-y-4">
            {drivers?.map((driver, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {driver.name}
                    </p>
                  </div>
                </div>
                {driver.isAvailable && (
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Available
                  </span>
                )}
                {!driver.isAvailable && (
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Unavailable
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-neutral-200/30 bg-white p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Route Activity
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Campus Loop</p>
                <p className="text-xs text-gray-500">4 active shuttles</p>
              </div>
              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  // style="width: 75%"
                ></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Express Line
                </p>
                <p className="text-xs text-gray-500">2 active shuttles</p>
              </div>
              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  // style="width: 45%"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------ */}

      <div className="flex items-center justify-between my-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Booking Management
        </h2>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-4">
        <div className="rounded-lg border border-neutral-200/30 bg-white p-3">
          <select className="block w-full rounded-md border-gray-300 text-sm focus:border-blue-500 focus:ring-blue-500">
            <option>All Routes</option>
            <option>Campus Loop</option>
            <option>Express Line</option>
            <option>Shuttle A</option>
          </select>
        </div>
        <div className="rounded-lg border border-neutral-200/30 bg-white p-3">
          <select className="block w-full rounded-md border-gray-300 text-sm focus:border-blue-500 focus:ring-blue-500">
            <option>All Status</option>
            <option>Active</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
        </div>
        <div className="rounded-lg border border-neutral-200/30 bg-white p-3">
          <input
            type="date"
            className="block w-full rounded-md border-gray-300 text-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="rounded-lg border border-neutral-200/30 bg-white p-3">
          <input
            type="text"
            placeholder="Search bookings..."
            className="block w-full rounded-md border-gray-300 text-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="rounded-lg border border-neutral-200/30 bg-white">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200/30">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Booking ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Student Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Route
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Driver
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200/30">
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    #{booking.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Lucky
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {booking.route}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{booking.date}</div>
                    <div className="text-sm text-gray-500">{booking.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {booking.driver ? booking.driver : "Not Assigned"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <section className="px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Driver Schedule Management
          </h2>
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <button className="p-2 rounded-lg border border-neutral-200/30 bg-white">
            <svg
              className="h-5 w-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="rounded-lg border border-neutral-200/30 bg-white px-4 py-2">
            <input type="date" className="border-0 text-sm focus:ring-0" />
          </div>
          <button className="p-2 rounded-lg border border-neutral-200/30 bg-white">
            <svg
              className="h-5 w-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="rounded-lg border border-neutral-200/30 bg-white p-6">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-1 space-y-16 text-sm text-gray-500">
              <div>6:00 AM</div>
              <div>9:00 AM</div>
              <div>12:00 PM</div>
              <div>3:00 PM</div>
              <div>6:00 PM</div>
              <div>9:00 PM</div>
            </div>

            <div className="col-span-11 border-l border-neutral-200/30">
              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 rounded-full bg-gray-200 mr-3"></div>
                  <h3 className="text-sm font-medium text-gray-900">
                  Pankaj Kumar
                  </h3>
                </div>
                <div className="relative h-12">
                  <div className="absolute left-0 top-0 h-full w-full bg-blue-100 rounded-lg">
                    <div
                      className="absolute left-[10%] top-0 h-full w-[30%] bg-blue-500 rounded-lg"
                      title="Active Shift">
                      <span className="absolute inset-0 flex items-center justify-center text-xs text-white">
                        Campus Loop Route
                      </span>
                    </div>
                    <div
                      className="absolute left-[50%] top-0 h-full w-[20%] bg-yellow-500 rounded-lg"
                      title="Break">
                      <span className="absolute inset-0 flex items-center justify-center text-xs text-white">
                        Break
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 rounded-full bg-gray-200 mr-3"></div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Rahul Kumar
                  </h3>
                </div>
                <div className="relative h-12">
                  <div className="absolute left-0 top-0 h-full w-full bg-blue-100 rounded-lg">
                    <div
                      className="absolute left-[20%] top-0 h-full w-[40%] bg-green-500 rounded-lg"
                      title="Active Shift">
                      <span className="absolute inset-0 flex items-center justify-center text-xs text-white">
                        Express Route
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 rounded-full bg-gray-200 mr-3"></div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Ravi Kumar
                  </h3>
                </div>
                <div className="relative h-12">
                  <div className="absolute left-0 top-0 h-full w-full bg-blue-100 rounded-lg">
                    <div
                      className="absolute left-[30%] top-0 h-full w-[35%] bg-purple-500 rounded-lg"
                      title="Active Shift">
                      <span className="absolute inset-0 flex items-center justify-center text-xs text-white">
                        Shuttle A Route
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-neutral-200/30 bg-white p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Active Shifts
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                    Rohit Kumar
                    </p>
                    <p className="text-xs text-gray-500">
                      Campus Loop - 6:00 AM to 2:00 PM
                    </p>
                  </div>
                </div>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                  On Duty
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                     Rajesh Kumar
                    </p>
                    <p className="text-xs text-gray-500">
                      Express Route - 8:00 AM to 4:00 PM
                    </p>
                  </div>
                </div>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                  Break
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-neutral-200/30 bg-white p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Upcoming Shifts
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                    Pawan Kumar
                    </p>
                    <p className="text-xs text-gray-500">
                      Shuttle A - 2:00 PM to 10:00 PM
                    </p>
                  </div>
                </div>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                  Upcoming
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AdminPanel;
