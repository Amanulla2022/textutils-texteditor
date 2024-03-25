import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

const About = () => {
  const [showDesc, setShowDesc] = useState(0);
  const aboutData = [
    {
      title: "Analyse Your text",
      desc: "Textutils gives you a way to analyze your text quickly and efficently.It let you to count word, count charecters or reading time required.It has both light and dark mode for better compartable.",
    },
    {
      title: "Free To Use",
      desc: "TextUtils is a free charecter counter tool that provided instant charecter count and word count statics for a given text. TextUtils reports the number of words and charecter. Thus it is suitable for writing text with word / charecter limit.",
    },
    {
      title: "Browser Compatible",
      desc: "This word counter software works in any web browser such as Chrome , Firefox ,Internet Explorer ,Safari,Opera etc.",
    },
  ];

  const toggleDesc = (index) => {
    setShowDesc(showDesc === index ? -1 : index); // Toggle description visibility
  };
  return (
    <div>
      <Header />
      <main className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold">About App</h1>
        <div className="flex md:flex-col">
          {aboutData.map((details, index) => {
            return (
              <div className="border m-4 ">
                <div className="flex justify-between  mx-4">
                  <p>{details.title}</p>
                  {showDesc === index ? (
                    <IoIosArrowDropupCircle
                      onClick={() => toggleDesc(index)}
                      className="text-lg cursor-pointer"
                    />
                  ) : (
                    <IoIosArrowDropdownCircle
                      onClick={() => toggleDesc(index)}
                      className="text-lg cursor-pointer"
                    />
                  )}
                </div>
                {showDesc === index && (
                  <p className="font-semibold min-w-full mx-4">
                    {details.desc}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
