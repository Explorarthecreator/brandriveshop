import React from "react";
import { Button } from "../ui/button";
import { Logout } from "iconsax-react";
import ToggleTheme from "../ToggleTheme";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-6 px-4 xl:px-0 max-w-[82rem] m-auto bg-white dark:bg-black dark:border-b dark:border-b-white">
      <div>
        <h1>Dashboard</h1>
      </div>
      <div className="space-x-4">
        <Button
          size={"icon"}
          variant={"outline"}
          className=" [&_svg]:fill-black dark:[&_svg]:fill-white"
        >
          <Logout
            size={24}
            variant="Bold"
            // className=" fill-amber-200 border-amber-400 text-blue-300 "
          />
        </Button>
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Navbar;
