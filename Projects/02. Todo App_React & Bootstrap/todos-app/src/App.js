import Header from "./Components/Header";
import Todos from "./Mycomponents/Todos";
import AddTodo from "./Mycomponents/AddTodo";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);
  const [filterText, setFilterText] = useState("");

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
      todoTime: new Intl.DateTimeFormat(navigator.language, {
        hour: "numeric",
        minute: "numeric",
      }).format(new Date()),
      todoDate: new Intl.DateTimeFormat(navigator.language, {
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(new Date()),
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

  // Function for editing todo
  function onEdit(editTodo) {
    const updatedTodo = {
      ...editTodo,
      todoTime: new Intl.DateTimeFormat(navigator.language, {
        hour: "numeric",
        minute: "numeric",
      }).format(new Date()),
      todoDate: new Intl.DateTimeFormat(navigator.language, {
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(new Date()),
    };
    setTodos(todos.map((t) => (t.sno === editTodo.sno ? updatedTodo : t)));
  }

  // For checked task
  function onChecked(checkTodo) {
    const updatedTodo = {
      ...checkTodo,
    };
    setTodos(todos.map((t) => (t.sno === checkTodo.sno ? updatedTodo : t)));
  }
  // To store the date in string format in local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Header
        title="TaskTracker"
        filterText={filterText}
        onFilterTextChange={setFilterText}
      />
      <AddTodo addTodo={addTodo} />
      <Todos
        todos={todos}
        onDelete={onDelete}
        onEdit={onEdit}
        onChecked={onChecked}
      />
    </>
  );
}

export default App;
