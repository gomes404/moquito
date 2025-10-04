import React, { useState } from 'react';

export default function TaskList() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);

  const addItem = () => {
    const nameTrimmed = name.trim();
    if (!nameTrimmed) return;
    const qty = Number(quantity) || 1;
    if (qty <= 0) return;

    const newItem = {
      id: Date.now().toString(),
      name: nameTrimmed,
      quantity: qty,
    };

    setItems(prev => [...prev, newItem]);
    setName('');
    setQuantity(1);
  };

  const removeItem = id => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="tasklist">
      <h3>Item list</h3>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <input
          aria-label="Name"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          aria-label="Quantity"
          type="number"
          min={1}
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value) || 1)}
          style={{ width: 80 }}
        />
        <button onClick={addItem}>Add</button>
      </div>

      <ul style={{ marginTop: 12 }}>
        {items.map(item => (
          <li key={item.id} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span>{item.name}</span>
            <strong>×{item.quantity}</strong>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
        {items.length === 0 && <li>No items yet</li>}
      </ul>
    </div>
  );
}
