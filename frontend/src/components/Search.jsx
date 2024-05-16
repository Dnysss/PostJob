import Hero from "../components/Hero";
import Footer from "./Footer";
import Header from "./Header";
import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const job = location.state?.searchResults;

  console.log(job);
  return (
    <>
      <div>
        <Header />
        <Hero />
        <div className="mt-14 mb-24 flex flex-col space-y-7 items-center justify-center">
          {job ? (
            <div
              key={job._id}
              className="w-[1100px] p-4 bg-[#1E201D] rounded-lg shadow sm:p-8"
            >
              <div className="flex items-center justify-between">
                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                  {job.title}
                </h5>
              </div>

              <p className="text-sm text-gray-500">{job.company}</p>
              <p className="text-sm text-gray-500"><span>$ </span>{job.salary}</p>
            </div>
          ) : (
            <p>No search results found</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;
