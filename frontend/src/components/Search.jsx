import Hero from "../components/Hero";
import Header from "./Header";
const Search = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div className="mt-14 flex flex-col space-y-7 items-center justify-center">
        <div className="w-[1100px] p-4 bg-[#1E201D] rounded-lg shadow sm:p-8">
          <div className="flex items-center justify-between">
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
              Web Develop
            </h5>
          </div>

          <p className="text-sm text-gray-500">Company</p>
          <p className="text-sm text-gray-500">Price</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
