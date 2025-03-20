"use client";
import React from "react";
import { Button } from "../ui/button";
import { Logout } from "iconsax-react";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };
  return (
    <>
      <Button
        size={"icon"}
        variant={"outline"}
        onClick={handleLogout}
        className=" [&_svg]:fill-black dark:[&_svg]:fill-white lg:hidden"
      >
        <Logout size={24} variant="Bold" />
      </Button>

      <Button
        variant={"outline"}
        onClick={handleLogout}
        className=" [&_svg]:fill-black dark:[&_svg]:fill-white hidden lg:flex"
      >
        <Logout size={24} variant="Bold" />
        Log out
      </Button>
    </>
  );
};

export default LogoutButton;
