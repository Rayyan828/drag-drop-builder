import React from 'react';

const PropertiesPanel = ({ element, setElements, elements }) => {
  const updateContent = (e) => {
    const updated = elements.map((el) =>
      el.id === element.id ? { ...el, content: e.target.value } : el
    );
    setElements(updated);
  };

  return (
    <div className="properties-panel">
      <h3>Edit Properties</h3>
      {element.type !== 'image' ? (
        <input
          type="text"
          value={element.content}
          onChange={updateContent}
        />
      ) : (
        <input
          type="text"
          placeholder="Image URL"
          value={element.content}
          onChange={updateContent}
        />
      )}
    </div>
  );
};

export default PropertiesPanel;
