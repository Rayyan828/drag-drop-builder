import React from 'react';
import Element from './Element';

const Canvas = ({ elements, setSelected, selected }) => {
  return (
    <div className="flex-1 relative bg-white">
      {elements.map((el) => (
        <Element
          key={el.id}
          el={el}
          isSelected={selected?.id === el.id}
          onClick={() => setSelected(el)}
        />
      ))}
    </div>
  );
};

export default Canvas;
