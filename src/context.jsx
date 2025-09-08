import React, { createContext, useContext, useState } from "react";
import dashboardData from "./dashboardData.json";

const DashboardContext = createContext();

export const useDashboard = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }) => {
  const [categories, setCategories] = useState(dashboardData.categories);
  const [searchTerm, setSearchTerm] = useState("");

  // Add widget to category
  const addWidget = (categoryId, widget) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === categoryId
          ? { ...cat, widgets: [...cat.widgets, widget] }
          : cat
      )
    );
  };

  // Remove widget from category
  const removeWidget = (categoryId, widgetId) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              widgets: cat.widgets.filter((w) => w.id !== widgetId),
            }
          : cat
      )
    );
  };

  // Search widgets
  const filteredCategories = categories.map((cat) => ({
    ...cat,
    widgets: cat.widgets.filter(
      (w) =>
        w.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        w.text.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <DashboardContext.Provider
      value={{
        categories,
        addWidget,
        removeWidget,
        searchTerm,
        setSearchTerm,
        filteredCategories,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
