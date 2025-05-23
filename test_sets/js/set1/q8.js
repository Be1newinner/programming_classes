import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const SidebarApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4 text-lg font-bold border-b border-gray-600">📂 Sidebar</div>
        <nav className="flex flex-col p-4 space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-3 py-2 rounded ${
                  isActive ? "bg-blue-500" : "hover:bg-gray-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 left-4 z-50 p-2 bg-white rounded shadow-md"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Dummy Main Content */}
      <div className="flex-1 p-10 bg-gray-100 ml-0 lg:ml-64">
        <h1 className="text-2xl font-semibold">Main Content</h1>
        <p className="mt-4 text-gray-600">Click the menu button to toggle sidebar.</p>
      </div>
    </div>
  );
};

export default SidebarApp;
