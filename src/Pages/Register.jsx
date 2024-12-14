import React, { useContext } from "react";
import { jobPortalContext } from "../AuthProvider/AuthProvider";
import Lottie from "lottie-react";
import registerLottieData from "../assets/registration.json";

const Register = () => {
  const { createUserWithEmail, createUserWithGoogle } =
    useContext(jobPortalContext);

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    createUserWithEmail(email, password)
      .then((result) => {
        console.log("Register Successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleSignUPWithGoogle = () => {
    createUserWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log("Register Successful");
        console.log("User Info:", user);
      })
      .catch((error) => {
        console.error("Error during Google sign-in:", error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left border flex justify-center items-center">
          <Lottie className="w-1/2" animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4">
          <h1 className="text-3xl font-bold text-color1 text-center">
            Register now!
          </h1>
          <form onSubmit={handleRegistration} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <button
            onClick={handleSignUPWithGoogle}
            className="px-5 py-3 rounded-lg bg-gray-200 text-xl font-semibold text-color1"
          >
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
