"use client";
import React, { useState } from 'react';
import NewItem from './new-item.js';
import ItemList from './item-list.js';
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main>
      <h1 className="text-3xl font-bold mb-8">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
};

export default Page;