import { Container } from "./components/Container";
import { Button } from "./components/Button";
import { styled } from "./stitches.config";
import "./styles/App.css";
import { useState } from "react";
import { RenderTask } from "./components/RenderTask";

//https://khush-react-todo.netlify.app/

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState("");

  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <PageWrapper>
      <TasksContainer>
        <Container>
          <h1>Todo Tasks</h1>
        </Container>
        <InputContainer>
          <label>ENTER TITLE:</label>
          <Inputs type="text" placeholder="enter title"></Inputs>
          <label>ENTER TODO</label>
          <Inputs type="text" placeholder="enter text"></Inputs>
          <Button size="large">ADD TODO</Button>
        </InputContainer>

        <Footer>
          <InfoButton>All</InfoButton>
          <InfoButton>Active</InfoButton>
          <InfoButton>Completed</InfoButton>
          <InfoButton>Clear Completed</InfoButton>
        </Footer>
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
});

const InputContainer = styled("div", {
  width: "100%",
  marginTop: "10px",
  maxWidth: "768px",
  minHeight: "170px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  borderBottom: "1px solid #E8E2CA ",
});

const Inputs = styled("input", {
  width: "300px",
  height: "30px",
  borderRadius: "5px",
  outlineColor: "$blue-300",
  boxShadow: "-15px 16px 19px -16px rgba(0,0,0,0.2)",
  border: "1px solid #ccc",
});

const Footer = styled("div", {
  width: "100%",
  height: "50px",
  backgroundColor: "#E8E2CA",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
});

const InfoButton = styled("button", {
  border: "none",
  background: "transparent",
  fontWeight: "bold",
  fontSize: "16px",
});
