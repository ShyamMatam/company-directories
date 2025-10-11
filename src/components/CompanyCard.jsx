const CompanyCard = ({ company }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-700 text-center">
      <h3 className="text-xl font-semibold text-white mb-2">{company.name}</h3>
      <div className="space-y-2">
        <p className="text-gray-300">
          <span className="font-medium text-blue-400">Industry:</span> {company.industry}
        </p>
        <p className="text-gray-300">
          <span className="font-medium text-blue-400">Location:</span> {company.location.city}, {company.location.country}
        </p>
        <p className="text-gray-300">
          <span className="font-medium text-blue-400">Employees:</span> {company.employees.toLocaleString()}
        </p>
        <p className="text-gray-300">
          <span className="font-medium text-blue-400">Type:</span> {company.is_public ? 'Public' : 'Private'}
        </p>
      </div>
    </div>
  );
};

export default CompanyCard;