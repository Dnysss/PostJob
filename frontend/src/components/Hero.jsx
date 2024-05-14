import Input from "./Input";

const Hero = () => {
  return (
    <div className="items-center text-center flex flex-col justify-center">
      <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#6DE754] leading-loose ">
        Win your dream job
        <div className="text-white mt-5">with PostJob</div>
      </h1>
      <p className="text-gray-500 text-base">
        We are the website with the most technology vacancies on the market,
        aimed at home offices
      </p>

      <Input />
    </div>
  );
};

export default Hero;
