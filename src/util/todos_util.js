async function fetchTodos(endpoint) {
  const res = await fetch(endpoint);
  const todos = await res.json();

  return todos;
}

export default fetchTodos;