import {
  HomeIcon,
  CalendarIcon,
  MessageSquareIcon,
  BellIcon,
  UserIcon,
  SettingsIcon,
} from "lucide-react";

const Sidebar = () => {
  const sidebarLinks = [
    { icon: <HomeIcon />, title: "Home", path: "/home" },
    { icon: <CalendarIcon />, title: "Schedule", path: "/schedule" },
    { icon: <MessageSquareIcon />, title: "Chat", path: "/chat" },
    { icon: <BellIcon />, title: "Notifications", path: "/notifications" },
    { icon: <UserIcon />, title: "Profile", path: "/profile" },
    { icon: <SettingsIcon />, title: "Settings", path: "/settings" },
  ];

  return (
    <div className="flex flex-col items-center justify-between bg-gray-800 h-screen w-20 lg:w-24 p-4">
      {/* Icons Section */}
      <div className="flex flex-col space-y-8">
        {sidebarLinks.map((link, index) => (
          <a
            key={index}
            href={link.path}
            title={link.title}
            className="text-gray-400 hover:text-white p-2 rounded-lg transition-colors"
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* User Profile */}
      <div className="mt-auto">
        <img
          src="Designer.jpeg"
          alt="User"
          className="w-10 h-10 rounded-full border-2 border-gray-700 hover:border-white transition-all"
        />
      </div>
    </div>
  );
};

export default Sidebar;
