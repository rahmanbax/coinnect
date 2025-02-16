import React, { forwardRef, useEffect, useState } from "react";
import SearchResultsLayout from "./SearchResults";
import TrendingNowLayout from "./TrendingNow";
import SearchInput from "./SearchInput";
import { getCoinsTrend } from "../../services/product.service";
import { X } from "@phosphor-icons/react";

const SearchModalLayout = forwardRef(({ searchInputRef, closeButton }, ref) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [trendData, setTrendData] = useState([]);

  const getTrendData = async () => {
    await getCoinsTrend((data) => {
      setTrendData(data);
    });
  };

  useEffect(() => {
    getTrendData();
  }, []);

  return (
    <div className="overflow-hidden rounded-xl mx-5 md:mx-0">
      
      <SearchInput
        setSearchInputGlobal={setSearchInput}
        setSearchResults={setSearchResults}
        ref={searchInputRef}
        closeButton={closeButton}
      />

      <div className="p-4 md:p-5 bg-white border-t-1 border-[#f5f5f5] max-h-[600px] overflow-y-auto w-full">
        {searchInput.trim() === "" ? (
          <TrendingNowLayout trendData={trendData} />
        ) : searchResults.length > 0 ? (
          <SearchResultsLayout searchData={searchResults} />
        ) : (
          <div className="flex justify-center text-gray-600">
            We can't find coin you looking for
          </div>
        )}
      </div>
    </div>
  );
});

export default SearchModalLayout;
