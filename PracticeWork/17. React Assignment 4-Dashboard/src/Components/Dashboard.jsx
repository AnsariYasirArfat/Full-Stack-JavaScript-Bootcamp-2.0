import { useContext } from "react";
import { ThemeContext } from "../App";
const Dashboard = () => {
  const { theme, toggleTheme, darkTheme, lightTheme } =
    useContext(ThemeContext);

  const handleThemeToggle = () => {
    toggleTheme();
  };
  return (
    <div
      className={`${
        theme === "dark" ? darkTheme : lightTheme
      } flex justify-between items-center p-12 h-1/4`}
    >
      <div>
        <h1 className="text-5xl font-bold ">Dashboard</h1>
      </div>
      <div
        className={` p-2 me-4 rounded-lg border-2 ${
          theme === "dark"
            ? "border-zinc-200  hover:bg-zinc-950"
            : "border-zinc-800  hover:bg-zinc-300"
        }`}
      >
        <button
          onClick={handleThemeToggle}
          className={`p-2 text-lg font-semibold flex justify-evenly items-center`}
        >
          {theme === "dark" ? (
            <img src="../sun.png" alt="light" width={30} className="me-2" />
          ) : (
            <img src="../moon.png" alt="dark" width={30} className="me-2" />
          )}
          {theme === "dark" ? "Light" : " Dark"} Theme
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
