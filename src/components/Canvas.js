import React, { useState } from 'react';
import { DropZone } from './DropZone';

export const Canvas = () => {
  const [feedback, setFeedback] = useState('');

  return (
    <>
      <div className="workspace">
        <DropZone accept="fruit" label="Fruits Here" setFeedback={setFeedback} />
        <DropZone accept="vegetable" label="Veggies Here" setFeedback={setFeedback} />
      </div>
      <div className="feedback">{feedback}</div>
    </>
  );
};
