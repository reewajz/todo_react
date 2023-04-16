export function TodoList({
  todoList,
  toggleTodos,
  deleteTodos
}: {
  todoList: Array<{ [key: string]: any }>;
  toggleTodos: any;
  deleteTodos: any;
}) {
  return (
    <ul>
      {todoList.map((todo) => {
        return (
          <li key={todo.id}>
            <label>
              {todo.title}:
              <input type="checkbox" checked={todo.completed} onChange={(e) => toggleTodos(todo.id, e.target.checked)} />
            </label>
            <button className="btn btn-danger" onClick={(e) => deleteTodos(todo.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
