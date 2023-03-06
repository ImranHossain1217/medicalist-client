import React from "react";
import doctor from "../assets/images/doctor-2.jpg";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <section>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={doctor} className="md:w-1/2 rounded-lg" alt="banner" />
          <div className="md:w-1/2">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
