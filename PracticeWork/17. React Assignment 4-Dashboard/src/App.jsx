import { createContext, useState } from "react";
import PropTypes from "prop-types";
import Counter from "./Components/Counter";
import Dashboard from "./Components/Dashboard";
// Create the context
const ThemeContext = createContext();
function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const darkTheme = "bg-zinc-800 text-zinc-200";
  const lightTheme = "bg-zinc-200 text-zinc-800";
  return (
    <>
      <ThemeContext.Provider
        value={{ theme, toggleTheme, darkTheme, lightTheme }}
      >
        <div style={{ height: "100vh", boxSizing: "border-box" }}>
          <Dashboard />
          <Counter />
        </div>
      </ThemeContext.Provider>
    </>
  );
}
App.propTypes = {
  children: PropTypes.node,
};
export default App;
export { ThemeContext };
