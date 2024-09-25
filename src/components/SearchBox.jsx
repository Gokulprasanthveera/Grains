// SearchBox.js
import React, { useState, useEffect, useRef } from "react";

const SearchBox = ({ onSearch, onClear }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  const handleSearch = () => {
    onSearch(searchTerm);
    setSearchTerm(""); // Clear the input after searching
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      onClear(); // Call onClear to reset search term
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={inputRef} className="flex items-center">
      <input
        type="text"
        placeholder="Search ingredients..."
        className="input input-bordered mr-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch} className="btn">
        Search
      </button>
    </div>
  );
};

export default SearchBox;
