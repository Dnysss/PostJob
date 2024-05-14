const Form = () => {
  return (
    <div className="mt-10 text-center text-[#6DE754] lg:col-span-2 my-10">
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
        Advertise the vacancy by filling out the form
      </h1>
      <div className="flex flex-col mt-10 space-y-7 items-center justify-center">
        <div className="w-[1100px] p-4 bg-[#1E201D] rounded-lg shadow sm:p-8">
          <h2 className="text-white text-2xl font-bold text-center mb-10">
            Fill in the details as best you can to find your dev faster!
          </h2>
          <form>
            <div className="mb-6">
              <label
                htmlFor="text"
                className="block mb-2 text-sm text-white text-start font-semibold"
              >
                Job title:
              </label>
              <input
                type="text"
                id=""
                className="border rounded-lg lock w-full p-2.5  dark:border-gray-600 placeholder-gray-400 text-white bg-[#161815] border-gray-500 text-sm focus:outline-none focus:border-[#6DE754]"
                placeholder="Enter the job title"
                required
              />
              <p className="text-sm mt-2 text-start text-[#909090]">
                The title is very important, be clear and objective.
              </p>
            </div>

            <div className="mb-6">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-semibold text-white text-start"
              >
                Job title:
              </label>
              <textarea
                type="text"
                id=""
                className="border rounded-lg lock w-full p-2.5  dark:border-gray-600 placeholder-gray-400 text-white bg-[#161815] border-gray-500 text-sm focus:outline-none focus:border-[#6DE754]"
                placeholder="Describe the developer's activities..."
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-semibold text-white text-start"
              >
                Contracting company:
              </label>
              <input
                type="email"
                id="email"
                className="border rounded-lg lock w-full p-2.5  dark:border-gray-600 placeholder-gray-400 text-white bg-[#161815] border-gray-500 text-sm focus:outline-none focus:border-[#6DE754]"
                placeholder="Enter contact email"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-semibold text-white text-start"
              >
                Contracting company:
              </label>
              <input
                type="text"
                id=""
                className="border rounded-lg lock w-full p-2.5  dark:border-gray-600 placeholder-gray-400 text-white bg-[#161815] border-gray-500 text-sm focus:outline-none focus:border-[#6DE754]"
                placeholder="Enter the job title"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-semibold text-white text-start"
              >
                Salary offered:
              </label>
              <input
                type="text"
                id=""
                className="border rounded-lg lock w-full p-2.5  dark:border-gray-600 placeholder-gray-400 text-white bg-[#161815] border-gray-500 text-sm focus:outline-none focus:border-[#6DE754]"
                placeholder="Enter the salary for the position"
                required
              />
            </div>

            <button
              type="submit"
              className="flex items-start text-black bg-[#6DE754] font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
