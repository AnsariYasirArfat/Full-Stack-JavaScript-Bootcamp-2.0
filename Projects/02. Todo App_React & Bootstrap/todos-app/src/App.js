import Header from "./Mycomponents/Header";
import { useState } from "react";

function App() {
  const [filterText, setFilterText] = useState("");

  return (
    <>
      <Header
        title="TaskTracker"
        filterText={filterText}
        onFilterTextChange={setFilterText}
      />
    </>
  );
}

export default App;
