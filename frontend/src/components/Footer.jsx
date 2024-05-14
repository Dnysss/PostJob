import React from "react";
import { footerData } from "./../data";

import Copyright from "./Copyright";

import Logo from "./../assets/imgs/logoblack.png";

const Footer = () => {
  const { address, email, phone, list1, list2, socialList } = footerData;
  return (
    <footer className="bg-[#6DE754] px-36">
      <div className="container mx-auto pt-14">
        <div className="flex flex-col xl:flex-row text-center xl:text-left gap-y-12">
          <div className="w-[45%] mx-auto flex flex-col items-center xl:items-start">
            <a href="">
              <img src={Logo} className="lead xl:max-w-[380px] mb-6 lg:mb-12" />
            </a>

            <div className="max-w-[260px] mb-5  font-bold">{address}</div>

            <div className="font-light italic">{email}</div>

            <div className="font-light italic">{phone}</div>
          </div>

          <div className="flex flex-1 flex-col gap-y-14 xl:flex-row justify-between mt-20">
            <div>
              <div className="font-extrabold mb-8">About</div>
              <ul className="flex flex-col gap-y-4">
                {list1.map((item, index) => {
                  return (
                    <li key={index}>
                      <a className="hover:text-teal-950" href={item.href}>
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <div className="font-extrabold  mb-8">Help</div>

              <ul className="flex flex-col gap-y-4 ">
                {list2.map((item, index) => {
                  return (
                    <li key={index}>
                      <a className="hover:text-teal-950" href={item.href}>
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <div className="font-extrabold mb-8">Social Media</div>
              <ul className="flex gap-y-4 gap-x-4 justify-center">
                {socialList.map((item, index) => {
                  return (
                    <li
                      className="w-12 h-12 bg-black flex justify-center items-center rounded-full cursor-pointer transition-all" key={index}
                    >
                      <a
                        className="text-white text-2xl  hover:text-white"
                        href={item.href}
                      >
                        {item.icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
