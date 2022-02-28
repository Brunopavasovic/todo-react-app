import React from "react";
import { styled } from "../stitches.config";

export const RenderTask = ({ remove, change, ...todo }) => {
  const toggleDone = (ev) => {
    change({ ...todo, done: ev.target.checked });
  };

  return (
    <Dl>
      <ImageButton onClick={remove}>
        {" "}
        <img src="./cancel.png" alt="cancel" />
      </ImageButton>
      <Checkbox
        type="checkbox"
        onChange={toggleDone}
        checked={todo.done}
      ></Checkbox>
      <dt>{todo.title}</dt>
      <dd>{todo.task}</dd>
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
  right: "200px",
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
