import React from "react";
import CoinCard from "./CoinCard";

const SearchResultsLayout = ({ searchData }) => {
  return (
    <>
      {/* Search results */}
      <p className="font-bold text-sm text-black/50">Search results</p>
      {searchData.map((data) => <CoinCard key={data.id} data={data} />)}
    </>
  );
};

export default SearchResultsLayout;
