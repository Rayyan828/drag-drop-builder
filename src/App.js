import React from 'react';
import { Toolbar } from './components/Toolbar';
import { Palette } from './components/Palette';
import { Canvas } from './components/Canvas';
import { PropertyEditor } from './components/PropertyEditor';
import './index.css';

function App() {
  return (
    <div className="app">
      {/* Toolbar with reset button */}
      <Toolbar />
      
      {/* Palette where draggable items are listed */}
      <Palette />
      
      {/* Canvas where dropzones are displayed for items to be dragged */}
      <Canvas />
      
      {/* Optional Property Editor */}
      <PropertyEditor />
    </div>
  );
}

export default App;
