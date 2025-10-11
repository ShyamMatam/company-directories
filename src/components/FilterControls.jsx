import { useDispatch, useSelector } from 'react-redux';
import { setFilters, clearFilters, setSorting } from '../store/companiesSlice';

const FilterControls = () => {
  const dispatch = useDispatch();
  const { filters, data, sortBy, sortOrder } = useSelector((state) => state.companies);

  const locations = [...new Set(data.map(company => `${company.location.city}, ${company.location.country}`))]; 
  const industries = [...new Set(data.map(company => company.industry))];

  const handleFilterChange = (filterType, value) => {
    dispatch(setFilters({ [filterType]: value }));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  const handleSortChange = (field) => {
    const newOrder = sortBy === field && sortOrder === 'asc' ? 'desc' : 'asc';
    dispatch(setSorting({ sortBy: field, sortOrder: newOrder }));
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 border border-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Search Companies
          </label>
          <input
            type="text"
            placeholder="Search by name..."
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Location
          </label>
          <select
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Locations</option>
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Industry
          </label>
          <select
            value={filters.industry}
            onChange={(e) => handleFilterChange('industry', e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Industries</option>
            {industries.map(industry => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Sort By
          </label>
          <button
            onClick={() => handleSortChange('name')}
            className={`w-full px-3 py-2 rounded-md transition-colors ${
              sortBy === 'name' ? 'bg-blue-400 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Sort by Name {sortBy === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Actions
          </label>
          <button
            onClick={handleClearFilters}
            className="w-full px-3 py-2 bg-[#e05] text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;