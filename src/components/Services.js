import React from "react";
import dental from "../assets/images/service-icon1.png";
import eye from "../assets/images/service-icon2.png";
import allergic from "../assets/images/service-icon3.png";
import ServiceCard from "./ServiceCard";
import ServiceHero from "./ServiceHero";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      name: "Dental Care",
      description:
        "Dental service providers are expected to provide treatment for the most significant oral health challenges of a client before addressing matters of lesser impact or priority.",
      icon: dental,
    },
    {
      id: 2,
      name: "Eye Care",
      description:
        "Eyes are an important part of your health. Most people rely on their eyes to see and make sense of the world around them. But some eye diseases can lead to vision loss.",
      icon: eye,
    },
    {
      id: 1,
      name: "Allgeric Issue",
      description:
        "Allergies can cause a variety of symptoms such as a runny nose, sneezing, itching, rashes, swelling, or asthma. Allergies can range from minor to severe.",
      icon: allergic,
    },
  ];
  return (
    <div className="mt-20">
      <div className="text-center">
        <h3 className="text-lg text-blue-500 font-bold uppercase">
          Our Services
        </h3>
        <h1 className="text-3xl font-medium mt-2">
          High Quality Services for You
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {serviceData.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
      <ServiceHero></ServiceHero>
    </div>
  );
};

export default Services;
