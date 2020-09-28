import React from "react";
import { SearchBar } from "./SearchBar";
import PropTypes from "prop-types";

interface Props {
  searchVideos: (query: string) => void;
}

const NavBar = ({ searchVideos }: Props) => {
  return (
    <nav>
      <SearchBar searchVideos={searchVideos} />
    </nav>
  );
};

NavBar.propTypes = {
  searchVideos: PropTypes.func,
};

export default NavBar;
