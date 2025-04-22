import React from 'react';

export const DraggableItem = ({ id, type, children }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', id);
  };

  return (
    <div
      id={id}
      data-type={type}
      className="draggable"
      draggable="true"
      onDragStart={handleDragStart}
    >
      {children}
    </div>
  );
};

