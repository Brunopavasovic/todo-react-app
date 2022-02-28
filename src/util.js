export const uniqueId = () => Math.random().toString(16).slice(2);

export const filterItems = (todos, view) => {
  switch (view) {
    case "completed":
      return todos.filter((todo) => todo.done);
    case "active":
      return todos.filter((todo) => !todo.done);
    case "all":
      return todos;
    default:
      throw new Error(`Invalid view: ${view}`);
  }
};
