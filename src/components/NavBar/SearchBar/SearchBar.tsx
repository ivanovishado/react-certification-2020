import React, { useContext, FormEvent } from "react";
import { SearchContext } from "components/contexts";

interface Props {
  searchVideos: (query: string) => void;
}

const SearchBar = ({ searchVideos }: Props) => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    searchVideos(searchTerm);
  };

  return (
    <input
      type="text"
      value={searchTerm}
      placeholder="Enter your search term..."
      onChange={handleChange}
      onSubmit={handleSubmit}
    ></input>
  );
};

export default SearchBar;
