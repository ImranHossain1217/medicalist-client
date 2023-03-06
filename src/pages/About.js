import React from "react";
import about from "../assets/images/about.png";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={about} className="md:w-1/2 rounded-lg" alt="about-img" />
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold mt-3">WHY CHOOSE US</h1>
          <p className="py-5">
            You can make a real difference to people's lives by helping to
            alleviate pain and suffering. it's a respected profession. there's a
            wide choice of careers – in fact there are over 60 specialties and
            there are opportunities to get involved with teaching, research and
            management. the day-to-day work can be very varied.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
