import React from 'react';

const Sidebar = ({ setElements, elements }) => {
  const addElement = (type) => {
    const newElement = {
      id: Date.now(),
      type,
      content: type === 'text' ? 'Edit me' : '',
      style: { top: 100, left: 100 },
    };
    setElements([...elements, newElement]);
  };

  return (
    <div className="sidebar">
      <h3>Elements</h3>
      <button onClick={() => addElement('text')}>Text</button>
      <button onClick={() => addElement('image')}>Image</button>
      <button onClick={() => addElement('button')}>Button</button>
    </div>
  );
};

export default Sidebar;
