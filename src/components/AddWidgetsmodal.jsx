import React, { useState } from 'react';

function AddWidgetModal({ categoryId, onClose, onAdd }) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleConfirm = () => {
    const newWidget = {
      id: Date.now(),
      title,
      text
    };

    onAdd(categoryId, newWidget);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Widget</h2>
        <input
          type="text"
          placeholder="Widget Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Widget Text"
          value={text}
          onChange={e => setText(e.target.value)}
        ></textarea>
        <button onClick={handleConfirm}>Confirm</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default AddWidgetModal;
