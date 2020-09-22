import React from "react";
import { SearchBar } from "./SearchBar";

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

export default NavBar;
