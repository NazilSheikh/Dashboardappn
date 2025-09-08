import React from 'react';

function Category({ categoryId, widget, onRemove }) {
  return (
    <div className="widget-card">
      <h3>{widget.title}</h3>
      <p>{widget.text}</p>
      <button className="remove-button" onClick={() => onRemove(categoryId, widget.id)}>❌</button>
    </div>
  );
}

export default Category;
