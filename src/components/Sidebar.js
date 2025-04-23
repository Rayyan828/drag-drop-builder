import React from 'react';
import { useDraggable } from '@dnd-kit/core';

const DraggableItem = ({ id, label }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({ id });
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="p-2 m-2 bg-gray-300 rounded cursor-move text-center"
    >
      {label}
    </div>
  );
};

export default function Sidebar() {
  return (
    <div className="w-1/5 bg-gray-100 p-4">
      <h2 className="font-bold text-lg mb-2">Elements</h2>
      <DraggableItem id="text" label="Text" />
      <DraggableItem id="image" label="Image" />
      <DraggableItem id="button" label="Button" />
    </div>
  );
}

