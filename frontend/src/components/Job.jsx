import { Link, useParams } from "react-router-dom";
import Img from "./../assets/imgs/outline.png";
import { useEffect, useState } from "react";
import api from "../../utils/api";

const Job = () => {
  const [job, setJob] = useState({});
  const { id } = useParams();

  useEffect(() => {
    api.get(`/job/${id}`)
    .then(res => {
      setJob(res.data.job)
    })
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center space-x-4 bg-[#6DE754] h-screen">
      <div className="flex items-end mb-14 w-full pl-60">
        <Link to="/" className="text-white bg-[#1E201D] rounded-xl font-bold me-2 w-32 py-3 text-center">
          Back
        </Link>
      </div>
      {job && (
          <div className="space-y-8 p-8 rounded-lg md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center bg-[#1E201D] shadow-2xl">
        <div className=" text-white text-sm w-96">
          <h2 className="text-4xl font-bold mb-8">{job.title}</h2>

          <p className="font-semibold mb-6 text-[#6DE754]">
            Who they are looking for:
          </p>

          <p>
            {job.description}
          </p>

          <p className="my-6">
            <span className="font-semibold text-[#6DE754]">
              The reported salary is:
            </span>{" "}
            $ {job.salary}
          </p>

          <p className="">
            To work at{" "}
            <span className="font-semibold text-[#6DE754]">{job.company}</span> send
            an email to{" "}
            <span className="font-semibold text-[#6DE754]">
              {job.email}
            </span>
          </p>
        </div>

        <div className="">
          <img src={Img} alt="" className="" />
        </div>
      </div>
        )
      }
      
    </div>
  );
};

export default Job;
