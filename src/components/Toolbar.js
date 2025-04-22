import React from 'react';
import { useBuilderStore } from '../store/useBuilderStore';

export const Toolbar = () => {
  const { resetBuilder } = useBuilderStore();

  return (
    <div className="toolbar">
      <button className="btn" onClick={resetBuilder}>Reset Builder</button>
    </div>
  );
};
