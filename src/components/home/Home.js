import React from "react";
import Button from "./Button";
import { useReducerContext } from "../../context/Context";
import Header from "../common/Header";
import Footer from "../common/Footer";

const Home = () => {
  const { state, dispatch } = useReducerContext();

  return (
    <div
      className={`flex justify-between flex-col p-4 ${
        state.theme ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Header />
      <main className="w-full h-full py-12 px-4 flex justify-center">
        <div className="w-full max-w-2xl flex flex-col text-primary-text">
          <h1 className="text-center mb-8 text-2xl md:text-3xl">
            TextUtils - Word Counter, Character Counter, Remove Extra Space,
          </h1>
          <a
            href=" https://www.linkedin.com/in/amanulla-mulla-000678232/"
            target="_blank"
            className="text-center cursor-pointer text-xl underline mb-8 text-purple-500"
          >
            Created by Amanulla
          </a>
          <h2 className="mb-4">Enter Text Here :</h2>
          <textarea
            placeholder="Enter Text Here..."
            className="w-full border h-24 resize-y mb-4 py-2 px-3 rounded-lg text-lg outline-none"
            value={state.text}
            onChange={(e) =>
              dispatch({ type: "update", payload: e.target.value })
            }
          ></textarea>
          <div className="flex flex-wrap gap-4 justify-around items-center mb-6">
            <Button
              className="bg-blue-600 cursor-pointer p-2 rounded"
              title="Convert Uppercase"
              onClick={() => dispatch({ type: "upper" })}
              text={state.text}
            />
            <Button
              className="bg-blue-600 cursor-pointer p-2 rounded"
              title="Convert Lowercase"
              onClick={() => dispatch({ type: "lower" })}
              text={state.text}
            />
            <Button
              className="bg-red-400 cursor-pointer p-2 rounded"
              title="Clear Text"
              onClick={() => dispatch({ type: "clear" })}
              text={state.text}
            />
            <Button
              className="bg-green-600 cursor-pointer p-2 rounded"
              title="Copy To Clipboard"
              onClick={() => dispatch({ type: "copy" })}
              text={state.text}
            />
            <Button
              className="bg-blue-600 cursor-pointer p-2 rounded"
              title=" Remove Extra Spaces"
              onClick={() => dispatch({ type: "extraSpace" })}
              text={state.text}
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl">Summary Of Your Text</h2>
            <p>
              Number of words:
              {state.text.split(/\s+/).filter((word) => word !== "").length}
            </p>
            <p>Number of characters: {state.text.length}</p>
            <p>
              Reading Time:{" "}
              {(
                0.008 *
                state.text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length
              ).toFixed(3)}{" "}
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-xl text-center">Preview Document</h2>
            <textarea
              className="h-40 w-full bg-gray-300 outline-none border-none cursor-not-allowed"
              value={state.text}
              readOnly
            ></textarea>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Home;
