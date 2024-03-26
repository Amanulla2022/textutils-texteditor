import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { useReducerContext } from "../../context/Context";

const Footer = () => {
  const { state, dispatch } = useReducerContext();
  return (
    <footer
      className={`flex justify-between items-center flex-col p-4 ${
        state.theme ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      Copyright@2024 | All Rights Reserved | by Amanulla Iqbal Mulla
      <div className="flex gap-4 mt-4">
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
