import { useState } from "react";
import { Home as Dashboard, Users, Cpu } from "lucide-react";

export default function Sidebar({ onMenuClick }) {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    onMenuClick(menu);
  };

  return (
    <aside className="w-52 bg-[#0c1019] shadow-md p-3">
      <h1 className="text-2xl text-center mb-4 font-extrabold text-transparent bg-clip-text bg-[radial-gradient(circle,_#dd519a,_#b34bf0)]">
        InterOpera.AI
      </h1>
      <hr className="my-6 border-t border-gray-700" />
      <nav className="space-y-4">
        <a
          href="#"
          onClick={() => handleMenuClick("Dashboard")}
          className={`flex items-center text-xs ${
            activeMenu === "Dashboard" ? "text-[#d750a5]" : "text-gray-200"
          } hover:text-violet-400`}
        >
          <Dashboard
            className={`w-4 h-4 mr-2 ${
              activeMenu === "Dashboard" ? "text-[#d750a5]" : "text-gray-600"
            }`}
          />
          Dashboard
        </a>
        <a
          href="#"
          onClick={() => handleMenuClick("Sales Representative")}
          className={`flex items-center text-xs ${
            activeMenu === "Sales Representative" ? "text-[#d750a5]" : "text-gray-200"
          } hover:text-violet-400`}
        >
          <Users
            className={`w-4 h-4 mr-2 ${
              activeMenu === "Sales Representative" ? "text-[#d750a5]" : "text-gray-600"
            }`}
          />
          Sales Representative
        </a>
        <a
          href="#"
          onClick={() => handleMenuClick("Manage Models")}
          className={`flex items-center text-xs ${
            activeMenu === "Manage Models" ? "text-[#d750a5]" : "text-gray-200"
          } hover:text-violet-400`}
        >
          <Cpu
            className={`w-4 h-4 mr-2 ${
              activeMenu === "Manage Models" ? "text-[#d750a5]" : "text-gray-600"
            }`}
          />
          Manage Models
        </a>
      </nav>
    </aside>
  );
}