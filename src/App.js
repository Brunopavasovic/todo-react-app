import { Container } from "./components/Container";
import { Button } from "./components/Button";
import { styled } from "./stitches.config";
import "./styles/App.css";

//https://khush-react-todo.netlify.app/

export default function App() {
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
          <Button size="large">Add</Button>
        </InputContainer>
        <Footer></Footer>
      </TasksContainer>
    </PageWrapper>
  );
}

const PageWrapper = styled("div", {
  minHeight: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "$gray-200",
});

const TasksContainer = styled("div", {
  width: "100%",
  maxWidth: "768px",
  minHeight: "500px",
  background: "$white",
});

const InputContainer = styled("div", {
  width: "100%",
  marginTop: "10px",
  maxWidth: "768px",
  minHeight: "150px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
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
  marginTop: "195px",
});
