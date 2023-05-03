import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import addTaskImg from "../assets/addTask.png";

const AddTodo = ({ addTodo }) => {
  // For Model
  const [showModal, setShowModal] = useState(false);

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
      // alert("Atleast Provide The Title!");
      return;
    } else {
      setShowModal(true);
    }
  };
  return (
    <div className="">
      {showModal && (
        <AlertModal show={showModal} onHide={() => setShowModal(false)} />
      )}
      <Form className="" onSubmit={submit} ref={ref}>
        <h3 className="">AddTask</h3>
        <FloatingLabel controlId="title" label="Todo Title!" className="">
          <Form.Control
            type="text"
            value={title}
            className=" mb-3  "
            placeholder="Todo Title!"
            style={{ height: "60px", fontSize: "large" }}
          />
        </FloatingLabel>

        <FloatingLabel controlId="desc" label="Todo Description (Optional)">
          <Form.Control
            type="text"
            value={desc}
            placeholder="Description"
            className="mb-3 inputText"
            style={{ height: "100px" }}
          />
        </FloatingLabel>

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
              <img src={addTaskImg} alt="search" width={30} className="" />
            )}
            <span className="">Add Task</span>
          </button>
        )}
      </Form>
    </div>
  );
};
export default AddTodo;
