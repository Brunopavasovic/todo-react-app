import { useState } from "react";
import { Button } from "./Button";
import { styled } from "../stitches.config";

const emptyInput = {
  title: "",
  task: "",
};

export const Form = (props) => {
  const [userInput, setUserInput] = useState(emptyInput);

  const handleInput = (e) => {
    const value = e.target.value;

    setUserInput({
      ...userInput,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    if (userInput.title === "" || userInput.task === "") {
      return false;
    }
    e.preventDefault();
    props.addTodo(userInput);
    setUserInput(emptyInput);
  };

  return (
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
  );
};

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
