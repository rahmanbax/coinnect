import React from "react";
import { Router } from "react-router-dom";

const Pagination = ({ page, lastPage, setPage }) => {
  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
  };

  return (
    <div className="flex items-center gap-2 justify-center mt-6">
      {page > 1 && (
        <button
          onClick={handlePrevPage}
          className="px-4 bg-white h-10 hover:bg-gray-100 rounded-xl text-sm"
        >
          Prev
        </button>
      )}

      <div className="bg-white hover:bg-honey/20 w-10 h-10 flex items-center justify-center rounded-full text-sm">
        {page}
      </div>
      <div className="bg-white hover:bg-honey/20 w-10 h-10 flex items-center justify-center rounded-full text-sm">
        ...
      </div>
      <div className="bg-white hover:bg-honey/20 w-10 h-10 flex items-center justify-center rounded-full text-sm">
        {lastPage}
      </div>
      {page < lastPage && (
        <button
          onClick={handleNextPage}
          className="px-4 bg-white h-10 hover:bg-gray-100 rounded-xl text-sm"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
