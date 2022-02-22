import { styled } from "../stitches.config";

export const Button = styled("button", {
  border: "1px solid $gray-500",
  color: "$gray-800",
  backgroundImage: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
  padding: "$2 $3",
  borderRadius: "$lg",

  "&:hover": {
    backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
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
