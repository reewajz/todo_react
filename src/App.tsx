import { useState } from 'react';
import './styles.css';

const onFinish = (values: any) => {
  values.preventDefault();
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const App: React.FC = () => {
  const [newItem, setNewItem] = useState<string>('');
  const [todoList, setTodos] = useState<Array<{ [key: string]: any }>>([]);

  function handleSubmit(event: any) {
    event.preventDefault();

    // setTodos([...todoList, {id : crypto.randomUUID(), title: newItem, completed: false}]); // this is not correct way ... todoList will always be new empty array

    setTodos((prevTodos) => [...prevTodos, { id: crypto.randomUUID(), title: newItem, completed: false }]);

    setNewItem('');
  }

  function toggleTodos(id: string, completed: boolean) {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodos(id: string) {
    setTodos((prevTods) => prevTods.filter((todo) => todo.id !== id));

  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label>
          Text:
          <input type="text" value={newItem} onChange={(event) => setNewItem(event.target.value)} />
        </label>
      </div>
      <button className="btn">Add</button>
      <ul>
        {todoList.length===0 && 'No todos '}
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                {todo.title}:
                <input type="checkbox" checked={todo.completed} onChange={(e) => toggleTodos(todo.id, e.target.checked)} />
              </label>
              <button className="btn btn-danger" onClick={(e) => deleteTodos(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </form>
  );
};

export default App;
