import React, { useContext, FormEvent, useEffect } from "react";
import { SearchContext } from "components/contexts";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

interface Props {
  searchVideos: (query: string) => void;
}

const SearchBar = ({ searchVideos }: Props) => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const history = useHistory();

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchVideos(searchTerm);
    history.push("/");
  };

  useEffect(() => {
    searchVideos("wizeline");
    // eslint-disable-next-line
  }, []);

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
