import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Sign up Successfully Done.");
        const userInfo = {
          displayName: data.name,
        };
        saveUser(data.name, data.email);
        updateUser(userInfo).then(() => {});
      })
      .catch((err) => window.alert(err.message));
  };

  const saveUser = (name, email) => {
    const user = { name, email };

    fetch("https://medicalist-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        getUserToken(email);
      });
  };

  const getUserToken = (email) => {
    fetch(`https://medicalist-server.vercel.app/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
          navigate("/");
        }
      });
  };

  return (
    <div className="md:w-96 mx-auto my-16 border p-5 shadow-md rounded-md">
      <h3 className="text-2xl text-center mb-3">SignUp</h3>
      <form onSubmit={handleSubmit(handleSignUp)}>
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
        <label className="label">Password</label>
        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
        />
        <input
          className="btn btn-primary w-full mt-3"
          type="submit"
          value="SignUp"
        />
      </form>
      <p className="mt-2">
        Already have an account?{" "}
        <Link className="text-primary" to="/login">
          Please Login
        </Link>
      </p>
      <div className="divider">OR</div>
      <button className="btn btn-outline btn-primary w-full">
        SignUp With Google
      </button>
    </div>
  );
};

export default SignUp;
