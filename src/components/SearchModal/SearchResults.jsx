import React from "react";
import CoinCard from "./CoinCard";

const SearchResultsLayout = ({ searchData, onClose }) => {
  return (
    <>
      {/* Search results */}
      <p className="font-bold text-sm text-black/50">Search results</p>
      {searchData.map((data) => <CoinCard key={data.id} onClose={onClose} data={data} />)}
    </>
  );
};

export default SearchResultsLayout;
