import React from "react";


const Pagination = ({ totalPages, currentPage, onPageChange }) => {

    const getPaginationNumbers = () => {
     if (totalPages <= 3) {
      return [...Array(totalPages).keys()].map((num)=> num + 1);
    }
         if (currentPage === 1) {
            return [1, 2, 3];
          } else if (currentPage === totalPages) {
            return [totalPages - 2, totalPages - 1, totalPages];
          } else {
            return [
              currentPage - 1,
              currentPage,
              currentPage + 1,
            ];
          }
   
    };

    const paginationNumbers = getPaginationNumbers();
  return (

    
    <div className="flex justify-center items-center space-x-2 mt-4">
      {currentPage > 1 && (
        <button
          className="text-gray-500 hover:text-gray-700  text-xl py-1 px-3"
          onClick={() => onPageChange(currentPage - 1)}
        >
          Prev
        </button>
      )}

      {paginationNumbers.map((num) => (
        <button
          key={num}
          className={`bg-gray-500 hover:bg-gray-700 text-white py-1 px-3 rounded-full ${
            currentPage === num ? "bg-blue-700" : ""
          }`}
          onClick={() => onPageChange(num)}
        >
          {num}
        </button>
      ))}

      {currentPage < totalPages && (
        <button
          className=" text-gray-500 hover:text-gray-700  text-xl py-1 px-3 "
          onClick={() => onPageChange(currentPage + 1)}
        >
       Next
        </button>

      )}

          
    </div>
  );
};

export default Pagination;
