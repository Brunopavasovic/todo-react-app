import React from "react";
import { styled } from "../stitches.config";

export const RenderTask = (todo) => {
  return (
    <Dl>
      <ImageButton onClick={todo.remove}>
        {" "}
        <img src="./cancel.png" alt="cancel" />
      </ImageButton>
      <Checkbox
        type="checkbox"
        onChange={todo.changed}
        checked={todo.checked}
      ></Checkbox>
      <dt key={todo.id}>{todo.title}</dt>
      <dd key={todo.id}>{todo.task}</dd>
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
  right: "60px",
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
