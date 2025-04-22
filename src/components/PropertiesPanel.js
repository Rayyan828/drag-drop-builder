import React from 'react';

const PropertiesPanel = ({ selected, elements, setElements }) => {
  if (!selected) return <div className="w-1/4 bg-gray-100 p-4 border-l" />;

  const updateContent = (value) => {
    const updated = elements.map((el) =>
      el.id === selected.id ? { ...el, content: value } : el
    );
    setElements(updated);
  };

  return (
    <div className="w-1/4 bg-gray-100 p-4 border-l">
      <h2 className="text-xl font-bold mb-4">Properties</h2>
      {selected.type === 'Image' ? (
        <input
          type="text"
          value={selected.content}
          onChange={(e) => updateContent(e.target.value)}
          className="w-full border p-2"
          placeholder="Image URL"
        />
      ) : (
        <input
          type="text"
          value={selected.content}
          onChange={(e) => updateContent(e.target.value)}
          className="w-full border p-2"
          placeholder="Text"
        />
      )}
    </div>
  );
};

export default PropertiesPanel;
