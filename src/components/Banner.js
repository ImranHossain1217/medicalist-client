import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={banner}
          className="md:w-1/2 h-80 md:object-contain rounded-lg"
          alt="banner"
        />
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-5xl font-bold capitalize">
            Whats makes us batter,makes you batter.{" "}
          </h1>
          <p className="py-6">
            Look at the combatant prostrate on the ground and his assailant
            bending over, each intent on stabbing the other. See how the
            prostrate man plants his foot on the thigh of his enemy.
          </p>
          <button className="btn btn-primary">
            <Link to="/appointment">Make Appointment</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
