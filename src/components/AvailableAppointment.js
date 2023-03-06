import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentServiceCard from "./AppointmentServiceCard";

const AvailableAppointment = ({ selectedDate, setTreatment }) => {
  const [appointmentService, setAppointmentService] = useState([]);

  useEffect(() => {
    fetch("https://medicalist-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setAppointmentService(data));
  }, []);
  return (
    <section className="my-10 md:my-16">
      <p className="text-blue-500 text-center font-bold">
        Available Appointment Date on {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3 mt-8">
        {appointmentService.map((service) => (
          <AppointmentServiceCard
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></AppointmentServiceCard>
        ))}
      </div>
    </section>
  );
};

export default AvailableAppointment;
