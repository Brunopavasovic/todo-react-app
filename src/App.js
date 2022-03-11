import { Container } from "./components/Container";
import { styled } from "./stitches.config";
import "./styles/App.css";
import { useState } from "react";
import { Task } from "./components/Task";
import { filterItems, uniqueId } from "./util";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [view, setView] = useState("all");

  

  const removeItem = (id) => {
    const remove = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(remove);
  };

  const addTodo = (input) => {
    const newTodo = {
      id: uniqueId(),
      done: false,
      ...input,
    };
    setTodos([...todos, newTodo]);
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

  const visibleTodos = filterItems(todos, view);

  return (
    <PageWrapper>
      <TasksContainer>
        <Container>
          <h1>Todo Tasks</h1>
        </Container>
        <Form addTodo={addTodo} />
        {visibleTodos.map((todo) => (
          <Task
            key={todo.id}
            id={todo.id}
            task={todo.task}
            title={todo.title}
            remove={() => removeItem(todo.id)}
            done={todo.done}
            change={handleOnChange}
            setTodos={setTodos}
            todos={todos}
          
            
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
