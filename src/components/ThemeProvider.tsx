
import React, { createContext, useContext, useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

type Theme = "light" | "dark";
type ThemeColor = "default" | "blue" | "purple" | "green";

interface ThemeContextType {
  theme: Theme;
  themeColor: ThemeColor;
  setTheme: (theme: Theme) => void;
  setThemeColor: (color: ThemeColor) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { toast } = useToast();
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem("theme") as Theme;
      return savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    }
    return "light";
  });

  const [themeColor, setThemeColorState] = useState<ThemeColor>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem("themeColor") as ThemeColor) || "default";
    }
    return "default";
  });

  // Apply theme class as soon as possible to prevent flashing
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove("light", "dark");
    
    // Add the new theme class
    root.classList.add(theme);
    
    // Store in localStorage
    localStorage.setItem("theme", theme);
    
    // Log the change for debugging
    console.log(`Theme set to: ${theme}`);
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove existing theme color classes
    root.classList.remove("theme-default", "theme-blue", "theme-purple", "theme-green");
    
    // Add the new theme color class
    root.classList.add(`theme-${themeColor}`);
    
    // Store in localStorage
    localStorage.setItem("themeColor", themeColor);
    
    // Log the change for debugging
    console.log(`Theme color set to: ${themeColor}`);
  }, [themeColor]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    toast({
      title: `${newTheme === 'dark' ? 'Dark' : 'Light'} Mode Activated`,
      description: `The application theme has been changed to ${newTheme} mode.`,
      duration: 2000,
    });
  };

  const setThemeColor = (color: ThemeColor) => {
    setThemeColorState(color);
    const colorNames = {
      default: "Default",
      blue: "Blue",
      purple: "Purple",
      green: "Green"
    };
    
    toast({
      title: `${colorNames[color]} Theme Applied`,
      description: `The color theme has been updated.`,
      duration: 2000,
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, themeColor, setTheme, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
