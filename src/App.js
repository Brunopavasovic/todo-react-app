import { Container } from "./components/Container";
import { styled } from "./stitches.config";
import "./styles/App.css";
import { useState, useEffect } from "react";
import { filterItems } from "./util";
import { Form } from "./components/Form";
import { getTodos, createTodo, removeTodo } from "./api";
import { TodoList } from "./components/TodoList";
import { Footer } from "./components/Footer";
import { Loading } from "./components/Loading";

export default function App() {
  const [todos, setTodos] = useState(null);
  const [view, setView] = useState("all");

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  console.log(todos);

  const clearCompleted = () => {
    const cleared = todos.filter((todo) => !todo.done);
    setTodos(cleared);
  };
  const removeItem = async (id) => {
    await removeTodo(id);
    const remove = todos.filter((todo) => todo.id !== id);
    setTodos(remove);
  };

  const addTodo = (input) => {
    createTodo(input).then((res) => setTodos((prevVal) => [...prevVal, res]));
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

  const visibleTodos = todos !== null ? filterItems(todos, view) : null;

  return (
    <PageWrapper>
      <TasksContainer>
        <Container>
          <h1>Todo Tasks</h1>
        </Container>
        <Form setTodos={setTodos} todos={todos} addTodo={addTodo} />
        {visibleTodos ? (
          <>
            <TodoList
              setView={setView}
              todos={todos}
              removeItem={removeItem}
              handleOnChange={handleOnChange}
            />

            <Footer
              todos={todos}
              view={view}
              setView={setView}
              clearCompleted={clearCompleted}
            />
          </>
        ) : (
          <Loading />
        )}
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
