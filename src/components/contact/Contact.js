import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useReducerContext } from "../../context/Context";

const Contact = () => {
  const { state, dispatch } = useReducerContext();
  return (
    <div
      className={`flex justify-between flex-col h-screen p-4 ${
        state.theme ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Header />
      <main className="m-36 border flex flex-col justify-center items-center">
        <h1 className="text-3xl mb-2">Contact Me</h1>
        <p>
          Created By :{" "}
          <span className="hover:underline cursor-pointer">
            Amanulla Iqbal Mulla
          </span>
        </p>
        <p>
          Phone No : <span>+91 9590397339</span>
        </p>
        <p>
          Email Id : <span>amanmulla167@gmail.com</span>
        </p>
        <p>
          Github Id :
          <a
            className="hover:underline cursor-pointer"
            href="https://github.com/Amanulla2022"
            target="_blank"
          >
            https://github.com/Amanulla2022
          </a>
        </p>
        <p>
          LinkedIn Id :{" "}
          <a
            className="hover:underline cursor-pointer"
            href="https://www.linkedin.com/in/amanulla-mulla-000678232/"
            target="_blank"
          >
            https://www.linkedin.com/in/amanulla-mulla-000678232/
          </a>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
