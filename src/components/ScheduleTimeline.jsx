import React from "react";

const ScheduleTimeline = ({ schedule }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Driver Schedule</h2>
      <div className="grid grid-cols-4 gap-2">
        {schedule.map((slot, index) => (
          <div key={index} className="p-2 bg-white border rounded-lg">
            <p className="text-sm font-medium">{slot.time}</p>
            <p className="text-xs text-gray-500">{slot.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleTimeline;
