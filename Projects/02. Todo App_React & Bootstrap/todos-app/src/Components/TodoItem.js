import React, { useState } from "react";

const Todoitem = ({ todo, onDelete, onEdit, onChecked }) => {
  return (
    <>
      <div>
        <div>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={(e) => {
              onChecked({
                ...todo,
                done: e.target.checked,
              });
              checkedBox();
            }}
          />
          <h5>{todo.title}</h5>
        </div>
        <div>
          <p>{todo.desc}</p>
          <small>{todo.todoDate + " at " + todo.todoTime}</small>
        </div>
        <div>
          {!DescriptionState && (
            <div>
              <small>{todo.todoDate + " at " + todo.todoTime}</small>
            </div>
          )}
          <div>
            {todo.done === false && (
              <button onClick={() => setEditing(true)}>
                <img
                  src="https://img.icons8.com/3d-fluency/94/null/edit.png"
                  alt="Edit"
                  width={30}
                />
              </button>
            )}
            <button onClick={() => onDelete(todo)}>
              <img
                src="https://img.icons8.com/plasticine/100/null/filled-trash.png"
                alt="Delete"
                width={30}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todoitem;
