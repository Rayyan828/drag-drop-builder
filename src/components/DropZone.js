import React, { useState } from 'react';

export const DropZone = ({ accept, label, setFeedback }) => {
  const [items, setItems] = useState([]);
  const [hovered, setHovered] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setHovered(false);
    const id = e.dataTransfer.getData('text/plain');
    const el = document.getElementById(id);
    const type = el.dataset.type;

    if (type !== accept) {
      setFeedback(`Oops! "${el.textContent}" doesn't belong here.`);
      return;
    }

    if (!items.includes(id)) {
      setItems([...items, id]);
      setFeedback(`Placed "${el.textContent}" in ${label}.`);
    }
  };

  return (
    <div
      className={`dropzone ${hovered ? 'hovered' : ''}`}
      data-accept={accept}
      onDragOver={(e) => {
        e.preventDefault();
        setHovered(true);
      }}
      onDragLeave={() => setHovered(false)}
      onDrop={handleDrop}
    >
      {label}
      {items.map((itemId) => {
        const original = document.getElementById(itemId);
        return (
          <div key={itemId} className="draggable dropped">
            {original ? original.textContent : ''}
          </div>
        );
      })}
    </div>
  );
};
