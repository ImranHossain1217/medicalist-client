import React, { useState } from "react";
import AppointmentBanner from "../components/AppointmentBanner";
import AvailableAppointment from "../components/AvailableAppointment";
import BookingModal from "../components/BookingModal";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [treatment, setTreatment] = useState({});

  return (
    <div className="max-w-7xl mx-auto">
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppointmentBanner>
      <AvailableAppointment
        selectedDate={selectedDate}
        setTreatment={setTreatment}
      ></AvailableAppointment>
      <BookingModal
        treatment={treatment}
        selectedDate={selectedDate}
      ></BookingModal>
    </div>
  );
};

export default Appointment;
