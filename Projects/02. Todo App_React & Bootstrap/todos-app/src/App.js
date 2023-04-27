import Header from "./Mycomponents/Header";

function App() {
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
