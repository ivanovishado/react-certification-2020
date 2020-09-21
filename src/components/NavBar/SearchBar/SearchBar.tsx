import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("wizeline");

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        placeholder="Enter your search term..."
        onChange={handleChange}
      ></input>
    </>
  );
};

export default SearchBar;
