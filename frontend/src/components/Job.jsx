import { Link } from "react-router-dom";
import Img from "./../assets/imgs/outline.png";

const Job = () => {
  return (
    <div className="flex flex-col items-center justify-center space-x-4 bg-[#6DE754] h-screen">
      <div className="flex items-end mb-14 w-full pl-60">
        <Link to="/" className="text-white bg-[#1E201D] rounded-xl font-bold me-2 w-32 py-3 text-center">
          Back
        </Link>
      </div>

      <div className="space-y-8 p-8 rounded-lg md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center bg-[#1E201D] shadow-2xl">
        <div className=" text-white text-sm w-96">
          <h2 className="text-4xl font-bold mb-8">Web Developer</h2>

          <p className="font-semibold mb-6 text-[#6DE754]">
            Who they are looking for:
          </p>

          <p>
            A free AI cover letter generator powered by GPT is a tool that uses
            artificial intelligence and natural language processing to help job
            seekers create customized and effective cover letters.
          </p>

          <p className="my-6">
            <span className="font-semibold text-[#6DE754]">
              The reported salary is:
            </span>{" "}
            $ 4000
          </p>

          <p className="">
            To work at{" "}
            <span className="font-semibold text-[#6DE754]">Tech Comp</span> send
            an email to{" "}
            <span className="font-semibold text-[#6DE754]">
              rose@techcomp.com
            </span>
          </p>
        </div>

        <div className="">
          <img src={Img} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default Job;
