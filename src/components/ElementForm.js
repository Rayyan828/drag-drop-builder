import React from 'react';

export default function ElementForm({ selected, updateElement }) {
  if (!selected) return <div className="w-1/4 p-4 bg-gray-50">Select an element</div>;

  const handleChange = (e) => {
    updateElement(selected.id, {
      ...selected.props,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-1/4 bg-gray-50 p-4">
      <h3 className="font-bold mb-2">Edit Properties</h3>
      {selected.type === 'text' && (
        <input
          type="text"
          name="text"
          value={selected.props.text || ''}
          onChange={handleChange}
          className="w-full p-2 border"
          placeholder="Enter text"
        />
      )}
      {selected.type === 'image' && (
        <input
          type="text"
          name="src"
          value={selected.props.src || ''}
          onChange={handleChange}
          className="w-full p-2 border"
          placeholder="Image URL"
        />
      )}
      {selected.type === 'button' && (
        <input
          type="text"
          name="label"
          value={selected.props.label || ''}
          onChange={handleChange}
          className="w-full p-2 border"
          placeholder="Button text"
        />
      )}
    </div>
  );
}
