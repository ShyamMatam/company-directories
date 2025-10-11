import { useDispatch, useSelector } from 'react-redux';
import { setPage, setItemsPerPage } from '../store/companiesSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const { pagination, filteredData } = useSelector((state) => state.companies);
  const { currentPage, totalPages, itemsPerPage } = pagination;

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  const handleItemsPerPageChange = (items) => {
    dispatch(setItemsPerPage(items));
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);
    
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
      <div className="flex items-center gap-2">
        <span className="text-gray-300 text-sm">Show:</span>
        <select
          value={itemsPerPage}
          onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
          className="px-3 py-1 bg-gray-700 border border-gray-600 text-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value={6}>6</option>
          <option value={9}>9</option>
          <option value={12}>12</option>
          <option value={18}>18</option>
        </select>
        <span className="text-gray-300 text-sm">
          of {filteredData.length} companies
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Previous
        </button>

        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-2 rounded-md transition-colors ${
              currentPage === page
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;