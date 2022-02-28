import { Container } from "./components/Container";
import { Button } from "./components/Button";
import { styled } from "./stitches.config";
import "./styles/App.css";
import { useState } from "react";
import { RenderTask } from "./components/RenderTask";
import { filterItems, uniqueId } from "./util";
import { Footer } from "./components/Footer";

const emptyInput = {
  title: "",
  task: "",
};

export default function App() {
  const [todos, setTodos] = useState([]);
  const [userInput, setUserInput] = useState(emptyInput);
  const [view, setView] = useState("all");

  const handleInput = (e) => {
    const value = e.target.value;

    setUserInput({
      ...userInput,
      [e.target.name]: value,
    });
  };

  const addTodo = (input) => {
    const newTodo = {
      id: uniqueId(),
      done: false,
      ...input,
    };
    setTodos([...todos, newTodo]);
  };

  const removeItem = (id) => {
    const remove = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(remove);
  };

  const handleOnChange = (todo) => {
    const withChanges = todos.map((item) => {
      if (item.id === todo.id) {
        return todo;
      }

      return item;
    });
    setTodos(withChanges);
  };

  const clearCompleted = () => {
    const cleared = todos.filter((todo) => !todo.done);
    setTodos(cleared);
  };

  const handleSubmit = (e) => {
    if (userInput.title === "" || userInput.task === "") {
      return false;
    }
    e.preventDefault();
    addTodo(userInput);
    setUserInput(emptyInput);
  };

  const visibleTodos = filterItems(todos, view);

  return (
    <PageWrapper>
      <TasksContainer>
        <Container>
          <h1>Todo Tasks</h1>
        </Container>
        <InputContainer>
          <label>ENTER TITLE:</label>
          <Inputs
            value={userInput.title}
            name="title"
            type="text"
            onChange={handleInput}
            placeholder="enter title"
          ></Inputs>
          <label>ENTER TODO:</label>
          <Inputs
            name="task"
            onChange={handleInput}
            value={userInput.task}
            type="text"
            placeholder="enter text"
          ></Inputs>
          <Button size="large" onClick={handleSubmit}>
            ADD TODO
          </Button>
        </InputContainer>
        {visibleTodos.map((todo) => (
          <RenderTask
            key={todo.id}
            id={todo.id}
            task={todo.task}
            title={todo.title}
            remove={() => removeItem(todo.id)}
            done={todo.done}
            change={handleOnChange}
          />
        ))}
        <Footer
          todos={todos}
          view={view}
          setView={setView}
          clearCompleted={clearCompleted}
        />
      </TasksContainer>
    </PageWrapper>
  );
}

const PageWrapper = styled("div", {
  minHeight: "100vh",
  Width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "$gray-200",
});

const TasksContainer = styled("div", {
  width: "200vw",
  maxWidth: "768px",
  minHeight: "500px",
  background: "$white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  color: "#000",
});

const InputContainer = styled("div", {
  width: "100%",
  maxWidth: "768px",
  minHeight: "170px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  borderBottom: "1px solid #E8E2CA ",
});

const inputOutline = {
  outline: "#7CB9E8 auto 1px",
};

const Inputs = styled("input", {
  width: "300px",
  height: "30px",
  borderRadius: "5px",
  outlineColor: "#7CB9E8",
  boxShadow: "-15px 16px 19px -16px rgba(0,0,0,0.2)",
  border: "1px solid #ccc",
  color: "$gray-700",
  "&:focus": inputOutline,
  "&:focus-visible": inputOutline,
});
