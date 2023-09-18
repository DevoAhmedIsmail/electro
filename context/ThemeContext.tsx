"use client";

import { createContext, useEffect, useState } from "react";

type ThemeContextType = {
  theme: string;
  toggle: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggle() {},
});

const getFromLocalStorage = (): string => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("themeMode");
    return value || "light";
  }
  return "light"; // Default to 'light' if localStorage is not available
};

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<string>(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("themeMode", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
