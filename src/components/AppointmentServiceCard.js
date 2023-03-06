import React from "react";

const AppointmentServiceCard = ({ service, setTreatment }) => {
  const { name, slots, price } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-2xl text-center font-semibold text-blue-500">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Sorry,Try Another Day."}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            htmlFor="booking-modal"
            className="btn btn-primary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentServiceCard;
