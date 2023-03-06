import React from "react";

const ServiceCard = ({ service }) => {
  const { name, description, icon } = service;
  return (
    <div className="card bg-base-100 shadow-xl mt-5">
      <figure className="px-10 pt-10">
        <img src={icon} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-justify">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
