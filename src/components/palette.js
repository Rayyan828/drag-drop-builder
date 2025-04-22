import React from 'react';

const items = [
  { id: 'apple', label: '🍎 Apple', type: 'fruit' },
  { id: 'carrot', label: '🥕 Carrot', type: 'vegetable' },
  { id: 'banana', label: '🍌 Banana', type: 'fruit' },
  { id: 'broccoli', label: '🥦 Broccoli', type: 'vegetable' }
];

export const Palette = () => (
  <div className="workspace" id="items">
    {items.map(item => (
      <div
        key={item.id}
        className="draggable"
        draggable
        data-type={item.type}
        id={item.id}
        onDragStart={(e) => e.dataTransfer.setData('text/plain', item.id)}
      >
        {item.label}
      </div>
    ))}
  </div>
);
