import axios from "axios";
import React from "react";
import { Link, useLoaderData, useParams } from "react-router";

const LatestJobCardDetails = () => {
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

  return (
    <div className="bg-color5">
      <div className="w-11/12 lg:w-4/5 mx-auto text-center py-10 space-y-3">
        <h1 className="text-5xl font-bold">{company}</h1>
        <p>{description}</p>
        <div>
          <Link to={`/apply/${_id}`}>
            <button className="bg-color3 text-color2 px-4 py-1 rounded-md">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestJobCardDetails;
