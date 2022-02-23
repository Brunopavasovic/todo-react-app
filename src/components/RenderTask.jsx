import React from "react";
import { styled } from "../stitches.config";

export const RenderTask = (todo) => {
  return (
    <Dl>
      <dt>adad{todo.title}</dt>
      <dd>dadadad{todo.task}</dd>
    </Dl>
  );
};

const Dl = styled("dl", {
  textAlign: "center",
  fontSize: "20px",
  marginTop: "20px",
  padding: "10px",
  borderBottom: "1px solid #E8E2CA ",
});
