import { Button, Checkbox, Form, Input } from 'antd';
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
  const [todoList, setTodoList] = useState<boolean>(false);

  function handleSubmit(e: any) {}

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label>
          Text:
          <input type="text" value={newItem} onChange={(event) => setNewItem(event.target.value)} />
        </label>
      </div>
      <button className="btn">Add</button>
      <li>
        <label>
          Checkbox1:
          <input type="checkbox" checked={todoList} onChange={(event) => setTodoList(event.target.checked)} />
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
      <li>
        <label>
          Checkbox2:
          <input type="checkbox" checked={todoList} onChange={(event) => setTodoList(event.target.checked)} />
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
    </form>
  );
};

export default App;
