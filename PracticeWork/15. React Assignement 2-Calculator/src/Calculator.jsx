import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");

  const handleClick = (value) => {
    if (display === "0") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const handleClear = () => {
    const newDisplay = display.slice(0, -1);
    setDisplay(newDisplay.length > 0 ? newDisplay : "0");
  };

  const handleAllClear = () => {
    setDisplay("0");
  };

  const handleCalculate = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  return (
    <div className="container mx-auto w-80 sm:w-3/5 md:w-1/2  p-4 bg-teal-100 rounded-lg hover:shadow-xl hover:shadow-teal-900 hover:bg-teal-50">
      <h1 className="text-3xl font-bold p-2  text-teal-900 ">Calculator</h1>
      <div className=" p-2 text-xl md:text-2xl lg:text-4xl font-bold mb-4 bg-teal-300 hover:bg-teal-200 text-teal-900  border-2 rounded-lg truncate hover:text-clip">
        {display}
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button
          className="col-span-2 bg-teal-900 hover:bg-teal-800 text-white text-xl py-2 rounded-lg "
          onClick={handleAllClear}
        >
          AC
        </button>
        <button
          className="bg-teal-700 hover:bg-teal-600 text-white text-xl py-2 rounded-lg"
          onClick={handleClear}
        >
          <img
            width="40"
            src="https://img.icons8.com/plasticine/100/000000/long-arrow-left.png"
            alt="Go back"
            className="m-auto"
          />
        </button>
        <button
          className=" bg-teal-600 hover:bg-teal-500 text-white text-3xl font-semibold py-2 rounded-lg"
          onClick={() => handleClick("/")}
        >
          ÷
        </button>
        <button
          className="bg-teal-300 hover:bg-teal-400 text-gray-800 text-xl font-bold py-2 rounded-lg"
          onClick={() => handleClick("7")}
        >
          7
        </button>
        <button
          className="bg-teal-300 hover:bg-teal-400 text-gray-800 text-xl font-bold py-2 rounded-lg"
          onClick={() => handleClick("8")}
        >
          8
        </button>
        <button
          className="bg-teal-300 hover:bg-teal-400 text-gray-800 text-xl font-bold py-2 rounded-lg"
          onClick={() => handleClick("9")}
        >
          9
        </button>
        <button
          className="bg-teal-600 hover:bg-teal-500 text-white text-3xl font-semibold py-2 rounded-lg"
          onClick={() => handleClick("*")}
        >
          ×
        </button>
        <button
          className="bg-teal-300 hover:bg-teal-400 text-gray-800 text-xl font-bold py-2 rounded-lg"
          onClick={() => handleClick("4")}
        >
          4
        </button>
        <button
          className="bg-teal-300 hover:bg-teal-400 text-gray-800 text-xl font-bold py-2 rounded-lg"
          onClick={() => handleClick("5")}
        >
          5
        </button>
        <button
          className="bg-teal-300 hover:bg-teal-400 text-gray-800 text-xl font-bold py-2 rounded-lg"
          onClick={() => handleClick("6")}
        >
          6
        </button>
        <button
          className="bg-teal-600 hover:bg-teal-500 text-white text-3xl font-semibold py-2 rounded-lg"
          onClick={() => handleClick("-")}
        >
          -
        </button>
        <button
          className="bg-teal-300 hover:bg-teal-400 text-gray-800 text-xl font-bold py-2 rounded-lg"
          onClick={() => handleClick("1")}
        >
          1
        </button>
        <button
          className="bg-teal-300 hover:bg-teal-400 text-gray-800 text-xl font-bold py-2 rounded-lg"
          onClick={() => handleClick("2")}
        >
          2
        </button>
        <button
          className="bg-teal-300 hover:bg-teal-400 text-gray-800 text-xl font-bold py-2 rounded-lg"
          onClick={() => handleClick("3")}
        >
          3
        </button>
        <button
          className="bg-teal-600 hover:bg-teal-500 text-white text-3xl font-semibold py-2 rounded-lg"
          onClick={() => handleClick("+")}
        >
          +
        </button>
        <button
          className="col-span-2 bg-teal-300 hover:bg-teal-400 text-gray-800 text-xl font-bold py-2 rounded-lg"
          onClick={() => handleClick("0")}
        >
          0
        </button>
        <button
          className="bg-teal-300 hover:bg-teal-400 text-gray-800 text-xl font-semibold py-2 rounded-lg"
          onClick={() => handleClick(".")}
        >
          .
        </button>
        <button
          className=" bg-teal-600 hover:bg-teal-500 text-white text-3xl py-2 rounded-lg"
          onClick={handleCalculate}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
