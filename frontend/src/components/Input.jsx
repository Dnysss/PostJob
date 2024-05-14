import { Link } from "react-router-dom";

const Input = () => {
  return (
    <div className="mt-8 w-1/2">
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <input
          type="search"
          id="search"
          className="w-full block border rounded-xl text-white bg-[#161815] border-gray-500 p-4 text-sm focus:outline-none focus:border-[#6DE754]"
          placeholder="Enter the vacancy you are looking for"
          required
        />
        <Link
        to="/search"
          className="text-black absolute end-2.5 bottom-2.5 bg-[#6DE754]  rounded-xl focus:ring-4 focus:outline-none font-medium text-sm px-4 py-2"
        >
          Search
        </Link>
      </div>
    </div>
  );
};

export default Input;
