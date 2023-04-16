import { useState } from 'react';

export function TodoForm(props: any) {
  const [newItem, setNewItem] = useState<string>('');

  function handleSubmit(event: any) {
    event.preventDefault();

    props.onSubmit(newItem);

    setNewItem('');
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
    </form>
  );
}
