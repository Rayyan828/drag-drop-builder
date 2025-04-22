import React from 'react';

const elementTypes = ['Text', 'Image', 'Button'];

const Sidebar = ({ setElements, elements }) => {
  const addElement = (type) => {
    const id = Date.now();
    const newElement = {
      id,
      type,
      x: 100,
      y: 100,
      content:
        type === 'Text' ? 'Edit me' : type === 'Button' ? 'Click Me' : '',
    };
    setElements([...elements, newElement]);
  };

  return (
    <div className="w-1/5 bg-gray-100 p-4 border-r">
      <h2 className="text-xl font-bold mb-4">Elements</h2>
      {elementTypes.map((type) => (
        <button
          key={type}
          onClick={() => addElement(type)}
          className="w-full bg-white border mb-2 py-2 rounded hover:bg-blue-100"
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
