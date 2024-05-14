import { LuAppWindow } from "react-icons/lu";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const CardWithLink = () => {
  return (
    <div className="flex items-center text-center justify-center space-x-4 my-12">
      <div className="max-w-sm p-6 rounded-lg shadow bg-[#1E201D]">
        <LuAppWindow className="w-5 h-5 text-gray-500 dark:text-gray-400 mb-3" />

        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Need a help in Claim?
        </h5>

        <p className="mb-3 font-normal text-sm text-gray-500 dark:text-gray-400">
          Go to this step by step guideline process on how to certify for your
          weekly benefits:
        </p>
        <a
          href="#"
          className="inline-flex font-medium items-center text-[#6DE754] hover:underline"
        >
          See our guideline
          <FaArrowUpRightFromSquare className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" />
        </a>
      </div>

      <div className="max-w-sm p-6 rounded-lg shadow bg-[#1E201D]">
        <LuAppWindow className="w-5 h-5 text-gray-500 dark:text-gray-400 mb-3" />

        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Need a help in Claim?
        </h5>

        <p className="mb-3 font-normal text-sm text-gray-500 dark:text-gray-400">
          Go to this step by step guideline process on how to certify for your
          weekly benefits:
        </p>
        <a
          href="#"
          className="inline-flex font-medium items-center text-[#6DE754] hover:underline"
        >
          See our guideline
          <FaArrowUpRightFromSquare className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" />
        </a>
      </div>

      <div className="max-w-sm p-6 rounded-lg shadow bg-[#1E201D]">
        <LuAppWindow className="w-5 h-5 text-gray-500 dark:text-gray-400 mb-3" />

        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Need a help in Claim?
        </h5>

        <p className="mb-3 font-normal text-sm text-gray-500 dark:text-gray-400">
          Go to this step by step guideline process on how to certify for your
          weekly benefits:
        </p>
        <a
          href="#"
          className="inline-flex font-medium items-center text-[#6DE754] hover:underline"
        >
          See our guideline
          <FaArrowUpRightFromSquare className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" />
        </a>
      </div>
    </div>
  );
};

export default CardWithLink;
