import React, { useState } from "react";

const Todoitem = ({ todo }) => {
  return (
    <>
      <div>
        <h3>{todo.title}</h3>
        <p>{todo.desc}</p>
        <button className="btn ">
          <img
            src="https://img.icons8.com/plasticine/100/null/filled-trash.png"
            alt="Delete"
          />
        </button>
        <hr />
      </div>
    </>
  );
};

export default Todoitem;
