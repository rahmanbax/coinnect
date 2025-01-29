import React from "react";

const Pagination = ({ page, lastPage, setPage }) => {
  const handleNextPage = () => {
    setPage((prev) => Math.min(prev + 1, lastPage));
  };

  const handlePrevPage = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const generatePages = () => {
    const pages = new Set();
    const range = 2; // Menampilkan 2 halaman sebelum dan sesudah currentPage

    pages.add(1);
    
    for (let i = Math.max(2, page - range); i <= Math.min(lastPage - 1, page + range); i++) {
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
          className="px-4 bg-white h-10 hover:bg-gray-100 rounded-xl text-sm transition ease-out"
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
            onClick={() => setPage(p)}
            className={`w-10 h-10 flex items-center justify-center rounded-full text-sm transition-colors ease-out text-black ${p === page ? 'bg-honey/20  border-2 border-honey' : 'bg-white hover:bg-honey/20'}`}
          >
            {p}
          </button>
        )
      )}

      {page < lastPage && (
        <button
          onClick={handleNextPage}
          className="px-4 bg-white h-10 hover:bg-gray-100 rounded-xl text-sm transition-all ease-out"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
