import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanies } from '../store/companiesSlice';
import CompanyCard from './CompanyCard';
import FilterControls from './FilterControls';
import Pagination from './Pagination';

const CompanyList = () => {
  const dispatch = useDispatch();
  const { paginatedData, filteredData, loading, error } = useSelector((state) => state.companies);

  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-900 border border-red-600 rounded-md p-4">
        <div className="flex">
          <div className="text-red-200">
            <h3 className="text-sm font-medium">Error loading companies</h3>
            <p className="text-sm mt-1">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <FilterControls />
      
      {filteredData.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No companies found matching your criteria.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedData.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
          <Pagination />
        </>
      )}
    </div>
  );
};

export default CompanyList;