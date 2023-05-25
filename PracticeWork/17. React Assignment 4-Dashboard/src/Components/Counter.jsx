import { useState, useContext } from "react";
import { ThemeContext } from "../App";
function Counter() {
  const { theme, darkTheme, lightTheme } = useContext(ThemeContext);
  const [count, setCount] = useState(0);
  return (
    <>
      <div className={`${theme === "dark" ? darkTheme : lightTheme} h-3/4 `}>
        <h1 className="text-5xl font-bold text-center p-4">Counter</h1>
        <div className={`flex justify-center items-center  `}>
          <button
            className={`text-5xl font-bold rounded-lg border-2 pb-3 px-4 ${
              theme === "dark"
                ? "border-zinc-200  hover:bg-zinc-950"
                : "border-zinc-800  hover:bg-zinc-300"
            }`}
            onClick={() => setCount((count) => count + 1)}
          >
            +
          </button>
          <p className="text-9xl font-bold mx-4 w-48 text-center"> {count}</p>
          <button
            className={`rounded-lg border-2 text-5xl font-bold pb-3 px-4 ${
              theme === "dark"
                ? "border-zinc-200  hover:bg-zinc-950"
                : "border-zinc-800  hover:bg-zinc-300"
            }`}
            onClick={() => setCount((count) => count - 1)}
          >
            -
          </button>
        </div>
        <div
          className={`rounded-lg border-2 mt-10 mx-auto w-fit ${
            theme === "dark"
              ? "border-zinc-200  hover:bg-zinc-950"
              : "border-zinc-800  hover:bg-zinc-300"
          }`}
        >
          <button
            className="text-xl font-bold py-3 px-5"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
