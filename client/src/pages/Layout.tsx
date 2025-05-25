import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useEffect, useRef, useState } from "react";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickedOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(target) &&
        window.innerWidth < 1024
      ) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickedOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickedOutside);
  }, [isSidebarOpen]);

  return (
    <div className="w-full h-screen flex">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        sidebarRef={sidebarRef}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="w-full md:left-0 lg:w-[calc(100%-224px)] h-full fixed lg:left-56">
        <Navbar setIsSidebarOpen={setIsSidebarOpen} />
        <div className="h-[calc(100vh-64px)] mt-16 bg-[#ececec] text-[#00000089] px-6 py-7">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
