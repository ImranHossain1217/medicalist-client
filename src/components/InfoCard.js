import React from "react";

const InfoCard = ({ cardInfo }) => {
  const { name, description, icon, bgClass } = cardInfo;
  return (
    <div className={`card card-side shadow-xl ${bgClass} text-white px-5`}>
      <figure>
        <img src={icon} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
