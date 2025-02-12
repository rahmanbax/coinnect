import { MagnifyingGlass } from "@phosphor-icons/react";
import React from "react";

const SearchBar = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1 px-2 py-1 bg-[#F5F5F5] rounded-full stroke-1 border-1 border-gray-200 transition ease-out hover:shadow-sm hover:cursor-pointer"
    >
      <MagnifyingGlass className="opacity-50" size={12} weight="bold" />
      <p className="font-normal text-sm text-gray-500">Search</p>
    </button>
  );
};

export default SearchBar;
