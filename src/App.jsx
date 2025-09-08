import React, { useState } from 'react';
import PieChartWidget from './components/PieChartWiget';
import Category from './components/Category';
import AddWidgetModal from './components/AddWidgetsmodal';
import CloudAccountPieChart from './components/CloudAccn';
import RegistryScanBarChart  from './components/RegistryScan';

import './index.css';

function App() {
 const initialData = [
  {
    id: 1,
    name: 'CSPM Executive Dashboard',
    widgets: [
      { id: 1, type: 'cloud-pie', title: 'Cloud Accounts' },
      { id: 2, type: 'pie', title: 'Cloud Account Risk Assessment', data: [1689, 681, 36, 7253] }
    ]
  },
  {
    id: 2,
    name: 'CWPP Dashboard',
    widgets: [
      { id: 3, type: 'text', title: 'Top 5 Namespace Alerts', text: 'No Graph Data Available' },
      { id: 4, type: 'text', title: 'Workload Alerts', text: 'No Graph Data Available' },
    {
  id: 5,
  type: 'registry-bar',
  title: 'Image Risk Assessment',
  dataCounts: { critical: 9, high: 150, medium: 300, low: 11 }
},
{
  id: 6,
  type: 'registry-bar',
  title: 'Image Security Issues',
  dataCounts: { critical: 2, high: 2, medium: 5, low: 1 }
}

    ]
  }
];


  const [categories, setCategories] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalCategoryId, setModalCategoryId] = useState(null);

  const handleAddWidget = (categoryId, newWidget) => {
    setCategories(prev =>
      prev.map(cat =>
        cat.id === categoryId ? { ...cat, widgets: [...cat.widgets, newWidget] } : cat
      )
    );
  };

  const handleRemoveWidget = (categoryId, widgetId) => {
    setCategories(prev =>
      prev.map(cat =>
        cat.id === categoryId
          ? { ...cat, widgets: cat.widgets.filter(w => w.id !== widgetId) }
          : cat
      )
    );
  };

  const filteredCategories = categories.map(cat => ({
    ...cat,
    widgets: cat.widgets.filter(w =>
      w.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }));

  return (
    <div className="app">
      <header>
        <h1>CNAPP Dashboard</h1>
        <input
          type="text"
          placeholder="Search widgets..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="search-bar"
        />
      </header>

      {filteredCategories.map(category => (
        <div key={category.id} className="category-section">
          <div className="category-header">
            <h2>{category.name}</h2>
            <button onClick={() => setModalCategoryId(category.id)}>+ Add Widget</button>
          </div>

          <div className="widgets-grid">
 {category.widgets.map(widget =>
  widget.type === 'pie' ? (
    <PieChartWidget
      key={widget.id}
      title={widget.title}
      data={widget.data}
    />
  ) : widget.type === 'cloud-pie' ? (
    <CloudAccountPieChart
      key={widget.id}
      title={widget.title}
      connected={2}
      notConnected={2}
    />
  ) : widget.type === 'registry-bar' ? (
    <RegistryScanBarChart
      key={widget.id}
      title={widget.title}
      dataCounts={widget.dataCounts}
    />
  ) : (
    <Category
      key={widget.id}
      categoryId={category.id}
      widget={widget}
      onRemove={handleRemoveWidget}
    />
  )
)}
          </div>
        </div>
      ))}

      {modalCategoryId && (
        <AddWidgetModal
          categoryId={modalCategoryId}
          onClose={() => setModalCategoryId(null)}
          onAdd={handleAddWidget}
        />
      )}
    </div>
  );
}

export default App;
