{
  // 불변성을 보장해야한다.
  type Todo = {
    title: string;
    description: string;
  };

  type ReadonlyTodo = Readonly<Todo>;

  function display(todo: ReadonlyTodo) {
    // todo.title = 'jaja';
  }
}
