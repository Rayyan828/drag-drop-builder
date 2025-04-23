import React from 'react';

export default function Canvas({ elements, setSelectedId, selectedId }) {
  return (
    <div className="flex-1 bg-white p-4 overflow-auto border border-l-gray-300">
      <div className="min-h-full border border-dashed border-gray-400 p-4">
        {elements.map((el) => {
          const commonProps = {
            key: el.id,
            className: `p-2 my-2 border ${el.id === selectedId ? 'border-blue-500' : 'border-transparent'}`,
            onClick: () => setSelectedId(el.id),
          };

          if (el.type === 'text') {
            return <div {...commonProps}>{el.props.text || 'Editable Text'}</div>;
          } else if (el.type === 'image') {
            return (
              <div {...commonProps}>
                <img src={el.props.src || 'https://via.placeholder.com/150'} alt="custom" className="max-w-full" />
              </div>
            );
          } else if (el.type === 'button') {
            return <button {...commonProps} className="bg-blue-500 text-white px-4 py-2 rounded">{el.props.label || 'Click Me'}</button>;
          }
          return null;
        })}
      </div>
    </div>
  );
}
