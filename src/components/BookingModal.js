import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../context/AuthProvider";

const BookingModal = ({ treatment, selectedDate }) => {
  const { name, slots, price } = treatment;
  const date = format(selectedDate, "PP");
  const { user } = useContext(AuthContext);

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const patientName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const slot = form.slot.value;
    const bookingInfo = {
      treatmentName: name,
      name: patientName,
      email,
      phone,
      slot,
      date,
      price,
    };

    fetch("https://medicalist-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (user?.email) {
          if (data.acknowledged) {
            toast.success("Booking Confirmed.");
          } else {
            toast.error(data.message);
          }
        } else {
          toast.error("Please Login Your Account.");
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-5 mt-10"
          >
            <input
              type="text"
              disabled
              defaultValue={date}
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              {slots?.map((slot, i) => (
                <option key={i + 1}>{slot}</option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              defaultValue={user?.displayName}
              readOnly
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              name="email"
              defaultValue={user?.email}
              readOnly
            />
            <input
              type="text"
              placeholder="Your Phone"
              className="input input-bordered w-full"
              name="phone"
            />
            <input className="btn" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
