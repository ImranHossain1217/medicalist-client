import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { userLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    userLogin(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        getUserToken(data.email);
      })
      .then((err) => window.alert(err.message));
  };

  const getUserToken = (email) => {
    fetch(`https://medicalist-server.vercel.app/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
          navigate(from, { replace: true });
          toast.success("Login Successfully");
        }
      });
  };
  return (
    <div className="md:w-96 mx-auto my-20 border p-5 shadow-md rounded-md">
      <h3 className="text-2xl text-center mb-5">Login</h3>
      <form onSubmit={handleSubmit(handleLogin)}>
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
          value="Login"
        />
      </form>
      <p className="mt-2">
        New to Medicalist?{" "}
        <Link className="text-primary" to="/signup">
          Create New Account
        </Link>
      </p>
      <div className="divider">OR</div>
      <button className="btn btn-outline btn-primary w-full">
        Login With Google
      </button>
    </div>
  );
};

export default Login;
