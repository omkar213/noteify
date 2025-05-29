import type { RefObject } from "react";
import { NavLink } from "react-router-dom";

import { unauthenticatedLinks, authenticatedLinks } from "../constants/index";
import { useAuthStore, useSnackbarStore } from "../store/store";

import { LogOut } from "lucide-react";

type SidebarProps = {
  isSidebarOpen: boolean;
  sidebarRef: RefObject<HTMLDivElement | null>;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({
  isSidebarOpen,
  sidebarRef,
  setIsSidebarOpen,
}: SidebarProps) => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const showSnackbar = useSnackbarStore((state) => state.showSnackbar);

  const links = user ? authenticatedLinks : unauthenticatedLinks;

  const handleLogout = () => {
    logout();
    setIsSidebarOpen(false);
    showSnackbar("Logged out successfully", "success");
  };

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
            onClick={() => setIsSidebarOpen(false)}
          >
            <Icon size={24} color="blue" />
            <span className="text-xl">{label}</span>
          </NavLink>
        ))}

        <button
          onClick={handleLogout}
          className="px-4 py-3 flex items-center gap-6 text-left hover:bg-blue-100 text-xl"
        >
          <LogOut color="blue" />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
