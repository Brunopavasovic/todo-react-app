import React from "react";
import { styled } from "../stitches.config";
import { Edit } from "./Edit";
import { Portal } from "react-portal";
import { useState } from "react";
import { updateTodo } from "../api";

export const Task = ({ remove, change, setTodos, todos, ...todo }) => {
  const toggleDone = (ev) => {
    change({ ...todo, done: ev.target.checked });
  };
  const [editing, setEditing] = useState(false);
  const [newItem, setNewItem] = useState({});

  const toggleComp = () => {
    setEditing(!editing);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    handleUpdateTodo(todo.id, newItem);
    toggleComp();
  };

  const handleUpdateTodo = async (id, newTodo) => {
    const update = todos.map((item) => {
      return item.id === id ? { ...item, ...newTodo } : item;
    });

    setTodos(update);
  };

  return (
    <Dl>
      <ImageButton onClick={remove}>
        {" "}
        <img src="./cancel.png" alt="cancel" title="Delete Item" />
      </ImageButton>
      <EditButton onClick={toggleComp} type="button" title="Rename your task">
        Edit
      </EditButton>
      <Checkbox
        type="checkbox"
        onChange={toggleDone}
        checked={todo.done}
        title={todo.title}
      ></Checkbox>
      <dt>{todo.title}</dt>
      <dd>{todo.description}</dd>
      <Portal>
        {editing && (
          <Edit
            handleClose={toggleComp}
            onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
            value={newItem.title ?? ""}
            rename={handleEditSubmit}
          />
        )}
      </Portal>
    </Dl>
  );
};

const Dl = styled("dl", {
  textAlign: "center",
  fontSize: "20px",
  marginTop: "20px",
  padding: "10px",
  borderBottom: "1px solid #E8E2CA ",
  position: "absoulte",
});

const Checkbox = styled("input", {
  position: "relative",
  left: "170px",
  top: "25px",
});

const ImageButton = styled("button", {
  border: "transparent",
  background: "transparent",
  position: "relative",
  left: "290px",
  top: "$6",
  cursor: "pointer",
});

const EditButton = styled("button", {
  width: "auto",
  border: "1px solid $gray-500",
  color: "$gray-800",
  backgroundColor: "#E8E2CA",
  padding: "$1 $2",
  borderRadius: "$lg",
  position: "relative",
  left: "300px",
  top: "$6",

  "&:hover": {
    backgroundColor: "#d69e2e",
  },
});
