import React from "react";

import ToggleTheme from "../ToggleTheme";
import LogoutButton from "../auth/Logout";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-6 px-4 xl:px-0 max-w-[82rem] m-auto ">
      <div>
        <h1>Dashboard</h1>
      </div>
      <div className="space-x-4 flex">
        <LogoutButton />
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Navbar;
