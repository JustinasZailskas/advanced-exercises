import { createContext, useContext, useEffect, useState } from "react";
import ChildrenProps from "../interface/ChildrenProps";

const HeaderContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const HeaderProvider = ({ children }: ChildrenProps) => {
  const [theme, setTheme] = useState<string>("light");
  useEffect(() => {
    console.log("Header state", { theme });
  }, [theme]);

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <HeaderContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </HeaderContext.Provider>
  );
};

export function useTheme() {
  return useContext(HeaderContext);
}
