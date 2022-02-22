import { styled } from "../stitches.config";

export const Container = styled("div", {
  display: "flex",
  width: "100%",
  backgroundColor: "#E8E2CA",

  boxshadow: "-5px -1px 24px -15px rgba(0,0,0,0.2)",
  variants: {
    size: {
      none: {
        padding: "0 0",
      },
      sm: {
        padding: "$1 $2",
      },
      md: {
        padding: "$2 $3",
      },
      lg: {
        padding: "$4 $6",
      },
    },
    align: {
      start: {
        justifyContent: "start",
      },
      center: {
        justifyContent: "center",
      },
      stretch: {
        justifyContent: "stretch",
      },
      end: {
        justifyContent: "end",
      },
    },
  },
  defaultVariants: {
    align: "center",
    size: "md",
  },
});
