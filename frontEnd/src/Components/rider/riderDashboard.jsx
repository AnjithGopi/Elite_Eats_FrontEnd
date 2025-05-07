import Ridernav from "./ridernav"



function RiderDashboard() {
  // Sample data for the bar graph
  const earningsData = [
    { day: 'Mon', amount: 120 },
    { day: 'Tue', amount: 190 },
    { day: 'Wed', amount: 140 },
    { day: 'Thu', amount: 210 },
    { day: 'Fri', amount: 180 },
    { day: 'Sat', amount: 250 },
    { day: 'Sun', amount: 200 },
  ];

  // Find the maximum value for scaling
  const maxEarning = Math.max(...earningsData.map(item => item.amount));

  return (
    <div className="flex">
      <Ridernav />
      
      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold text-[#00b074] mb-6">Dashboard Overview</h1>
        
        {/* Earnings Summary Card */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Total Earnings</h2>
          <p className="text-3xl font-bold text-[#00b074]">$1,290.00</p>
          <p className="text-gray-500 mt-2">This week</p>
        </div>
        
        {/* Bar Graph */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Weekly Earnings</h2>
          <div className="flex items-end space-x-4 h-64">
            {earningsData.map((item, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div 
                  className="w-10 bg-[#00b074] rounded-t hover:bg-[#008a5c] transition-colors"
                  style={{ height: `${(item.amount / maxEarning) * 100}%` }}
                  title={`$${item.amount}`}
                >
                </div>
                <span className="text-xs mt-2 text-gray-600">{item.day}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-700">Completed Deliveries</h3>
            <p className="text-2xl font-bold mt-2">24</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-700">Active Orders</h3>
            <p className="text-2xl font-bold mt-2">3</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-700">Customer Rating</h3>
            <p className="text-2xl font-bold mt-2">4.8/5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RiderDashboard
