import type { RefObject } from "react";
import { NavLink } from "react-router-dom";

import { unauthenticatedLinks, authenticatedLinks } from "../constants/index";

type SidebarProps = {
  isSidebarOpen: boolean;
  sidebarRef: RefObject<HTMLDivElement | null>;
  isAuthenticated: boolean;
};

const Sidebar = ({
  isSidebarOpen,
  sidebarRef,
  isAuthenticated,
}: SidebarProps) => {
  const links = isAuthenticated ? authenticatedLinks : unauthenticatedLinks;

  return (
    <div
      ref={sidebarRef}
      className={`
        fixed left-0 top-0 z-[999] w-56 h-full bg-white border-r-2 transform transition-transform duration-200 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-[224px]"}
        lg:translate-x-0
      `}
    >
      <h5 className="p-4 text-2xl font-medium">Noteify</h5>
      <div className="py-3 flex flex-col">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `px-4 py-3 flex items-center gap-6 ${
                isActive ? "bg-blue-100 font-semibold text-blue-600" : ""
              }`
            }
          >
            <Icon size={24} color="blue" />
            <span className="text-xl">{label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
