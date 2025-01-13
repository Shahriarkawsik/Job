import React from "react";
import { BiDollar } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { SiTask } from "react-icons/si";
import { TbCoinTaka } from "react-icons/tb";
import { Link } from "react-router";

const LatestJobCard = ({ job }) => {
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
  } = job;
  return (
    <div className="rounded-xl p-4 bg-color2 space-y-3 hover:scale-105 hover:border hover:border-color3 transition-all">
      <div className="flex items-center gap-5">
        <figure className="border rounded">
          <img className="w-14" src={company_logo} alt="company_logo" />
        </figure>
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-color1 hover:text-color3">
            {company}
          </h3>
          <p className="text-color4 flex items-center gap-2">
            <CiLocationOn />
            <span>{location}</span>
          </p>
        </div>
      </div>
      <div className="space-y-3">
        <h2 className="text-color1 hover:text-color3 text-xl font-bold">
          {title}
        </h2>
        <div className="flex items-center gap-3">
          <p className="flex items-center gap-1">
            <SiTask />
            <span>{jobType}</span>
          </p>
          <p className="flex items-center gap-1">
            <IoMdTime />
            <span>{applicationDeadline}</span>
          </p>
        </div>
      </div>
      <p>{description}</p>
      <div className="flex items-center flex-wrap gap-2">
        {requirements.map((skill, index) => (
          <p
            key={index}
            className="border px-4 py-2 text-center rounded-md bg-color5"
          >
            {skill}
          </p>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-0 text-xs">
          Salary:
          <BiDollar className="text-xl text-color3 font-bold" />
          <span className="text-xl text-color3 font-bold">
            {salaryRange.min}-{salaryRange.max}
          </span>{" "}
          /{salaryRange.currency}
        </p>
        <Link to={`/jobs/${_id}`}>
          <button className="bg-color3 text-color2 px-4 py-1 rounded-md">
            Apply
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LatestJobCard;
