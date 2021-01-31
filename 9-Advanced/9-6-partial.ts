{
  type Todo = {
    title: string;
    description: string;
    label: string;
    prioity: 'high' | 'low';
  };

  // 부분적인 것만 수정한다.
  function updateTodo(todo: Todo, fieldsTodoUpdate: Partial<Todo>): Todo {
    return {
      ...todo,
      ...fieldsTodoUpdate,
    };
  }

  const todo: Todo = {
    title: 'leary typescript',
    description: 'study',
    label: 'study',
    prioity: 'high',
  };

  updateTodo(todo, {
    title: 'learn react',
  });

  console.log(todo);
}
