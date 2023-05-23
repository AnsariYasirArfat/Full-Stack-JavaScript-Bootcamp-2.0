import React, { useState } from "react";

import {
  increment,
  decrement,
  incrementByValue,
  decrementByValue,
  reset,
} from "./features/counter/counterSlice";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const [Input, setInput] = useState("");
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="bg-zinc-900 text-zinc-100 flex justify-center items-center flex-col min-h-screen gap-6">
      <span className="text-9xl">{count}</span>
      <div className="space-x-6">
        <button
          onClick={() => dispatch(increment())}
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Increment by 1
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Decrement by 1
        </button>
      </div>

      <div className="space-x-3">
        <input
          type="number"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a number..."
          value={Input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <button
          onClick={() => dispatch(incrementByValue(+Input1))}
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Increment by Value
        </button>
      </div>
      <div className="space-x-3">
        <button
          onClick={() => dispatch(decrementByValue(+Input2))}
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Decrement by Value
        </button>
        <input
          type="number"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a number..."
          value={Input2}
          onChange={(e) => setInput2(e.target.value)}
        />
      </div>
      <button
        onClick={() => dispatch(reset())}
        className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
      >
        Reset
      </button>
    </div>
  );
}

export default App;
