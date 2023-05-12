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
        <div
          onMouseUp={MouseEnterBox}
          onMouseDown={MouseLeaveBox}
          className="m-4 editBox taskBox taskBoxHeight uncheckedTaskBox "
        >
          <div className=" mx-4 d-flex justify-content-between align-items-center">
            <h5 className="m-0 saveHeading" style={{ color: "#0d6caf" }}>
              Edit Your Task:
            </h5>
            <button
              onClick={() => onSave()}
              className="btn btn-sm editDeleteButton my-1"
            >
              <img
                src="https://img.icons8.com/3d-fluency/94/null/save.png"
                alt="Save"
                width={30}
                className=""
              />
              Save!
            </button>
          </div>
          <div className="p-1 mx-4 mb-1 editTitleInput">
            <input
              maxlength="50"
              className={` p-2 mb-0 h5`}
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
          <div className="editDescSection mx-4 p-1">
            <textarea
              // rows="4"
              className={`editDescInput p-1`}
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
        <div
          onMouseEnter={MouseEnterBox}
          onMouseLeave={MouseLeaveBox}
          className={`m-4 taskBox d-flex flex-column justify-content-between${
            todo.done === true ? " checkedTaskBox " : " uncheckedTaskBox"
          }  ${DescriptionState && "taskBoxHeight"} `}
        >
          <div className="d-flex align-items-center p-3 taskTitleSection ">
            <input
              className="me-3"
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
            <h5
              className={`m-0 taskTitle  ${
                todo.done === true && "taskChecked"
              } `}
            >
              {todo.title}
            </h5>
          </div>
          <Collapse in={DescriptionState}>
            <div
              className="taskDescSection mx-4 p-2"
              id="example-collapse-text"
            >
              <p className={`taskDesc  ${todo.done === true && "taskChecked"}`}>
                {todo.desc}
              </p>
              <small className="dateTime float-end">
                {todo.todoDate + " at " + todo.todoTime}
              </small>
            </div>
          </Collapse>
          <div className="mb-2">
            {!DescriptionState && (
              <div className="float-end mt-3 me-4">
                <small className="dateTime">
                  {todo.todoDate + " at " + todo.todoTime}
                </small>
              </div>
            )}
            <div className="float-start ms-4">
              {todo.done === false && (
                <button
                  onClick={() => setEditing(true)}
                  className="btn editDeleteButton btn-sm me-2"
                >
                  <img
                    src="https://img.icons8.com/3d-fluency/94/null/edit.png"
                    alt="Edit"
                    width={30}
                  />
                </button>
              )}
              <button
                className="btn editDeleteButton  btn-sm"
                onClick={() => onDelete(todo)}
              >
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
