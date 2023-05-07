import Header from "./Components/Header";
import Todos from "./Mycomponents/Todos";
import AddTodo from "./Mycomponents/AddTodo";

import { useState } from "react";

function App() {
  const [filterText, setFilterText] = useState("");
  const [todos, setTodos] = useState([
    { todo: "first task todo", sno: 1, desc: "imp task need to be done quick" },
  ]);

  // Function for adding todo
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno,
      title,
      desc,
      done: false,
    };
    setTodos([...todos, myTodo]);
  };

  // Function for deleting todo
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  // For checked task
  function onChecked(checkTodo) {
    const updatedTodo = {
      ...checkTodo,
    };
    setTodos(todos.map((t) => (t.sno === checkTodo.sno ? updatedTodo : t)));
  }
  return (
    <>
      <Header
        title="TaskTracker"
        filterText={filterText}
        onFilterTextChange={setFilterText}
      />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} onChecked={onChecked} />
    </>
  );
}

export default App;
