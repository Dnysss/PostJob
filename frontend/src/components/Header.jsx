import { useState } from "react";
import Logo from "./../assets/imgs/logo.png";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [navMobile, setNavMobile] = useState();

  return (
    <header className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-[120px]">
            <Link to="/" className="w-36">
              <img src={Logo} alt="" />
            </Link>
            <div className="hidden lg:flex text-[#909090] font-semibold">
              <Nav />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          navMobile ? "max-h-52" : "max-h-0"
        } lg:hidden absolute top-24 bg-accent-tertiary w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}
      >
        <NavMobile />
      </div>
      <div className="flex text-xs">
        <Link to="" className="border text-center border-[#6DE754] rounded-xl font-bold me-2 mx-auto w-40 py-3">
          View Jobs
        </Link>

        <Link
          to="/form"
          className="flex bg-[#6DE754] w-40 rounded-xl font-bold justify-center items-center text-center mx-auto text-black"
        >
          Open Vacancy
        </Link>
      </div>

      <div
        onClick={() => setNavMobile(!navMobile)}
        className="text-2xl text-primary cursor-pointer lg:hidden"
      >
        <FaBars />
      </div>
    </header>
  );
};

export default Header;
