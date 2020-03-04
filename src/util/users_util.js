async function fetchUsers(endpoint) {
  const res = await fetch(endpoint);
  const users = await res.json();

  return users;
}

export default fetchUsers;