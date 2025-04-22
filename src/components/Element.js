import React from 'react';

const Element = ({ element, setSelectedElement }) => {
  const style = {
    position: 'absolute',
    ...element.style,
    cursor: 'pointer',
  };

  return (
    <div
      style={style}
      onClick={() => setSelectedElement(element)}
      draggable
      onDragEnd={(e) => {
        element.style.top = e.clientY - 50;
        element.style.left = e.clientX - 200;
      }}
    >
      {element.type === 'text' && <p>{element.content}</p>}
      {element.type === 'image' && (
        <img
          src={element.content || 'https://via.placeholder.com/100'}
          alt="placeholder"
          style={{ width: 100 }}
        />
      )}
      {element.type === 'button' && <button>{element.content || 'Click'}</button>}
    </div>
  );
};

export default Element;
