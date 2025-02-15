import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ScheduleForm = ({ schedule, updateSchedule }) => {
  const [newSchedule, setNewSchedule] = useState(schedule);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleChange = (index, field, value) => {
    const updatedSchedule = [...newSchedule];
    updatedSchedule[index][field] = value;
    setNewSchedule(updatedSchedule);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSchedule(newSchedule);
    
    // Show success popup
    setShowPopup(true);

    // Hide popup and navigate back after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
      navigate("/drivers"); // Redirect to the drivers list page
    }, 2000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-4 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Edit Schedule</h2>
        {newSchedule.map((slot, index) => (
          <div key={index} className="flex space-x-4 mb-2">
            <input
              type="text"
              value={slot.time}
              onChange={(e) => handleChange(index, "time", e.target.value)}
              className="border p-2 rounded-md w-1/2"
            />
            <select
              value={slot.status}
              onChange={(e) => handleChange(index, "status", e.target.value)}
              className="border p-2 rounded-md w-1/2"
            >
              <option>On Duty</option>
              <option>Break</option>
              <option>Off Duty</option>
            </select>
          </div>
        ))}
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md mt-2">
          Save Changes
        </button>
      </form>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-3 rounded-md shadow-lg">
          ✅ Saved Successfully!
        </div>
      )}
    </div>
  );
};

export default ScheduleForm;
