import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import PropertiesPanel from './components/PropertiesPanel';
import './styles.css';

function App() {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);

  return (
    <div className="app-container">
      <Sidebar setElements={setElements} elements={elements} />
      <Canvas
        elements={elements}
        setSelectedElement={setSelectedElement}
      />
      {selectedElement && (
        <PropertiesPanel
          element={selectedElement}
          setElements={setElements}
          elements={elements}
        />
      )}
    </div>
  );
}

export default App;
