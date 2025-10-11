import CompanyList from './components/CompanyList';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="w-full px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Company Directory</h1>
          <p className="text-gray-300">Discover and explore companies across industries</p>
        </header>
        <CompanyList />
      </div>
    </div>
  )
}

export default App;
