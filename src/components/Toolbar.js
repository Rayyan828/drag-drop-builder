import React from 'react';

export const Toolbar = () => {
  const reset = () => window.location.reload(); // simple reset for now

  return (
    <div className="toolbar">
      <button className="btn" onClick={reset}>Reset</button>
    </div>
  );
};
