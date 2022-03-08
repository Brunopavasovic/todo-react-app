import React from "react";
import { styled } from "../stitches.config";
import { Edit } from "./Edit";
import { Portal } from "react-portal";
import { useState } from "react";

export const Task = ({
  remove,
  change,
  edit,
  ...todo
}) => {
  const toggleDone = (ev) => {
    change({ ...todo, done: ev.target.checked });
  };
  const [editing, setEditing] = useState(false);
  const [newItem, setNewItem] = useState("");

  const toggleComp = () => {
    setEditing(!editing);
  };

  const handleEditInput = (e) => {
    setNewItem(e.target.value);
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
        title="check task for done"
      ></Checkbox>
      <dt>{todo.title}</dt>
      <dd>{todo.task}</dd>
      <Portal>
        {editing && (
          <Edit
            handleClose={toggleComp}
            onChange={handleEditInput}
            value={newItem}
            rename={() => edit(todo.id, newItem)}
            id={todo.id}
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
  left: "50px",
  top: "25px",
});

const ImageButton = styled("button", {
  border: "transparent",
  background: "transparent",
  position: "relative",
  left: "$40",
  top: "$8",
  cursor: "pointer",
});

const EditButton = styled("button", {
  width: "auto",
  border: "1px solid $gray-500",
  color: "$gray-800",
  backgroundColor: "#E8E2CA",
  padding: "$2 $3",
  borderRadius: "$lg",
  position: "relative",
  left: "$40",
  top: "$6",

  "&:hover": {
    backgroundColor: "#d69e2e",
  },
});
