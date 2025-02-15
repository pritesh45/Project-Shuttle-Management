// export let bookings = [
//   { id: 1, name: "John Doe", route: "Route A", date: "2025-02-15", time: "10:00 AM" },
//   { id: 2, name: "Jane Smith", route: "Route B", date: "2025-02-16", time: "11:30 AM" },
// ];

import axios from "axios";

export const getBookings = async () => {
  const response = await axios("http://localhost:3001/bookings");
  console.log(response);
  
  const data = await response.json();
  return data;
};

export const addBooking = (booking) => {
  // booking.id = bookings.length + 1;
  // bookings.push(booking);
};

export const updateBooking = (id, updatedBooking) => {
  // const index = bookings.findIndex((booking) => booking.id === id);
  // if (index !== -1) {
  //   bookings[index] = { id, ...updatedBooking };
  // }
};
