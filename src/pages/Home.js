import React from "react";
import Banner from "../components/Banner";
import InfoCards from "../components/InfoCards";
import MakeAppointment from "../components/MakeAppointment";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
