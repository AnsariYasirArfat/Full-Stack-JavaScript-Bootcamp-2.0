import React from "react";

const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
  };

  return (
    <div className="container my-3" style={myStyle}>
      <h3 className=" m-3">Todos list</h3>
      <div>
        <p>Totol task Remain {props.todos.length}</p>
        {props.todos.length === 0
          ? " No todos Here"
          : remainTask.map((todo) => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                  onEdit={props.onEdit}
                  onChecked={props.onChecked}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Todos;
