import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import AlertModal from "./AlertModal";
import "../CSS/AddTodo.css";
import addTaskImg from "../assets/addTask.png";

const AddTodo = ({ addTodo }) => {
  // For Model
  const [showModal, setShowModal] = useState(false);

  // Title-Description & First capital letter
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const titleHandleChange = (e) => {
    const capitalizedTitle = capitalizeFirstLetter(e.target.value);
    setTitle(capitalizedTitle);
  };
  const descHandleChange = (e) => {
    const capitalizedTitle = capitalizeFirstLetter(e.target.value);
    setDesc(capitalizedTitle);
  };
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // AddTask form Appearance
  const [isHoveredOnForm, setIsHoveredOnForm] = useState(false);
  const addTaskShowForm = () => {
    setTimeout(() => {
      setIsHoveredOnForm(true);
    }, 500);
  };

  const addTaskRemoveForm = () => {
    setTimeout(() => {
      setIsHoveredOnForm(false);
    }, 500);
  };

  // Button elements change on hover
  const [isHoveredOnButton, setIsHoveredOnButton] = useState(false);
  const mouseEnterButton = () => {
    setIsHoveredOnButton(true);
  };
  const mouseLeaveButtton = () => {
    setIsHoveredOnButton(false);
  };

  // On form submition
  const submit = (e) => {
    e.preventDefault();
    if (title) {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
      return;
    } else {
      setShowModal(true);
    }
  };
  return (
    <div className="container p-4 text-center">
      {showModal && (
        <AlertModal show={showModal} onHide={() => setShowModal(false)} />
      )}
      <Form
        className="m-auto addTaskForm"
        onSubmit={submit}
        onMouseEnter={addTaskShowForm}
        onMouseLeave={addTaskRemoveForm}
      >
        <h3 className="addTask">AddTask</h3>
        <FloatingLabel controlId="title" label="Todo Title!">
          <Form.Control
            type="text"
            value={title}
            onChange={titleHandleChange}
            className=" mb-3  inputText"
            placeholder="Todo Title!"
            style={{ height: "60px", fontSize: "large" }}
          />
        </FloatingLabel>
        {isHoveredOnForm && (
          <FloatingLabel controlId="desc" label="Todo Description (Optional)">
            <Form.Control
              type="text"
              value={desc}
              onChange={descHandleChange}
              placeholder="Description"
              className="mb-3 inputText"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        )}

        {isHoveredOnForm && (
          <button
            type="submit"
            className={`addTaskButton ${
              isHoveredOnForm
                ? "d-flex justify-content-evenly align-items-center m-auto"
                : ""
            }`}
            onMouseEnter={mouseEnterButton}
            onMouseLeave={mouseLeaveButtton}
          >
            {isHoveredOnButton && (
              <img src={addTaskImg} alt="search" width={30} />
            )}
            <span>Add Task</span>
          </button>
        )}
      </Form>
    </div>
  );
};
export default AddTodo;
