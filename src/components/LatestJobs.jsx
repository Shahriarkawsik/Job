import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import LatestJobCard from "./LatestJobCard";

const LatestJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/jobs`).then((response) => {
      setJobs(response.data);
    });
  }, []);
  return (
    <div className="py-20 w-11/12 lg:w-4/5 mx-auto space-y-10 font-PlusJakartaSans">
      <h1 className="text-center text-4xl text-color1 font-bold ">
        Latest Job
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {jobs.map((job) => (
          <LatestJobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
