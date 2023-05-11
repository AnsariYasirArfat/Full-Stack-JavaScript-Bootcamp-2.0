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
    <div style={myStyle}>
      <h3>TaskDashBoardt</h3>
      {/* Description radio switch */}
      <div>
        <h6>Description:</h6>
        <div>
          <label>
            <input
              type="radio"
              value="show"
              checked={open}
              onChange={() => setOpen(true)}
              aria-controls="example-collapse-text"
              aria-checked={open}
            />
            <span></span>
            Show
          </label>
          <label>
            <input
              type="radio"
              value="hide"
              checked={!open}
              onChange={() => setOpen(false)}
              aria-controls="example-collapse-text"
              aria-checked={!open}
            />
            <span></span>
            Hide
          </label>
        </div>
      </div>

      <div>
        {/* Remaining tasks Section  */}
        <div>
          <p>
            Tasks Remaining: <span> {remainTask.length}</span>
          </p>
          <div>
            {remainTask.length === 0 ? (
              <h5>No Remaining task here!</h5>
            ) : (
              remainTask.map((todo) => {
                return (
                  <TodoItem
                    todo={todo}
                    key={todo.sno}
                    onDelete={props.onDelete}
                    onEdit={props.onEdit}
                    onChecked={props.onChecked}
                    DescriptionState={open}
                    HoveredOnBox={setIsHoveredOnBox}
                  />
                );
              })
            )}
          </div>
        </div>
        {/* Completed tasks Section */}
        <div>
          <p>
            Finished Tasks:
            <span> {completedTask.length}</span>
          </p>
          <div>
            {completedTask.length === 0 ? (
              <h5>No Completed task here!</h5>
            ) : (
              completedTask.map((todo) => {
                return (
                  <TodoItem
                    todo={todo}
                    key={todo.sno}
                    onDelete={props.onDelete}
                    onEdit={props.onEdit}
                    onChecked={props.onChecked}
                    DescriptionState={open}
                    HoveredOnBox={setIsHoveredOnBox}
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
