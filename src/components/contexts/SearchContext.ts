import { createContext } from "react";

export const SearchContext = createContext<{
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}>({
  searchTerm: "",
  setSearchTerm: () => null,
});
