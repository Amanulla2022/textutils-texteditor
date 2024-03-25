import React from "react";
import Button from "./Button";
import { useReducerContext } from "../context/Context";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  const { state, dispatch } = useReducerContext();

  return (
    <>
      <Header />
      <main className="w-full h-full py-12 px-4 flex justify-center">
        <div className="w-full max-w-2xl flex flex-col text-primary-text">
          <h1 className="text-center mb-8 text-2xl md:text-3xl">
            TextUtils - Word Counter, Character Counter, Remove Extra Space
          </h1>
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
              className="bg-blue-600"
              title="Convert Uppercase"
              onClick={() => dispatch({ type: "upper" })}
              text={state.text}
            />
            <Button
              className="bg-blue-600"
              title="Convert Lowercase"
              onClick={() => dispatch({ type: "lower" })}
              text={state.text}
            />
            <Button
              className="bg-blue-600"
              title=" Remove Extra Spaces"
              onClick={() => dispatch({ type: "extraSpace" })}
              text={state.text}
            />
            <Button
              className="bg-green-600"
              title="Copy To Clipboard"
              onClick={() => dispatch({ type: "copy" })}
              text={state.text}
            />
            <Button
              className="bg-red-400"
              title="Clear Text"
              onClick={() => dispatch({ type: "clear" })}
              text={state.text}
            />
          </div>
          <div>
            <h2>Summary Of Your Text</h2>
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
              Minutes
            </p>
          </div>
          <div>
            <h2 className="mb-4">Preview Document</h2>
            <textarea
              className="h-40 w-full bg-gray-300 outline-none border-none cursor-not-allowed"
              value={state.text}
              readOnly
            ></textarea>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Home;
