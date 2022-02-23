import { styled } from "../stitches.config";

export const Button = styled("button", {
  border: "1px solid $gray-500",
  color: "$gray-800",
  backgroundColor: "#E8E2CA",
  padding: "$2 $3",
  borderRadius: "$lg",

  "&:hover": {
    backgroundColor: "#d69e2e",
  },

  variants: {
    size: {
      small: {
        fontSize: "13px",
        height: "25px",
        paddingRight: "10px",
        paddingLeft: "10px",
      },
      large: {
        fontSize: "15px",
        height: "35px",
        paddingLeft: "15px",
        paddingRight: "15px",
      },
    },
  },
});
