import React, { useState } from 'react'
import ItemList from './components/ItemList'
import AddItemForm from './components/AddItemForm'
import './App.css'

function App() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const removeItem = (itemIndex) => {
    setItems(items.filter((_, index) => index !== itemIndex));
  };

  return (
    <>
      <div className="app-container">
      <h1>Dynamic Item List</h1>
      <AddItemForm onAddItem={addItem} />
      <ItemList items={items} onRemoveItem={removeItem} />
    </div>
    </>
  );
};

export default App;