import React from "react";
import { useDashboard } from "../context";

const Widgets = ({ widget, categoryId }) => {
  const { removeWidget } = useDashboard();
  return (
    <div className="widget-card">
      <div className="widget-header">
        <span className="widget-title">{widget.name}</span>
        <button
          className="remove-widget-btn"
          onClick={() => removeWidget(categoryId, widget.id)}
        >
          ❌
        </button>
      </div>
      <div className="widget-content">{widget.text}</div>
    </div>
  );
};

export default Widgets;
