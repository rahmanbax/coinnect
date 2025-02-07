import React from "react";
import { useSearchParams } from "react-router-dom";

const Pagination = ({ lastPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Ambil halaman saat ini dari query parameters, default ke 1 jika tidak ada
  const page = Number(searchParams.get("page")) || 1;

  // Handle Next Page
  const handleNextPage = () => {
    if (page < lastPage) {
      setSearchParams({ page: page + 1 }); // Update URL tanpa reload
    }
  };

  // Handle Previous Page
  const handlePrevPage = () => {
    if (page > 1) {
      setSearchParams({ page: page - 1 }); // Update URL tanpa reload
    }
  };

  // Generate Pagination Numbers
  const generatePages = () => {
    const pages = new Set();
    const range = 2;

    pages.add(1);
    for (
      let i = Math.max(2, page - range);
      i <= Math.min(lastPage - 1, page + range);
      i++
    ) {
      pages.add(i);
    }
    pages.add(lastPage);

    const pagesArray = Array.from(pages).sort((a, b) => a - b);
    const finalPages = [];

    for (let i = 0; i < pagesArray.length; i++) {
      if (i > 0 && pagesArray[i] !== pagesArray[i - 1] + 1) {
        finalPages.push("...");
      }
      finalPages.push(pagesArray[i]);
    }

    return finalPages;
  };

  return (
    <div className="flex items-center gap-2 justify-center mt-6">
      {page > 1 && (
        <button
          onClick={handlePrevPage}
          className="px-4 bg-white h-10 hover:bg-gray-100 rounded-xl text-sm transition ease-out cursor-pointer"
        >
          Prev
        </button>
      )}

      {generatePages().map((p, index) =>
        p === "..." ? (
          <div
            key={index}
            className="bg-white hover:bg-honey/20 w-10 h-10 flex items-center justify-center rounded-full text-sm transition-all ease-out"
          >
            ...
          </div>
        ) : (
          <button
            key={index}
            onClick={() => setSearchParams({ page: p })}
            className={`w-10 h-10 flex items-center justify-center rounded-full text-sm transition-colors ease-out text-black ${
              p === page
                ? "bg-honey/20  border-2 border-honey"
                : "bg-white hover:bg-honey/20 cursor-pointer"
            }`}
          >
            {p}
          </button>
        )
      )}

      {page < lastPage && (
        <button
          onClick={handleNextPage}
          className="px-4 bg-white h-10 hover:bg-gray-100 rounded-xl text-sm transition-all ease-out cursor-pointer"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
