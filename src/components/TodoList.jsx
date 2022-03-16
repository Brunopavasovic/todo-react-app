import React from "react";
import { Task } from "./Task";
import { Loading } from "./Loading";
import { styled } from "@stitches/react";

export const TodoList = ({ todos, setTodos, removeItem, handleOnChange }) => {
  if (!todos) {
    return <Loading />;
  }

  return (
    <TaskWraprer>
      {todos.map((todo) => (
        <Task
          key={todo.id}
          id={todo.id}
          description={todo.description}
          title={todo.title}
          remove={() => removeItem(todo.id)}
          done={todo.done}
          change={handleOnChange}
          setTodos={setTodos}
          todos={todos}
        />
      ))}
    </TaskWraprer>
  );
};

const TaskWraprer = styled("div", {
  height: "auto",
  width: "100%",
});
