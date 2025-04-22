import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import PropertiesPanel from './components/PropertiesPanel';

export default function App() {
  const [elements, setElements] = useState([]);
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex h-screen">
      <Sidebar setElements={setElements} elements={elements} />
      <Canvas
        elements={elements}
        setSelected={setSelected}
        selected={selected}
      />
      <PropertiesPanel
        selected={selected}
        elements={elements}
        setElements={setElements}
      />
    </div>
  );
}
