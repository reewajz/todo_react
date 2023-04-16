import { useState } from 'react';
import './styles.css';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

const App: React.FC = () => {
  const [todoList, setTodos] = useState<Array<{ [key: string]: any }>>([]);

  function setTodosValues(title: string) {
    console.log('title:', title);
    setTodos((prevTodos) => [...prevTodos, { id: crypto.randomUUID(), title, completed: false }]);
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
    <>
      <TodoForm onSubmit={setTodosValues} />
      {todoList.length === 0 && 'No todos '}

      <TodoList todoList={todoList} toggleTodos={toggleTodos} deleteTodos={deleteTodos}></TodoList>
    </>
  );
};

export default App;
