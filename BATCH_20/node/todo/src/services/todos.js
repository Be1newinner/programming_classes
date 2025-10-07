const todosData = [];

export const fetchTodoByIdService = (id) => {
  const todo = todosData.find((item) => item.id === id);

  return todo;
};
