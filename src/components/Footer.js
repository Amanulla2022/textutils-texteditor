import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" flex justify-center flex-col items-center text-white font-semibold py-4 my-4 bg-black">
      Copyright@2024 | All Rights Reserved | by Amanulla Iqbal Mulla
      <div className="flex ">
        <a
          href="https://github.com/Amanulla2022"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-3xl hover:bg-white hover:text-black" />
        </a>
        <a
          href="https://www.linkedin.com/in/amanulla-mulla-000678232/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-3xl  hover:bg-white hover:text-black" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
