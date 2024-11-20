import {
  SearchIcon,
  HelpCircleIcon,
  BellIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";

const TopNav = () => {
  return (
    <div className="flex items-center justify-between bg-gray-800 px-6 py-4 text-white shadow-lg">
      {/* Left Section */}
      <div className="flex items-center space-x-8">
        <h1 className="text-xl font-bold">ExtraordinaryJoBle</h1>
        <nav className="hidden md:flex space-x-6">
          <a
            href="#"
            className="hover:text-blue-400 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-colors"
          >
            Schedule
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-colors"
          >
            News
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-colors"
          >
            For You and Your Partner
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-colors"
          >
            Reminders
          </a>
        </nav>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6">
        {/* Search Bar */}
        <div className="relative flex items-center bg-gray-700 px-4 py-2 rounded-full">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none"
          />
          <SearchIcon className="ml-2 text-gray-400 hover:text-white cursor-pointer" />
        </div>

        {/* Action Icons */}
        <HelpCircleIcon
          className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer"
          title="Help"
        />
        <BellIcon
          className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer"
          title="Notifications"
        />
        <SettingsIcon
          className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer"
          title="Settings"
        />
        <UserIcon
          className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer"
          title="User"
        />
      </div>
    </div>
  );
};

export default TopNav;
