import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Collapse from "react-bootstrap/Collapse";

const Todoitem = ({
  todo,
  onDelete,
  onEdit,
  onChecked,
  DescriptionState,
  HoveredOnBox,
}) => {
  const [editing, setEditing] = useState(false);
  let todoItem;
  const MouseEnterBox = () => {
    HoveredOnBox(true);
  };

  const MouseLeaveBox = () => {
    HoveredOnBox(false);
  };

  const onSave = () => {
    setEditing(false);
    toast.info("Task Updated!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  // Alert after completing task
  const checkedBox = () => {
    if (todo.done === false) {
      toast("Task Completed!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast("Task Reassigned!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  if (editing) {
    todoItem = (
      <>
        <div onMouseUp={MouseEnterBox} onMouseDown={MouseLeaveBox}>
          <div>
            <h5 style={{ color: "#0d6caf" }}>Edit Your Task:</h5>
            <button onClick={() => onSave()}>
              <img
                src="https://img.icons8.com/3d-fluency/94/null/save.png"
                alt="Save"
                width={30}
              />
              Save!
            </button>
          </div>
          <div>
            <input
              maxlength="50"
              required
              value={todo.title}
              placeholder="No Title"
              onChange={(e) => {
                onEdit({
                  ...todo,
                  title: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <textarea
              value={todo.desc}
              placeholder="No Description"
              onChange={(e) => {
                onEdit({
                  ...todo,
                  desc: e.target.value,
                });
              }}
            ></textarea>
          </div>
        </div>
      </>
    );
  } else {
    todoItem = (
      <>
        <div onMouseEnter={MouseEnterBox} onMouseLeave={MouseLeaveBox}>
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
          <Collapse in={DescriptionState}>
            <div>
              <p>{todo.desc}</p>
              <small>{todo.todoDate + " at " + todo.todoTime}</small>
            </div>
          </Collapse>
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
  }
  return (
    <>
      <div className="p-0 ">{todoItem}</div>
    </>
  );
};

export default Todoitem;
