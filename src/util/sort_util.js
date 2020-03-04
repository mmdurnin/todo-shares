export function sortTodosAlph(todo1, todo2) {
  let comparison = 0;
  let title1 = todo1.title;
  let title2 = todo2.title;

  if (title1 < title2) {
    comparison = 1;
  } else if (title2 > title1) {
    comparison = -1;
  };

  return comparison;
};

export function sortTodosComplete(todo1, todo2) {
  return todo1.complete - todo2.complete;
}

export function sortTodosUser(todo1, todo2) {
  let comparison = 0;
  let user1 = todo1.user;
  let user2 = todo2.user;

  if (user1 < user2) {
    comparison = 1;
  } else if (user1 > user2) {
    comparison = -1;
  }

  return comparison;
}