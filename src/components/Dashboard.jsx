import { useState } from 'react';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`bg-gradient-to-b from-purple-600 to-indigo-700 h-full text-white shadow-lg transition-all duration-300 ${
          isOpen ? 'w-64' : 'w-20'
        }`}
      >
        <div className="p-4 flex items-center justify-between">
          <button
            className="btn btn-circle btn-sm bg-white text-purple-600 shadow"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-icons">{isOpen ? 'chevron_left' : 'menu'}</span>
          </button>
        </div>

        {/* Sidebar Menu */}
        <ul className="menu p-4 gap-4">
          {[
            { icon: 'dashboard', label: 'Dashboard' },
            { icon: 'analytics', label: 'Analytics' },
            { icon: 'group', label: 'Customers' },
            { icon: 'attach_money', label: 'Sales' },
            { icon: 'settings', label: 'Settings' },
            { icon: 'logout', label: 'Logout' },
          ].map((item, index) => (
            <li key={index} className="tooltip tooltip-right" data-tip={item.label}>
              <a
                className={`flex items-center gap-4 p-3 rounded-lg ${
                  isOpen
                    ? 'hover:bg-white hover:text-purple-600'
                    : 'hover:bg-indigo-500'
                } transition`}
              >
                <span className="material-icons">{item.icon}</span>
                {isOpen && <span>{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md px-4">
          <div className="flex-1">
            <h1 className="text-xl font-semibold">CRM Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="btn btn-circle btn-sm bg-white text-indigo-600 shadow-md">
              <span className="material-icons">notifications</span>
            </button>
            <div className="dropdown dropdown-end relative z-20">
              <label
                tabIndex={0}
                className="btn btn-circle bg-white text-purple-600 avatar shadow-md"
              >
                <div className="w-8 rounded-full">
                  <img src="https://i.pravatar.cc/100" alt="User Avatar" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 p-2 shadow bg-white text-gray-700 rounded-lg w-52 absolute top-12 right-0 z-30"
              >
                <li>
                  <a>Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Welcome Back!</h2>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {[
              { title: 'Revenue', value: '$45,000', change: '+12%' },
              { title: 'New Customers', value: '150', change: '+25%' },
              { title: 'Sales', value: '230', change: '+8%' },
              { title: 'Active Users', value: '1,240', change: '+5%' },
            ].map((stat, index) => (
              <div
                key={index}
                className="card bg-gradient-to-br from-teal-400 to-teal-600 text-white shadow-lg"
              >
                <div className="card-body">
                  <h3 className="text-lg">{stat.title}</h3>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="text-sm">{stat.change} since last month</p>
                </div>
              </div>
            ))}
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'View Analytics',
                description: 'Detailed insights into performance metrics.',
              },
              {
                title: 'Manage Customers',
                description: 'Track and engage with your customer base.',
              },
              {
                title: 'Boost Sales',
                description: 'Strategies to improve your sales figures.',
              },
            ].map((card, index) => (
              <div key={index} className="card bg-white shadow-md hover:shadow-lg transition">
                <div className="card-body">
                  <h3 className="card-title text-gray-800">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-sm bg-indigo-600 text-white hover:bg-indigo-700">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
