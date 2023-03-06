import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

const AddDoctor = () => {
  const { register, handleSubmit } = useForm();
  const imgHostKey = process.env.REACT_APP_imgbb_API_KEY;
  const navigate = useNavigate();

  const { data: specialties = [], isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("https://medicalist-server.vercel.app/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleAddDoctor = (data) => {
    const image = data.photo[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            specailty: data.specialty,
            img: imgData.data.url,
          };
          fetch("https://medicalist-server.vercel.app/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Doctor Add Successfully.");
                navigate("/dashboard/manage-doctors");
              }
            });
        }
      });
  };
  return (
    <div className="md:w-96 p-5 mx-auto">
      <h3 className="text-2xl">Add New Doctor</h3>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <label className="label">Name</label>
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="Name"
          className="input input-bordered w-full"
        />
        <label className="label">Email</label>
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
        />
        <label className="label">Specialty</label>
        <select
          {...register("specialty", { required: true })}
          className="select select-bordered w-full"
        >
          {specialties.map((specailty) => (
            <option key={specailty._id} value={specailty.name}>
              {specailty.name}
            </option>
          ))}
        </select>
        <label className="label">Photo</label>
        <input
          type="file"
          {...register("photo")}
          className="file-input file-input-bordered w-full"
        />
        <input
          className="btn btn-primary w-full mt-3"
          type="submit"
          value="Add Doctor"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
