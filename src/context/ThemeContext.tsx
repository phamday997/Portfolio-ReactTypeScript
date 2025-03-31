import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type ThemeType = "light" | "dark";
type ModeType = "manual" | "auto";

interface ThemeContextType {
  theme: ThemeType;
  mode: ModeType;
  toggleTheme: () => void;
  setMode: (mode: ModeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeType>("light");
  const [mode, setMode] = useState<ModeType>("manual");

  const getLocalTimeTheme = () => {
    const currentHour = new Date().getHours();
    return currentHour >= 7 && currentHour < 19 ? "light" : "dark";
  };

  const applyTheme = (theme: ThemeType) => {
    document.documentElement.setAttribute("data-theme", theme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as ThemeType | null;
    const savedMode = localStorage.getItem("mode") as ModeType | null;

    if (savedMode === "auto") {
      setMode("auto");
      const autoTheme = getLocalTimeTheme();
      setTheme(autoTheme);
      applyTheme(autoTheme);
    } else {
      setMode(savedMode || "manual");
      setTheme(savedTheme || "light");
      applyTheme(savedTheme || "light");
    }
  }, []);

  const toggleTheme = () => {
    if (mode === "auto") return;

    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleSetMode = (newMode: ModeType) => {
    setMode(newMode);
    localStorage.setItem("mode", newMode);

    if (newMode === "auto") {
      const autoTheme = getLocalTimeTheme();
      setTheme(autoTheme);
      applyTheme(autoTheme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{ theme, mode, toggleTheme, setMode: handleSetMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemePorfolio = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
