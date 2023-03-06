import React from "react";
import doctor from "../assets/images/doctor.png";
import appointment from "../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <section
      className="md:mt-24 mt-16"
      style={{ backgroundImage: `url(${appointment})` }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="md:w-1/2 -mt-32 hidden md:block md:object-fill rounded-lg"
            alt="service-img"
          />
          <div className="md:w-1/2 md:ml-5">
            <h3 className="text-lg text-blue-500 font-bold">Appointment</h3>
            <h1 className="text-3xl font-bold text-white">
              Make an appointment Today
            </h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
