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
    <Button
      size={"icon"}
      variant={"outline"}
      onClick={handleLogout}
      className=" [&_svg]:fill-black dark:[&_svg]:fill-white"
    >
      <Logout
        size={24}
        variant="Bold"
        // className=" fill-amber-200 border-amber-400 text-blue-300 "
      />
    </Button>
  );
};

export default LogoutButton;
