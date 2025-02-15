import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import driversData from "../data/drivers.json";
import ScheduleTimeline from "../components/ScheduleTimeline";
import ScheduleForm from "../components/ScheduleForm";

const DriverSchedule = () => {
  const { id } = useParams();
  const driver = driversData.find((d) => d.id === parseInt(id));
  const [schedule, setSchedule] = useState(driver ? driver.schedule : []);

  const updateSchedule = (newSchedule) => {
    setSchedule(newSchedule);
  };

  if (!driver) {
    return <div className="text-center text-red-500">Driver not found.</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Schedule for {driver.name} ({driver.vehicle})
      </h1>
      <ScheduleTimeline schedule={schedule} />
      <ScheduleForm schedule={schedule} updateSchedule={updateSchedule} />
    </div>
  );
};

export default DriverSchedule;
