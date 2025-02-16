// SearchInput.jsx
import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { forwardRef, useEffect, useState } from "react";
import { getCoinsBySearch } from "../../services/product.service";
import useDebounce from "../../hooks/useDebounce";

const SearchInput = forwardRef(
  ({ setSearchResults, setSearchInputGlobal, closeButton }, ref) => {
    const { debounce } = useDebounce();
    const [searchInput, setSearchInput] = useState("");
    const DELAY = 600;

    const fetchData = async () => {
      if (searchInput.trim() === "") {
        setSearchResults([]); // Jika input kosong, kosongkan hasil pencarian
        return;
      }
      await getCoinsBySearch(searchInput, (data) => {
        setSearchResults(data);
      });
    };

    const performSearch = (searchInput) => {
      setSearchInputGlobal(searchInput);

      if (searchInput.trim() === "") {
        setSearchInputGlobal(searchInput);
        return;
      }

      fetchData();
    };

    const debouncedSearch = debounce(performSearch, DELAY);

    useEffect(() => {
      debouncedSearch(searchInput);
    }, [searchInput]);

    useEffect(() => {
      if (ref && ref.current) {
        ref.current.focus();
      }
    }, [ref]);

    return (
      <div className="bg-white px-5 flex items-center gap-4">
        <MagnifyingGlass size={16} weight="bold" className="text-black/50" />
        <input
          name="search"
          autoComplete="off"
          ref={ref}
          type="text"
          placeholder="Search coins"
          className="w-full h-16 focus:outline-none"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          onClick={closeButton}
          className="text-xs text-black/60 p-1 bg-gray-50 hover:shadow-sm cursor-pointer border border-gray-200 rounded-lg"
        >
          close
        </button>
      </div>
    );
  }
);

export default SearchInput;
