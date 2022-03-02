import { styled } from "../stitches.config";
import { Button } from "./Button";

export const Edit = (props) => {
  return (
    <EditContainer>
      <EditForm onSubmit={props.submit}>
        <Inputs
          onChange={props.onChange}
          value={props.value}
          type="text"
          placeholder="enter text"
        ></Inputs>
        <Button onClick={props.rename} type="button" size="large">
          Save Item
        </Button>
        <Button onClick={props.handleClose} type="button" size="large">
          Close
        </Button>
      </EditForm>
    </EditContainer>
  );
};

const EditContainer = styled("div", {
  height: "50vh",
  width: "50vw",
  backgroundColor: "#E8E2CA",
  borderRadius: "5px",
  /* filter: "blur(2px)", */
  position: "absolute",
  top: "200px",
  left: "300px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const EditForm = styled("div", {
  color: "$black",
  fontWeight: "bold",
  transform: "translate(-50%, -50%)",
  maxWidth: "50vw",
  height: "150px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-evenly",
  position: "relative",
  left: "150px",
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
