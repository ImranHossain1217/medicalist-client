import React from "react";
import serviceDoctor from "../assets/images/serviceHero.jpg";

const ServiceHero = () => {
  return (
    <div className="hero mt-10">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={serviceDoctor}
          className="md:w-1/2 h-72 md:object-fill rounded-lg shadow-2xl"
          alt="service-img"
        />
        <div className="md:w-1/2 md:ml-5">
          <h1 className="text-3xl font-bold">
            Exceptional Dental Care,
            <br /> on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
