import React from "react";

const TestimonialCard = ({ client }) => {
  const { name, msg, img, city } = client;
  return (
    <div className="card shadow-lg text-neutral">
      <div className="card-body text-center">
        <p>{msg}</p>
        <div className="card-actions mt-2">
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src={img} alt="img" />
              </div>
            </div>
            <div className="ml-2">
              <p className="font-semibold">{name}</p>
              <p>{city}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
