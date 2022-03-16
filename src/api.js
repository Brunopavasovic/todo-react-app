import axios from "axios";

export const baseURL = "http://127.0.0.1:1337/api/tasks";

function wait(delayMS) {
  return new Promise((resolve) => {
    setTimeout(resolve, delayMS);
  });
}

function formatTodo(todo) {
  return {
    ...todo.attributes,
    id: todo.id,
  };
}

export async function getTodos() {
  await wait(1000);
  const { data } = await axios.get(baseURL, {
    params: { "pagination[pageSize]": 10000 },
  });
  const todos = data.data;

  return todos.map(formatTodo);
}

export async function createTodo(input) {
  const { data } = await axios.post(baseURL, {
    data: {
      done: false,
      ...input,
    },
  });

  return formatTodo(data.data);
}

export async function removeTodo(id) {
  await axios.delete(`${baseURL}/${id}`);
}

export async function updateTodo(id, updatedItem) {
  await axios.put(`${baseURL}/${id}`);
  return formatTodo(updatedItem);
}
