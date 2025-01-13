import React from "react";
import { Link, useLoaderData } from "react-router";
import applyLottieData from "../assets/apply.json";
import Lottie from "lottie-react";

const JobApply = () => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_email,
    hr_name,
    company_logo,
  } = useLoaderData();
  const handleApply = (event) => {
    event.preventDefault();
    const form = event.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkedIn, github, resume);
  };

  return (
    <div className="bg-color5">
      <div className="w-11/12 lg:w-4/5 mx-auto text-center py-10 space-y-3">
        <h1 className="text-5xl font-bold">Apply Here</h1>

        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse gap-8">
            <div className="text-center lg:text-left border flex justify-center items-center max-h-[550px]">
              <Lottie animationData={applyLottieData}></Lottie>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4">
              <h1 className="text-3xl font-bold text-color1 text-center">
                Apply now!
              </h1>
              <form onSubmit={handleApply} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">LinkedIn URL</span>
                  </label>
                  <input
                    type="url"
                    name="linkedIn"
                    placeholder="LinkedIn URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">GitHub URL</span>
                  </label>
                  <input
                    type="url"
                    name="github"
                    placeholder="Github URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Resume URL</span>
                  </label>
                  <input
                    type="url"
                    name="resume"
                    placeholder="Resume URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Apply</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
