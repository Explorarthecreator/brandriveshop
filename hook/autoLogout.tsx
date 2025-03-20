"use client";

import { useEffect } from "react";

export const useAutoLogout = (inactiveTime: number, onLogout: () => void) => {
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const resetTimeout = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onLogout(); // Call the logout function
      }, inactiveTime);
    };

    // Add event listeners to track user activity
    window.addEventListener("mousemove", resetTimeout);
    window.addEventListener("keydown", resetTimeout);
    window.addEventListener("scroll", resetTimeout);

    // Initialize the timeout
    resetTimeout();

    // Cleanup event listeners and timeout
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", resetTimeout);
      window.removeEventListener("keydown", resetTimeout);
      window.removeEventListener("scroll", resetTimeout);
    };
  }, [inactiveTime, onLogout]);
};
