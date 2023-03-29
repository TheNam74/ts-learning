import { createContext } from "react";
import { theme } from "./theme";

type ThemContextProviderProps = {
    children: React.ReactNode
}

export const ThemeContext = createContext(theme)

export const ThemeContextProvider =({children}:ThemContextProviderProps)=>{
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}