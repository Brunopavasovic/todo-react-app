import React from "react";
import { styled } from "../stitches.config";
import { filterItems } from "../util";

export const Footer = ({ todos, clearCompleted, view, setView }) => {
  const all = todos.length;
  const completed = filterItems(todos, "completed").length;
  const active = filterItems(todos, "active").length;

  return (
    <Filter>
      <FilterButton isActive={view === "all"} onClick={() => setView("all")}>
        All ({all})
      </FilterButton>
      <FilterButton
        isActive={view === "active"}
        onClick={() => setView("active")}
      >
        Active ({active})
      </FilterButton>
      <FilterButton
        isActive={view === "completed"}
        onClick={() => setView("completed")}
      >
        Completed ({completed})
      </FilterButton>
      <FilterButton onClick={clearCompleted}>Clear Completed</FilterButton>
    </Filter>
  );
};

const Filter = styled("div", {
  width: "100%",
  height: "50px",
  backgroundColor: "#E8E2CA",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
});

const FilterButton = styled("button", {
  border: "none",
  background: "transparent",
  fontWeight: "bold",
  fontSize: "16px",
  color: "#000",
  cursor: "pointer",
  variants: {
    isActive: {
      true: {
        color: "#7CB9E8",
      },
    },
  },
});
