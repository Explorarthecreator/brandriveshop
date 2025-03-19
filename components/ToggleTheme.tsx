"use client";

import { useState, useEffect } from "react";

import { useTheme } from "next-themes";

import { Sun1, Moon } from "iconsax-react";
import { Button } from "./ui/button";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  const dark = theme === "dark";
  return (
    <Button
      size={"icon"}
      variant={"outline"}
      onClick={() => setTheme(dark ? "light" : "dark")}
    >
      {dark ? (
        <Sun1 size={20} color={dark ? "#fff" : "#000"} />
      ) : (
        <Moon size={20} color={dark ? "#fff" : "#000"} />
      )}
      {/* <Moon size={20} color="#000" /> */}
    </Button>
  );
};

export default ToggleTheme;
