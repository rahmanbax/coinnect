import React from "react";
import PriceChange from "./PriceChange";
import SearchResultsCard from "./SearchResultsCard";

const SearchResultsLayout = ({ searchData }) => {
  return (
    <>
      {/* Search results */}
      <p className="font-bold text-sm text-black/50">Search results</p>
      {searchData.map((data) => <SearchResultsCard key={data.id} data={data} />)}
    </>
  );
};

export default SearchResultsLayout;
