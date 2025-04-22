import React from 'react';

const Element = ({ el, onClick, isSelected }) => {
  const baseStyle = `absolute p-2 border rounded cursor-pointer ${
    isSelected ? 'border-blue-500' : 'border-gray-300'
  }`;

  return (
    <div
      className={baseStyle}
      style={{ top: el.y, left: el.x }}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      draggable
      onDragEnd={(e) => {
        el.x = e.clientX - 200;
        el.y = e.clientY - 50;
      }}
    >
      {el.type === 'Text' && <p>{el.content}</p>}
      {el.type === 'Button' && <button>{el.content}</button>}
      {el.type === 'Image' && (
        <img
          src={el.content || 'https://via.placeholder.com/100'}
          alt="img"
          className="w-24 h-auto"
        />
      )}
    </div>
  );
};

export default Element;
