"use client";
import React, { useState } from 'react';
import NewItem from './new-item.js';
import ItemList from './item-list.js';
import itemsData from './items.json';
import MealIdeas from './meal-ideas.js';

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  function handleItemSelect (newItem) {
    const newItemSplit = newItem.split(',');
    const newItemNoEmoji = newItemSplit[0].replace(/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g, '');
    const newItemTrimmed = newItemNoEmoji.trim();
   //console.log(newItemTrimmed);
    setSelectedItemName(newItemTrimmed);
};

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main>
      <h1 className="text-3xl font-bold mb-8">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} onItemSelect={handleItemSelect}/>
      <MealIdeas ingredient={selectedItemName} />
    </main>
  );
};

export default Page;