import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import ElementForm from './components/ElementForm';

export default function App() {
  const [elements, setElements] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const handleDrop = (event) => {
    const id = Date.now().toString();
    setElements([...elements, { id, type: event.active.id, props: {} }]);
  };

  const updateElement = (id, newProps) => {
    setElements(elements.map(el => el.id === id ? { ...el, props: newProps } : el));
  };

  return (
    <DndContext onDragEnd={handleDrop}>
      <div className="flex h-screen">
        <Sidebar />
        <Canvas elements={elements} setSelectedId={setSelectedId} selectedId={selectedId} />
        <ElementForm 
          selected={elements.find(e => e.id === selectedId)}
          updateElement={updateElement}
        />
      </div>
    </DndContext>
  );
}
