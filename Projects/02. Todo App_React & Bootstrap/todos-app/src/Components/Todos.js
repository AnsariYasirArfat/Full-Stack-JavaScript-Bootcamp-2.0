import { useState } from "react";
import TodoItem from "./TodoItem";

const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
  };
  const [open, setOpen] = useState(true);
  const [isHoveredOnBox, setIsHoveredOnBox] = useState(false);

  // {----------------Search Task (USING filter METHOD)----------------}
  let remainTask = props.todos.filter((todo) => !todo.done);
  let completedTask = props.todos.filter((todo) => todo.done);

  if (props.filterText) {
    remainTask = remainTask.filter(
      (todo) =>
        todo.title.toLowerCase().indexOf(props.filterText.toLowerCase()) !== -1
    );
    completedTask = completedTask.filter(
      (todo) =>
        todo.title.toLowerCase().indexOf(props.filterText.toLowerCase()) !== -1
    );
  }

  return (
    <div className="mx-4 mt-4 " style={myStyle}>
      <h3 className="text-center taskList ">TaskDashBoard</h3>
      <div className="m-5 d-flex align-items-center justify-content-center">
        <h6 className="mb-0 descripStatus me-3">Description:</h6>
        <div className="descripStatusBox px-2 pb-1">
          <label className="me-3  radio-label">
            <input
              type="radio"
              value="show"
              checked={open}
              onChange={() => setOpen(true)}
              aria-controls="example-collapse-text"
              aria-checked={open}
            />
            <span className="radio-custom me-2"></span>
            Show
          </label>
          <label className="radio-label">
            <input
              type="radio"
              value="hide"
              checked={!open}
              onChange={() => setOpen(false)}
              aria-controls="example-collapse-text"
              aria-checked={!open}
            />
            <span className="radio-custom me-2"></span>
            Hide
          </label>
        </div>
      </div>
      <div className={`row ${isHoveredOnBox && "blur"}`}>
        {/* Remaining tasks Section  */}
        <div className="col-xl-8 d-flex flex-column my-4">
          <p className="subHeading fw-bold text-center ">
            Tasks Remaining: <span className="count"> {remainTask.length}</span>
          </p>
          <div className={`row row-cols-md-2 overflow-auto remainingSection `}>
            {remainTask.length === 0 ? (
              <h5 className="text-center emptyTask">No Remaining task here!</h5>
            ) : (
              remainTask.map((todo) => {
                return (
                  <TodoItem
                    todo={todo}
                    key={todo.sno}
                    onDelete={props.onDelete}
                    onEdit={props.onEdit}
                    onChecked={props.onChecked}
                    HoveredOnBox={setIsHoveredOnBox}
                    DescriptionState={open}
                  />
                );
              })
            )}
          </div>
        </div>
        {/* Completed tasks Section */}
        <div className="col-xl-4 d-flex flex-column my-4">
          <p className="subHeading fw-bold text-center ">
            Finished Tasks:
            <span className="count"> {completedTask.length}</span>
          </p>
          <div
            className={`row  row-cols-md-2 row-cols-xl-1  overflow-auto completedTasks`}
          >
            {completedTask.length === 0 ? (
              <h5 className="text-center emptyTask">No Completed task here!</h5>
            ) : (
              completedTask.map((todo) => {
                return (
                  <TodoItem
                    todo={todo}
                    key={todo.sno}
                    onDelete={props.onDelete}
                    onEdit={props.onEdit}
                    onChecked={props.onChecked}
                    HoveredOnBox={setIsHoveredOnBox}
                    DescriptionState={open}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
