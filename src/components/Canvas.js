import React from 'react';
import Element from './Element';

const Canvas = ({ elements, setSelectedElement }) => {
  return (
    <div className="canvas">
      {elements.map((el) => (
        <Element
          key={el.id}
          element={el}
          setSelectedElement={setSelectedElement}
        />
      ))}
    </div>
  );
};

export default Canvas;
