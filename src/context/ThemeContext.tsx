import { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

interface context {
  theme: boolean;
  toogleTheme: () => void;
}

const initialContext: context = {
  theme: true,
  toogleTheme: () => null,
};

export const ThemeContext = createContext<context>(initialContext);

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(initialContext.theme);
  const toogleTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
