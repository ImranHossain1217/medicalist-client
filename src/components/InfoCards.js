import React from "react";
import clock from "../assets/icons/clock.svg";
import marker from "../assets/icons/marker.svg";
import phone from "../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const infoData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open 10 am to 5 pm everyday",
      bgClass: "bg-blue-500",
      icon: clock,
    },
    {
      id: 2,
      name: "Visit Our Location",
      description: "Brooklyn, NY 10036, United States",
      bgClass: "bg-neutral",
      icon: marker,
    },
    {
      id: 3,
      name: "Contact Us",
      description: "+000 123 456789",
      bgClass: "bg-blue-500",
      icon: phone,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mt-16 gap-5">
      {infoData.map((info) => (
        <InfoCard key={info.id} cardInfo={info}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
