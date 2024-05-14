import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa6";
import Logo from "./assets/imgs/logo.png";
import { BsChatDotsFill } from "react-icons/bs";

export const navData = [
  {
    name: "Ride",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Features",
    href: "#",
  },
];

export const jobData = {
  title: "Spend less time looking for work",
  subtitle: "We'll help you through the hardest part of your job search.",
  list: [
    {
      title: "Web Developer",
      company: "Tech Comp",
      price: "R$ 4000,00"
    },
    {
      title: "PHP Developer",
      company: "New Tech Recruiter",
      price: "R$ 6000,00"
    },
    {
      title: "ReactJS Programmer",
      company: "Dev Hub",
      price: "R$ 3200,00"
    }

  ]
}

export const footerData = {
  logo: Logo,
  address:
      "Road Bitonia Salustino, n°13, Currais Novos, Rio Grande do Norte/RN",
  email: "infopostjob@gmail.project",
  phone: "+55 (084) 92222-2222",
  list1: [
      {
          name: "Profile",
          href: "#",
      },
      {
          name: "Features",
          href: "#",
      },
      {
          name: "Careers",
          href: "#",
      },
      {
          name: "DW News",
          href: "#",
      },
  ],
  list2: [
      {
          name: "Support",
          href: "#",
      },
      {
          name: "Sign Up",
          href: "#",
      },
      {
          name: "Guide",
          href: "#",
      },
      {
          name: "Reports",
          href: "#",
      },
      {
          name: "Q & A",
          href: "#",
      },
  ],
  socialList: [
      {
          icon: <FaYoutube />,
          href: "#",
      },
      {
          icon: <FaInstagram />,
          href: "#",
      },
      {
          icon: <FaGithub />,
          href: "#",
      },
  ],
};

export const copyrightData = {
  text: "© 2023 PostJob Technologies Inc. All rights reserved.",
  icon: <BsChatDotsFill />,
};
