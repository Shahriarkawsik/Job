import Lottie from "lottie-react";
import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { jobPortalContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import loginLottieData from "../assets/login.json";

const Login = () => {
  const { signInUserWithEmail, createUserWithGoogle } =
    useContext(jobPortalContext);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUserWithEmail(email, password)
      .then((result) => {
        navigate("/");
        console.log("Login Successful");
        console.log("User signed in:", result.user);
      })
      .catch((error) => {
        console.error("Error code:", error.code);
        console.error("Error message:", error.message);
      });
  };

  const handleSignUPWithGoogle = () => {
    createUserWithGoogle()
      .then((result) => {
        navigate("/");
        console.log("Login Successful");
        console.log("User Info:", result.user);
      })
      .catch((error) => {
        console.error("Error during Google sign-in:", error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8">
        <div className="text-center lg:text-left border flex justify-center items-center">
          <Lottie className="w-full" animationData={loginLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4">
          <h1 className="text-3xl font-bold text-color1 text-center">
            Log in now!
          </h1>
          <form onSubmit={handleLogin} className="card-body">
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Log in</button>
            </div>
          </form>
          <div className="divider">OR</div>
          <button
            onClick={handleSignUPWithGoogle}
            className="px-5 py-3 rounded-lg bg-gray-200 text-xl font-semibold text-color1 flex items-center justify-center gap-3"
          >
            <FcGoogle />
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
