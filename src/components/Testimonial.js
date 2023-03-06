import React from "react";
import people1 from "../assets/images/people1.png";
import people2 from "../assets/images/people2.png";
import people3 from "../assets/images/people3.png";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      name: "Wilson Henry",
      msg: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      city: "California",
      img: people1,
    },
    {
      id: 2,
      name: "Stephen Mery",
      msg: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      city: "London",
      img: people2,
    },
    {
      id: 1,
      name: "Jaquline Harnandez",
      msg: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      city: "Sydney",
      img: people3,
    },
  ];
  return (
    <section className="my-16">
      <div className="text-center">
        <h3 className="text-blue-500 text-lg font-bold uppercase">
          Testimonial
        </h3>
        <h1 className="text-3xl font-semibold">What Our Patients Says</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        {testimonialData.map((client) => (
          <TestimonialCard key={client.id} client={client}></TestimonialCard>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
