import React from "react";
import { useDashboard } from "../context";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useDashboard();
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search anything..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
