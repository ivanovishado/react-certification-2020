import React, { useContext, FormEvent } from "react";
import { SearchContext } from "components/contexts";
import PropTypes from "prop-types";

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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchVideos(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        placeholder="Enter your search term..."
        onChange={handleChange}
      ></input>
      <input type="submit" value="Search"></input>
    </form>
  );
};

SearchBar.propTypes = {
  searchVideos: PropTypes.func,
};

export default SearchBar;
