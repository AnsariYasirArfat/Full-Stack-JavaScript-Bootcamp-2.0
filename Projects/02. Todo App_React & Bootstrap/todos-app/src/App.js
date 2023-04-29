import Header from "./Components/Header";
import Todos from "./Mycomponents/Todos";

import { useState } from "react";

function App() {
  const [filterText, setFilterText] = useState("");
  const [todos, setTodos] = useState([
    { todo: "first task todo", sno: 1, desc: "imp task need to be done quick" },
  ]);

  return (
    <>
      <Header
        title="TaskTracker"
        filterText={filterText}
        onFilterTextChange={setFilterText}
      />
      <Todos todos={todos} />
    </>
  );
}

export default App;
