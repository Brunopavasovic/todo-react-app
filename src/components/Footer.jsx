import React from "react";
import { styled } from "../stitches.config";

export const Footer = ({
  todos,
  clearCompleted,
  completedItems,
  activeItems,
}) => {
  const all = todos.length;

  return (
    <Filter>
      <FilterButton>All ({all})</FilterButton>
      <FilterButton onClick={activeItems}>Active</FilterButton>
      <FilterButton onClick={completedItems}>Completed </FilterButton>
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
});
