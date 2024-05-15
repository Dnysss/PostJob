import { jobData } from "../data";
import { Link } from "react-router-dom";
import api from "../../utils/api";
import React, { useState, useEffect } from "react";

const Post = () => {
  const { title, subtitle } = jobData;
  const [jobs, setJobs] = useState([]);


  useEffect(() => {
    api.get("/job/all")
    .then(response => {
      console.log(response.data.jobs); // Verifique se os dados estão chegando corretamente
      setJobs(response.data.jobs);
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <>
      <div className="mt-32 mb-10 text-center text-white lg:col-span-2 my-4">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
          {title}
        </h1>
        <p className="text-gray-500">{subtitle}</p>
      </div>
      <div className="mb-28 flex flex-col space-y-7 items-center justify-center">
        {jobs.length > 0 &&
          jobs.map((job) => {
            return (
              <div
                className="w-[1100px] p-4 bg-[#1E201D] rounded-lg shadow sm:p-8"
                key={job._id}
              >
                <div className="flex items-center justify-between">
                  <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                    {job.title}
                  </h5>
                  <Link
                    to={`/job/${job._id}`}
                    className="bg-[#6DE754]  rounded-xl focus:ring-4 focus:outline-none font-medium text-sm px-4 py-2"
                  >
                    View
                  </Link>
                </div>

                <p className="text-sm text-gray-500">{job.company}</p>
                <p className="text-sm text-gray-500"><span>$</span> {job.salary}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Post;
