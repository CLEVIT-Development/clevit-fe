import React from "react";

interface PaginationProps {
  totalItems: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  // Generate an array of pages based on totalPages
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center space-x-4 mt-6">
      {/* Previous button */}
      <button
        className="outline-none border-2 border-gray-400 px-4 py-2 rounded-full"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        {"<"}
      </button>

      {/* Page numbers */}
      {pages.map((page) => (
        <button
          key={page}
          className={`w-10 h-10 rounded-full border border-purple-300 flex items-center justify-center 
            ${currentPage === page ? "bg-purple-300 text-white" : "text-purple-300"}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* Next button */}
      <button
        className="outline-none border-2 border-gray-400 px-4 py-2 rounded-full"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
