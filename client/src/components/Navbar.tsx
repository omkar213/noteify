import { Menu } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

type NavbarProps = {
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const Navbar = ({ setIsSidebarOpen }: NavbarProps) => {
  return (
    <div className="fixed w-full h-16 px-4 py-4 bg-[#fefefe] shadow-md">
      <div className="flex items-center gap-5">
        <div className="block lg:hidden cursor-pointer">
          <Menu onClick={() => setIsSidebarOpen((prev) => !prev)} />
        </div>
        <h1 className="font-medium text-lg">Welcome to Noteify</h1>
      </div>
    </div>
  );
};

export default Navbar;
