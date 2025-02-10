// SearchModal.jsx
import React, { forwardRef, useState } from "react";
import SearchResultsLayout from "./SearchResults";
import TrendingNowLayout from "./TrendingNow";
import SearchInput from "./SearchInput";

const SearchModalLayout = forwardRef(({ searchInputRef }, ref) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="overflow-hidden rounded-xl w-[656px]">
      <SearchInput
        setSearchInputGlobal={setSearchInput}
        setSearchResults={setSearchResults}
        ref={searchInputRef}
      />
      <div className="p-5 bg-white border-t-1 border-[#f5f5f5] max-h-[600px] overflow-y-auto">
        {searchInput.trim() === "" ? (
          <TrendingNowLayout /> // Jika input kosong, tampilkan TrendingNowLayout
        ) : (
          <SearchResultsLayout searchData={searchResults} /> // Jika ada pencarian, tampilkan hasil
        )}
      </div>
    </div>
  );
});

export default SearchModalLayout;
